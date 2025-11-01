import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { formatINR } from "../utils/currency";
import { FaHeart, FaShoppingCart, FaEye, FaShareAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { addItem } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(product);
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleShare = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const productUrl = window.location.origin + `/product/${product.id}`;
    try {
      if (navigator.share) {
        await navigator.share({
          title: product.title,
          text: `Check out this artwork: ${product.title}`,
          url: productUrl,
        });
      } else {
        await navigator.clipboard.writeText(productUrl);
        // Optionally: show toast if a system exists
      }
    } catch (_) {
      // ignore
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-indigo-400 hover:shadow-2xl transition-all duration-300 hover:scale-105"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-w-1 aspect-h-1 overflow-hidden relative">
          {imageError ? (
            <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">🖼️</div>
                <div className="text-sm">Image not available</div>
              </div>
            </div>
          ) : (
            <motion.img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover object-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onError={handleImageError}
            />
          )}
          
          {/* Discount Badge */}
          {product.discount && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 text-xs rounded-full font-bold shadow-lg"
            >
              -{product.discount}%
            </motion.span>
          )}
          
          {/* New Badge */}
          {product.isNew && !product.discount && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute top-3 left-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 text-xs rounded-full font-medium shadow-lg"
            >
              New
            </motion.span>
          )}
          
          {/* Top-right Actions: Wishlist + Share */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleWishlistToggle}
            className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 z-20 ${
              isInWishlist(product.id)
                ? 'bg-red-500 text-white shadow-lg hover:bg-red-600 hover:scale-110'
                : 'bg-white/90 text-gray-600 hover:bg-red-500 hover:text-white shadow-md hover:shadow-lg hover:scale-110'
            }`}
            aria-label={isInWishlist(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <FaHeart className={`w-3 h-3 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleShare}
            className="absolute top-3 right-12 p-2 rounded-full transition-all duration-200 z-20 bg-white/90 text-gray-600 hover:bg-blue-500 hover:text-white shadow-md hover:shadow-lg"
            aria-label="Share product"
          >
            <FaShareAlt className="w-3 h-3" />
          </motion.button>
          
          {/* Stock Warning */}
          {product.stock <= 5 && product.stock > 0 && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-3 left-3 bg-orange-500 text-white px-2 py-1 text-xs rounded-full font-medium"
            >
              Only {product.stock} left
            </motion.span>
          )}
          
          {/* Hover Overlay with Actions */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/50 flex items-center justify-center gap-3"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-xl hover:bg-indigo-500 hover:text-white transition-all duration-200 font-medium shadow-lg"
            >
              <FaShoppingCart className="w-4 h-4" />
              Add to Cart
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                // Add quick view functionality
              }}
              className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-xl hover:bg-indigo-500 hover:text-white transition-all duration-200 font-medium shadow-lg"
            >
              <FaEye className="w-4 h-4" />
              Quick View
            </motion.button>
          </motion.div>
        </div>

        <div className="p-5">
          <motion.h3 
            className="text-lg font-semibold mb-1 text-gray-900 group-hover:text-indigo-600 transition-colors"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {product.title}
          </motion.h3>
          <p className="text-gray-600 mb-3 text-sm">{product.artist}</p>
          
          <div className="flex items-center justify-between mb-3">
            <div className="flex flex-col">
              <motion.p 
                className="text-xl font-bold text-gray-900"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {formatINR(product.price)}
              </motion.p>
              {product.originalPrice && (
                <motion.p 
                  className="text-sm text-gray-500 line-through"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {formatINR(product.originalPrice)}
                </motion.p>
              )}
            </div>
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
              <span className="text-sm text-gray-500 ml-1">(4.5)</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {product.tags?.slice(0, 3).map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-xs px-2 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 rounded-full hover:from-indigo-100 hover:to-purple-100 hover:text-indigo-600 transition-all duration-200"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProductCard;