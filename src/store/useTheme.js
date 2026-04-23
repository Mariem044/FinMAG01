import { create } from "zustand";
import { persist } from "zustand/middleware";
export const useTheme = create()(
  persist(
    (set, get) => ({
      isDark: true,
      toggle: () => {
        const next = !get().isDark;
        document.documentElement.classList.toggle("light", !next);
        set({ isDark: next });
      },
    }),
    { name: "siad-theme" },
  ),
);
/** Call once on app boot to apply persisted theme */
export function applyStoredTheme() {
  try {
    const stored = JSON.parse(localStorage.getItem("siad-theme") || "{}");
    if (stored?.state?.isDark === false) {
      document.documentElement.classList.add("light");
    }
  } catch {}
}
