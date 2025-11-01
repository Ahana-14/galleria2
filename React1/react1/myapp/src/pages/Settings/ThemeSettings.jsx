import React from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun, FaDesktop } from "react-icons/fa";
import { useSettings } from "../../context/SettingsContext";

const ThemeSettings = () => {
  const { theme, updateTheme } = useSettings();

  const options = [
    { id: "light", title: "Light", icon: FaSun, desc: "Bright interface with light background" },
    { id: "dark", title: "Dark", icon: FaMoon, desc: "Dimmed interface for low-light use" },
    { id: "system", title: "System", icon: FaDesktop, desc: "Follow your device setting" },
  ];

  return (
    <div className="min-h-[60vh] bg-gray-50 dark:bg-gray-900 py-10">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border dark:border-gray-700 p-6 md:p-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Theme</h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => updateTheme(opt.id)}
                className={`text-left p-4 rounded-2xl border transition-all group ${
                  theme === opt.id 
                    ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900" 
                    : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl mb-3 flex items-center justify-center ${
                  theme === opt.id 
                    ? "bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300" 
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                }`}>
                  <opt.icon />
                </div>
                <div className="font-semibold text-gray-900 dark:text-white">{opt.title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{opt.desc}</div>
              </button>
            ))}
          </div>

          <div className="rounded-2xl border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-6">
            <div className="text-gray-700 dark:text-gray-300 font-semibold mb-3">Preview</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl p-4 bg-white shadow-sm border">
                <div className="h-4 w-24 bg-indigo-200 rounded mb-2"></div>
                <div className="h-3 w-40 bg-gray-200 rounded mb-1"></div>
                <div className="h-3 w-32 bg-gray-200 rounded"></div>
                <button className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-lg">Button</button>
              </div>
              <div className="rounded-xl p-4 bg-gray-900 text-gray-100 shadow-sm border border-gray-700">
                <div className="h-4 w-24 bg-indigo-700 rounded mb-2"></div>
                <div className="h-3 w-40 bg-gray-700 rounded mb-1"></div>
                <div className="h-3 w-32 bg-gray-700 rounded"></div>
                <button className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-lg">Button</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;



