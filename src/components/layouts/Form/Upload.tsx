import File from "@/components/File";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import { useFilesStore } from "@/stores/files-store";
import { uploadStore } from "@/stores/upload-store";
import { Trash2 } from "lucide-react";
import { useRef } from "react";

interface Props {
  convert: (quality: number) => void;
}

export default function Upload({ convert }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setFiles, files, removeFile } = useFilesStore();
  const { quality, setQuality } = uploadStore();

  function handleDrag(e: React.DragEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
  }

  function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };

    if (target.files && target.files[0]) {
      addFiles(target.files);
    }

    (e.target as any).value = null; // reset input
  }

  function handleDrop(e: React.DragEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      addFiles(e.dataTransfer.files);
    }

    e.dataTransfer.clearData(); // reset input
  }

  function addFiles(fileList: FileList) {
    const images = Array.from(fileList).filter((file) =>
      file.type.startsWith("image/"),
    );

    const filtered = images.filter((file) => {
      return !files.some((f) => f.name === file.name);
    });
    setFiles(files.concat(filtered));
  }

  function handleConvert() {
    convert(quality);
  }

  const hasFiles = files.length > 0;

  return (
    <form
      className="flex flex-1 flex-col items-center justify-center rounded-xl"
      encType="multipart/form-data"
      onSubmit={(e) => e.preventDefault()}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <label className="flex flex-col items-center justify-center">
        {!hasFiles && (
          <>
            <h1 className="text-2xl font-bold text-zinc-200">
              Convert your images to WebP
            </h1>
            <div className="mt-2 text-center text-zinc-400">
              Drag and drop your image here
              <br />
              <button
                className="text-zinc-300 underline hover:text-zinc-200"
                onClick={() => inputRef.current?.click()}
              >
                or select from your device
              </button>
            </div>
          </>
        )}

        <input
          type="file"
          className="hidden"
          name="image"
          accept="image/png, image/jpeg"
          multiple
          ref={inputRef}
          onChange={handleOnChange}
        />
      </label>

      {hasFiles && (
        <div className="flex flex-col gap-4">
          <h1 className="mt-8 text-center text-lg font-semibold text-zinc-200 md:text-2xl">
            Select your images to convert
          </h1>

          <div className="flex h-10 items-center justify-between">
            <Badge>
              {files.length} {files.length === 1 ? "image" : "images"} selected
            </Badge>
            <Button
              className="text-red-500"
              variant="link"
              onClick={() => setFiles([])}
            >
              Remove all
            </Button>
          </div>

          <ScrollArea className="max-h-[250px]">
            <div className="mr-2 grid grid-cols-3 gap-4 md:grid-cols-5">
              {files.map((file) => (
                <File key={file.name} file={file} onClick={removeFile}>
                  <Trash2 className="text-red-500" />
                </File>
              ))}
            </div>
          </ScrollArea>

          <div className="mt-4">
            <label className="text-zinc-400" htmlFor="quality">
              Quality
              <div className="mt-2 flex w-full items-center justify-between gap-2">
                <Slider
                  id="quality"
                  name="quality"
                  max={100}
                  step={1}
                  onValueChange={(value) => setQuality(value[0])}
                  value={[quality]}
                  className="w-full"
                />
                <span className="flex text-zinc-300">
                  {quality} <span className="text-zinc-300">%</span>
                </span>
              </div>
            </label>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Button
              variant="link"
              onClick={() => inputRef.current?.click()}
              className="w-fit underline"
            >
              add more images
            </Button>

            <Button className="w-full" onClick={handleConvert}>
              Convert
            </Button>
          </div>
        </div>
      )}
    </form>
  );
}
