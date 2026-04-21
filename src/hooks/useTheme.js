import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    return new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
};
