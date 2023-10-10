"use client";

import { useCallback, useRef, useState } from "react";
import Vips from "wasm-vips";
import JSZip from "jszip";
import { useFilesStore } from "@/stores/files-store";
import Upload from "./Upload";
import Convert from "./Convert";
import Done from "./Done";

interface ConvertedFile {
  name: string;
  blob: Blob;
}

export default function Form() {
  const { files, removeAllFiles } = useFilesStore();
  const [convertedFiles, setConvertedFiles] = useState<ConvertedFile[]>([]);
  const [status, setStatus] = useState<
    "converting" | "done" | "error" | "idle"
  >("idle");

  const [downloadUrl, setDownloadUrl] = useState<string>("#");

  const vipsRef = useRef<typeof Vips>();

  const convertImages = useCallback(
    async (quality: number) => {
      if (!vipsRef.current) {
        vipsRef.current = await Vips({
          dynamicLibraries: [],
          locateFile: (fileName, _) => fileName,
          mainScriptUrlOrBlob: "/vips.js",
        });
      }
      const vips = vipsRef.current;

      const response = await Promise.all(
        files.map(async (file) => {
          const buffer = await file.arrayBuffer();
          const image: Vips.Image = vips.Image.newFromBuffer(buffer);
          const webpImageBuffer = new Uint8Array(
            image.writeToBuffer(".webp", {
              Q: quality,
            }),
          );
          const blob = new Blob([webpImageBuffer], { type: "image/webp" });

          return {
            name: file.name.replace(/\.[^/.]+$/, ""),
            blob,
          };
        }),
      );

      setConvertedFiles(response);

      const zip = new JSZip();

      response.forEach((file) => {
        zip.file(`${file.name}.webp`, file.blob);
      });

      const blob = await zip.generateAsync({ type: "base64" });
      const url = "data:application/zip;base64," + blob;
      setDownloadUrl(url);
      setStatus("done");
    },
    [files],
  );

  const handleConvert = useCallback(
    async (quality: number) => {
      setStatus("converting");
      await convertImages(quality);
      setStatus("done");
    },
    [convertImages],
  );

  const onConvertMoreImages = useCallback(() => {
    setStatus("idle");
    setDownloadUrl("#");
  }, []);

  const Comp = useCallback(() => {
    switch (status) {
      case "idle":
        return <Upload convert={handleConvert} />;
      case "converting":
        return <Convert />;
      case "done":
        return (
          <Done
            downloadUrl={downloadUrl}
            onConvertMoreImages={onConvertMoreImages}
            convertedFiles={convertedFiles}
          />
        );
      default:
        return <div>:&apos;)</div>;
    }
  }, [status, handleConvert, downloadUrl, onConvertMoreImages, convertedFiles]);

  return (
    <section className="flex min-h-screen">
      <div className="mx-auto flex w-full">
        <Comp />
      </div>
    </section>
  );
}
