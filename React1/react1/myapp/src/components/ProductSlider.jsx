import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

function ProductSlider({ products, visibleCount = 4, autoplayMs = 3000 }) {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  const cardWidth = containerRef.current
    ? containerRef.current.offsetWidth / visibleCount
    : 0;

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % products.length);
    }, autoplayMs);
    return () => clearInterval(id);
  }, [products.length, autoplayMs]);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.scrollTo({ left: cardWidth * index, behavior: "smooth" });
  }, [index, cardWidth]);

  return (
    <div className="relative">
      <div ref={containerRef} className="flex overflow-x-auto no-scrollbar gap-4 scroll-smooth">
        {products.map((p) => (
          <motion.div key={p.id} whileHover={{ y: -4 }} style={{ minWidth: cardWidth }}>
            <ProductCard product={p} />
          </motion.div>
        ))}
      </div>
      <button onClick={() => setIndex((i) => (i - 1 + products.length) % products.length)} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 px-2 py-1 rounded-lg shadow">◀</button>
      <button onClick={() => setIndex((i) => (i + 1) % products.length)} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 px-2 py-1 rounded-lg shadow">▶</button>
    </div>
  );
}


export default ProductSlider;



