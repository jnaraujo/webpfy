export function calculateTotalFilesSize(files: File[]) {
  const totalSize = files.reduce((acc, file) => acc + file.size, 0);
  return totalSize;
}

export function calculatePercentage(before: number, after: number) {
  return Math.floor(((before - after) / before) * 100);
}
export const formatter = Intl.NumberFormat("en", {
  notation: "compact",
  style: "unit",
  unit: "byte",
  unitDisplay: "narrow",
});

export async function loadVips() {
  const Vips = (await import("wasm-vips")).default;
  return await Vips({
    dynamicLibraries: [],
    locateFile: (fileName, _) => fileName,
    mainScriptUrlOrBlob: "/vips.js",
  });
}
