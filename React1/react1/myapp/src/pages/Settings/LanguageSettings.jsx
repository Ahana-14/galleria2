import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaSave } from "react-icons/fa";
import { useSettings } from "../../context/SettingsContext";

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "Hindi (हिन्दी)" },
  { code: "bn", label: "Bengali (বাংলা)" },
  { code: "te", label: "Telugu (తెలుగు)" },
  { code: "ta", label: "Tamil (தமிழ்)" },
  { code: "mr", label: "Marathi (मराठी)" },
  { code: "gu", label: "Gujarati (ગુજરાતી)" }
];

const LanguageSettings = () => {
  const { language, updateLanguage } = useSettings();
  const [selected, setSelected] = useState(language);
  const [savedAt, setSavedAt] = useState("");

  const handleSave = () => {
    updateLanguage(selected);
    const ts = new Date().toLocaleString();
    setSavedAt(ts);
  };

  // Update selected when language changes from context
  React.useEffect(() => {
    setSelected(language);
  }, [language]);

  return (
    <div className="min-h-[60vh] bg-gray-50 dark:bg-gray-900 py-10">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border dark:border-gray-700 p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 flex items-center justify-center">
              <FaGlobe />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Language</h1>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-6">Choose your preferred language for the application interface.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setSelected(lang.code)}
                className={`text-left px-4 py-3 rounded-xl border transition-all ${
                  selected === lang.code 
                    ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300" 
                    : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 dark:text-gray-300"
                }`}
              >
                <div className="font-semibold">{lang.label}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Code: {lang.code}</div>
              </button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700"
          >
            <FaSave className="w-4 h-4" /> Save Language
          </motion.button>

          {savedAt && (
            <div className="mt-4 text-sm text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-800 rounded-xl px-4 py-3">
              Language saved successfully on {savedAt}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguageSettings;



