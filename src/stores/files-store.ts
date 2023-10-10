import { create } from "zustand";

interface FileStore {
  files: File[];
  setFiles: (files: File[]) => void;
  addFile: (file: File) => void;
  removeFile: (file: File) => void;
  removeAllFiles: () => void;
  getFiles: () => File[];
}

export const useFilesStore = create<FileStore>((set, get) => ({
  files: [],
  addFile: (file) => set((state) => ({ files: [...state.files, file] })),
  getFiles: () => get().files,
  removeAllFiles: () => set({ files: [] }),
  removeFile: (file) => {
    const files = get().files.filter((f) => f.name !== file.name);
    set({ files });
  },
  setFiles: (files) => set({ files }),
}));
