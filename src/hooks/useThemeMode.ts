import { useState } from "react";

export const useThemeMode = () => {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return { mode, toggleTheme };
};
