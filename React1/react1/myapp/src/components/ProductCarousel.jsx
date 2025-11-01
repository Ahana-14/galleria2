import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

function ProductCarousel({ title, products, auto = true, intervalMs = 2500 }) {
  const scrollRef = useRef(null);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (!auto) return;
    const container = scrollRef.current;
    if (!container) return;
    let timer = setInterval(() => {
      if (isHover) return;
      const nextLeft = container.scrollLeft + container.clientWidth;
      if (nextLeft >= container.scrollWidth) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: container.clientWidth, behavior: "smooth" });
      }
    }, intervalMs);
    return () => clearInterval(timer);
  }, [auto, intervalMs, isHover]);

  return (
    <div className="bg-white rounded-2xl shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <motion.div
        ref={scrollRef}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {products.map((p) => (
          <div key={p.id} className="min-w-[260px] snap-start">
            <ProductCard product={p} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default ProductCarousel;






