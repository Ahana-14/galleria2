import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaSave } from "react-icons/fa";
import { useSettings } from "../../context/SettingsContext";

const DataPrivacy = () => {
  const { privacy, updatePrivacy } = useSettings();
  const [controls, setControls] = useState(privacy);
  const [saved, setSaved] = useState(false);

  // Sync controls when privacy changes from context
  React.useEffect(() => {
    setControls(privacy);
  }, [privacy]);

  const toggle = (key) => {
    const updated = { ...controls, [key]: !controls[key] };
    setControls(updated);
  };

  const handleSave = () => {
    updatePrivacy(controls);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-[60vh] bg-gray-50 dark:bg-gray-900 py-10">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border dark:border-gray-700 p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 flex items-center justify-center"><FaShieldAlt /></div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Data Privacy</h1>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-6">Control how your data is used. You can update these preferences any time.</p>

          <div className="space-y-4">
            {[
              { key: "analytics", title: "Analytics", desc: "Allow usage analytics to improve the app." },
              { key: "personalization", title: "Personalization", desc: "Use your activity to personalize recommendations." },
              { key: "marketing", title: "Marketing", desc: "Receive tailored offers and updates." },
            ].map((item) => (
              <div key={item.key} className="flex items-start justify-between gap-4 rounded-xl border dark:border-gray-700 p-4">
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{item.title}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</div>
                </div>
                <button onClick={() => toggle(item.key)} className={`w-16 h-9 rounded-full transition-colors relative ${controls[item.key] ? "bg-indigo-600" : "bg-gray-300 dark:bg-gray-600"}`} aria-label={`${item.title} toggle`}>
                  <span className={`absolute top-1 left-1 w-7 h-7 bg-white rounded-full shadow transform transition-transform ${controls[item.key] ? "translate-x-7" : "translate-x-0"}`} />
                </button>
              </div>
            ))}
          </div>

          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={handleSave} className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700">
            <FaSave className="w-4 h-4" /> Save Preferences
          </motion.button>

          {saved && (
            <div className="mt-4 text-sm text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-800 rounded-xl px-4 py-3">Preferences saved.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataPrivacy;



