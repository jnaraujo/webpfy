import { Loader2 } from "lucide-react";

export default function Convert() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <Loader2 size={64} className="animate-spin text-zinc-300" />
      <div className="mt-8 text-center text-zinc-400">
        Converting your images to webp format...
      </div>
    </div>
  );
}
