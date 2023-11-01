"use client";

import { useCallback, useRef, useState } from "react";
import type Vips from "wasm-vips";
import { useFilesStore } from "@/stores/files-store";
import Upload from "./stages/Upload";
import Convert from "./stages/Convert";
import Done from "./stages/Done";
import { loadVips } from "./helper";

interface ConvertedFile {
  name: string;
  blob: Blob;
}

export default function Form() {
  const { files } = useFilesStore();
  const [convertedFiles, setConvertedFiles] = useState<ConvertedFile[]>([]);
  const [status, setStatus] = useState<
    "converting" | "done" | "error" | "idle"
  >("idle");

  const vipsRef = useRef<typeof Vips>();

  const convertImages = useCallback(
    async (quality: number) => {
      if (!vipsRef.current) {
        vipsRef.current = await loadVips();
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
      setStatus("done");
    },
    [files],
  );

  async function downloadAsZip() {
    const JSZip = (await import("jszip")).default;
    const zip = new JSZip();
    convertedFiles.forEach((file) => {
      zip.file(`${file.name}.webp`, file.blob);
    });

    const blob = await zip.generateAsync({ type: "base64" });
    const url = "data:application/zip;base64," + blob;

    const link = document.createElement("a");
    link.href = url;
    link.download = "webpfy-images.zip";
    link.click();
  }

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
  }, []);

  return (
    <section className="flex min-h-[100svh]">
      <div className="mx-auto flex w-full">
        {status === "idle" && <Upload convert={handleConvert} />}
        {status === "converting" && <Convert />}
        {status === "done" && (
          <Done
            onClickDownload={downloadAsZip}
            onConvertMoreImages={onConvertMoreImages}
            convertedFiles={convertedFiles}
          />
        )}
      </div>
    </section>
  );
}
