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
