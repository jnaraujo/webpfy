import { create } from "zustand";

interface UploadStore {
  quality: number;
  setQuality: (quality: number) => void;
}

export const uploadStore = create<UploadStore>((set) => ({
  quality: 95,
  setQuality: (quality) => set({ quality }),
}));
