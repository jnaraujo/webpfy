import FileComp from "@/components/File";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowDownToLine, Undo } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

interface ConvertedFile {
  name: string;
  blob: Blob;
}

interface Props {
  downloadUrl: string;
  onConvertMoreImages: () => void;
  convertedFiles: ConvertedFile[];
}

export default function Done({
  downloadUrl,
  onConvertMoreImages,
  convertedFiles,
}: Props) {
  function downloadFile(file: File) {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = file.name;
    link.click();
  }

  const files = convertedFiles.map(
    (file) => new File([file.blob], `${file.name}.webp`),
  );

  const fileView = useMemo(() => {
    return files.map((file) => (
      <FileComp
        key={file.name}
        onClick={downloadFile}
        file={new File([file], `${file.name}.webp`)}
      >
        <ArrowDownToLine className="text-zinc-200" />
      </FileComp>
    ));
  }, [files]);

  return (
    <div className="flex flex-col items-center">
      <h2 className="mt-8 text-center text-lg font-semibold text-zinc-200 md:text-2xl">
        Your images are ready to download!
      </h2>

      <ScrollArea className="mt-8 max-h-60">
        <div className="mr-2 grid grid-cols-3 gap-4 md:grid-cols-5">
          {fileView}
        </div>
      </ScrollArea>

      <div className="mt-20 flex flex-col gap-4 md:flex-row">
        <Button onClick={onConvertMoreImages} variant="secondary">
          <Undo className="mr-2 inline-block" />
          Voltar
        </Button>

        <Button asChild>
          <Link href={downloadUrl}>
            <ArrowDownToLine className="mr-2 inline-block" />
            Download as zip
          </Link>
        </Button>
      </div>
    </div>
  );
}
