import File from "@/components/File";
import { useFilesStore } from "@/stores/files-store";
import { Trash2 } from "lucide-react";
import { memo, useMemo, useRef, useState } from "react";

interface Props {
  convert: (quality: number) => void;
}

function Upload({ convert }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setFiles, files, removeFile } = useFilesStore();
  const [quality, setQuality] = useState(95);

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
  }

  function handleDrop(e: React.DragEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      addFiles(e.dataTransfer.files);
    }
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

  const fileView = useMemo(() => {
    return files.map((file) => (
      <File key={file.name} file={file} onClick={removeFile}>
        <Trash2 className="text-red-500" />
      </File>
    ));
  }, [files, removeFile]);

  return (
    <form
      className="flex h-screen w-screen flex-col items-center justify-center rounded-xl"
      encType="multipart/form-data"
      onSubmit={(e) => e.preventDefault()}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <label className="flex flex-col items-center justify-center">
        {!hasFiles && (
          <>
            <span className="text-2xl font-bold text-zinc-300">
              Upload your image
            </span>
            <div className="mt-2 text-center text-zinc-400">
              Drag and drop your image here
              <br />
              or{" "}
              <button
                className="text-zinc-100 underline hover:text-zinc-200"
                onClick={() => inputRef.current?.click()}
              >
                browse
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
        <div className="flex flex-col gap-8">
          <div className="mt-8 grid max-h-60 grid-cols-3 gap-4 overflow-y-auto pr-2 md:grid-cols-5">
            {fileView}
          </div>

          <div>
            <label className="text-zinc-400" htmlFor="quality">
              Quality
              <input
                type="range"
                id="quality"
                name="quality"
                value={quality}
                onChange={(e) => setQuality(Number(e.target.value))}
                min="1"
                max="100"
                className="w-full"
              />
            </label>
          </div>

          <div className="flex flex-col gap-2">
            <button
              className="text-zinc-400 underline hover:text-zinc-500"
              onClick={() => inputRef.current?.click()}
            >
              add more images
            </button>

            <button
              onClick={handleConvert}
              className="rounded-lg bg-zinc-100 px-4 py-2 font-bold text-zinc-950 hover:bg-zinc-200"
            >
              Convert
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

export default memo(Upload);
