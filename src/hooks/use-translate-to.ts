import { create } from "zustand";

interface TranslateTo {
  language: string;
  setlanguage: (language: string) => void;
}

export const useTranslateTo = create<TranslateTo>((set) => ({
  language: "en",
  setlanguage: (language) => set({ language }),
}));
