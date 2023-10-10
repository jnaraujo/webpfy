import FileComp from "@/components/File";
import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";

interface ConvertedFile {
  name: string;
  blob: Blob;
}

interface Props {
  downloadUrl: string;
  reset: () => void;
  convertedFiles: ConvertedFile[];
}

export default function Done({ downloadUrl, reset, convertedFiles }: Props) {
  function downloadFile(file: File) {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = file.name;
    link.click();
  }

  const files = convertedFiles.map(
    (file) => new File([file.blob], `${file.name}.webp`),
  );

  return (
    <div className="flex flex-col items-center">
      <h2 className="mt-8 text-center text-lg font-semibold text-zinc-200 md:text-2xl">
        Your images are ready to download!
      </h2>
      <div className="mt-8 grid max-h-60 grid-cols-3 gap-4 overflow-y-auto pr-2 md:grid-cols-5">
        {files.map((file) => (
          <FileComp
            key={file.name}
            onClick={downloadFile}
            file={new File([file], `${file.name}.webp`)}
          >
            <ArrowDownToLine className="text-zinc-400" />
          </FileComp>
        ))}
      </div>

      <div className="mt-20 flex flex-col gap-4 md:flex-row">
        <Link
          href={downloadUrl}
          className="rounded-lg bg-zinc-100 px-4 py-2 font-bold text-zinc-950 hover:bg-zinc-200"
        >
          <ArrowDownToLine className="mr-2 inline-block" />
          Download as zip
        </Link>
        <button
          onClick={reset}
          className="rounded-lg border border-zinc-100 px-4 py-2 font-bold text-zinc-100 hover:text-zinc-200"
        >
          Convert more images
        </button>
      </div>
    </div>
  );
}
