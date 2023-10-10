import FileComp from "@/components/File";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, Plus } from "lucide-react";
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
            <ArrowDownToLine className="text-zinc-200" />
          </FileComp>
        ))}
      </div>

      <div className="mt-20 flex flex-col gap-4 md:flex-row">
        <Button asChild>
          <Link href={downloadUrl}>
            <ArrowDownToLine className="mr-2 inline-block" />
            Download as zip
          </Link>
        </Button>
        <Button onClick={reset} variant="secondary">
          <Plus className="mr-2 inline-block" />
          Convert more images
        </Button>
      </div>
    </div>
  );
}
