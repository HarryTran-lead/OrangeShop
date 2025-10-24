import { useEffect } from "react";

export default function useTheme() {
  useEffect(() => {
    // đọc theme đã lưu
    const saved = localStorage.getItem("theme");

    // nếu đã có, dùng nó; nếu chưa có, ALWAYS "light"
    const theme = saved ?? "light";

    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  const toggle = () => {
    const isDark = document.documentElement.classList.contains("dark");
    const next = !isDark ? "dark" : "light";

    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return { toggle };
}
