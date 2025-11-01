import { useEffect, useState } from "react";

function ThemeToggle({ value, onChange }) {
  const [theme, setTheme] = useState(value || "light");

  useEffect(() => {
    onChange?.(theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-600">Theme</span>
      <button
        onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
        className="px-4 py-2 rounded-lg border bg-white hover:bg-gray-50"
      >
        {theme === "light" ? "Switch to Dark" : "Switch to Light"}
      </button>
    </div>
  );
}

export default ThemeToggle;




















