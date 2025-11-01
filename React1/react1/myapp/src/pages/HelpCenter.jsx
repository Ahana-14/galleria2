import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuestionCircle, FaChevronDown, FaEnvelope, FaPhone } from "react-icons/fa";

const faqs = [
  { q: "How do I track my order?", a: "Go to Orders from the menu. You'll see live tracking and order status for each order." },
  { q: "How can I return a product?", a: "Open Orders > Select the order > Choose Return or Replace and follow steps." },
  { q: "How do I change my language or theme?", a: "Go to Settings & Privacy > Language or Theme to update preferences." },
];

const HelpCenter = () => {
  const [open, setOpen] = useState(0);

  return (
    <div className="min-h-[60vh] bg-gray-50 py-10">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-2xl shadow-lg border p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center"><FaQuestionCircle /></div>
            <h1 className="text-2xl font-bold text-gray-900">Help Center</h1>
          </div>

          <div className="divide-y">
            {faqs.map((f, idx) => (
              <div key={idx} className="py-4">
                <button onClick={() => setOpen(open === idx ? -1 : idx)} className="w-full flex items-center justify-between text-left">
                  <span className="font-semibold text-gray-900">{f.q}</span>
                  <FaChevronDown className={`transition-transform ${open === idx ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {open === idx && (
                    <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="text-gray-600 pt-2">{f.a}</motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="mailto:support@galleria.example" className="rounded-xl border p-4 hover:bg-gray-50 flex items-center gap-3">
              <FaEnvelope className="text-indigo-600" /> support@galleria.example
            </a>
            <a href="tel:+1800123456" className="rounded-xl border p-4 hover:bg-gray-50 flex items-center gap-3">
              <FaPhone className="text-indigo-600" /> +1 800-123-456
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;



