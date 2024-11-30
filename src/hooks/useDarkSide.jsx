import { useEffect, useState } from "react";

export default function useDarkSide() {
  const localTheme = window.localStorage.getItem("theme");
  const [theme, setTheme] = useState(localTheme || "dark");
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    window.localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
