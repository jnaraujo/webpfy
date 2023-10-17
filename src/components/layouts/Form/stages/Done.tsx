import FileComp from "@/components/File";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowDownToLine, TrendingDown, TrendingUp, Undo } from "lucide-react";
import { useMemo } from "react";
import {
  calculatePercentage,
  calculateTotalFilesSize,
  formatter,
} from "../helper";
import { useFilesStore } from "@/stores/files-store";

interface ConvertedFile {
  name: string;
  blob: Blob;
}

interface Props {
  onClickDownload: () => void;
  onConvertMoreImages: () => void;
  convertedFiles: ConvertedFile[];
}

export default function Done({
  onClickDownload,
  onConvertMoreImages,
  convertedFiles,
}: Props) {
  const { getFiles } = useFilesStore();

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

  const totalFileSizeBefore = calculateTotalFilesSize(getFiles());
  const totalFileSizeAfter = calculateTotalFilesSize(files);
  const percentageSaved = calculatePercentage(
    totalFileSizeBefore,
    totalFileSizeAfter,
  );

  return (
    <div className="container flex flex-1 flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <div>
          <h1 className="mt-8 text-center text-lg font-semibold text-zinc-200 md:text-2xl">
            Your images are ready to download!
          </h1>
          <p className="mt-2 text-center text-zinc-400">
            Click on the image to download it.
          </p>
        </div>

        <ScrollArea className="max-h-[250px] w-full">
          <div className="grid grid-cols-3 gap-4 md:mr-2 md:grid-cols-5">
            {fileView}
          </div>
        </ScrollArea>

        <div className="mt-4 flex flex-col items-center justify-center gap-1">
          <div className="flex gap-2">
            {percentageSaved >= 0 ? (
              <TrendingDown size={24} className="text-green-500" />
            ) : (
              <TrendingUp size={24} className="text-red-500" />
            )}
            <span
              className={
                percentageSaved >= 0 ? "text-green-500" : "text-red-500"
              }
            >
              {Math.abs(percentageSaved)}% {percentageSaved >= 0 && "saved"}
            </span>
            <br />
            <span className="text-zinc-400">
              ( from {formatter.format(totalFileSizeBefore)} to{" "}
              {formatter.format(totalFileSizeAfter)})
            </span>
          </div>
          {percentageSaved < 0 && (
            <>
              <span className="max-w-[300px] text-center text-zinc-400">
                You can try to reduce the quality to save more space.
              </span>
            </>
          )}
        </div>

        <div className="flex w-full flex-col justify-center gap-4 md:flex-row">
          <Button onClick={onConvertMoreImages} variant="secondary">
            <Undo className="mr-2 inline-block" />
            Back
          </Button>

          <Button onClick={onClickDownload}>
            <ArrowDownToLine className="mr-2 inline-block" />
            Download as zip
          </Button>
        </div>
      </div>
    </div>
  );
}
