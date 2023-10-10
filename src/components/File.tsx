import Image from "next/image";

interface Props {
  file: File;
  onClick: (file: File) => void;
  children?: React.ReactNode;
}

export default function File({ file, onClick, children }: Props) {
  return (
    <div
      className="group relative flex aspect-square w-20 cursor-pointer items-center justify-center overflow-hidden rounded-lg"
      onClick={() => onClick(file)}
    >
      <div className="pointer absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
        {children}
      </div>
      <Image
        src={URL.createObjectURL(file)}
        alt={file.name}
        className="h-full w-full object-cover"
        width={80}
        height={80}
      />
    </div>
  );
}
