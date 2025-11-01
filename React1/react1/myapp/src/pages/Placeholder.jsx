import React from "react";
import { motion } from "framer-motion";

const Placeholder = ({ title = "Page" }) => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-lg p-10 text-center border">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-gray-600">This page will be implemented soon.</p>
      </motion.div>
    </div>
  );
};

export default Placeholder;






