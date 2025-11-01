import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingBag, FaHeart, FaHome, FaUser, FaBars } from 'react-icons/fa';
import { products } from '../data/products';

const SaleCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState('Sale');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const categories = [
    'New In',
    'Sale',
    'Tops',
    'Dresses',
    'Bottoms',
    'One-Pieces & Co-Ords',
    'Lingerie',
    'Denim',
    'Knitwear',
    'Activewear',
    'Outerwear',
    'Bags'
  ];

  // Filter products based on selected category
  const getFilteredProducts = () => {
    if (selectedCategory === 'Sale') {
      return products.slice(0, 12).map(product => ({
        ...product,
        originalPrice: product.price * 1.3,
        discount: Math.floor(Math.random() * 40) + 20, // 20-60% discount
        isOnSale: true
      }));
    }
    return products.filter(product => 
      product.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      product.tags?.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase()))
    ).slice(0, 12);
  };

  const filteredProducts = getFilteredProducts();

  const CategoryItem = ({ category, isActive, onClick }) => (
    <motion.button
      whileHover={{ x: 5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
        isActive 
          ? 'bg-gradient-to-r from-soft-purple-100 to-blush-pink-100 text-soft-purple-700 font-medium border-l-4 border-soft-purple-500' 
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
      }`}
    >
      {category}
    </motion.button>
  );

  const ProductCard = ({ product, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Sale Badge */}
        {product.isOnSale && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold"
          >
            -{product.discount}%
          </motion.div>
        )}

        {/* Wishlist Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow-md hover:bg-red-500 hover:text-white transition-all duration-200"
        >
          <FaHeart className="w-4 h-4" />
        </motion.button>

        {/* Quick Add Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <button className="w-full bg-gradient-to-r from-soft-purple-600 to-blush-pink-600 text-white py-2 rounded-lg font-medium hover:from-soft-purple-700 hover:to-blush-pink-700 transition-all duration-200">
            Quick Add
          </button>
        </motion.div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-soft-purple-600 transition-colors">
          {product.title}
        </h3>
        <p className="text-sm text-gray-600 mb-2">{product.artist}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {product.isOnSale ? (
              <>
                <span className="text-lg font-bold text-gray-900">
                  ₹{product.price.toFixed(0)}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ₹{product.originalPrice.toFixed(0)}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-gray-900">
                ₹{product.price.toFixed(0)}
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-sm">★</span>
            ))}
            <span className="text-xs text-gray-500 ml-1">(4.5)</span>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-purple-50 to-blush-pink-50">
      {/* Sale Banner */}
      {selectedCategory === 'Sale' && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blush-pink-100 via-soft-purple-100 to-sky-blue-100 border-b border-soft-purple-200"
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-3xl"
                >
                  🎉
                </motion.div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-1">
                    Clearance Countdown – Up to 60% Off
                  </h1>
                  <p className="text-gray-600">Limited time offer on selected items</p>
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-soft-teal-500 to-sky-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Fast Delivery
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="w-64 bg-white rounded-2xl shadow-lg p-6 h-fit sticky top-8"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6">Categories</h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <CategoryItem
                  key={category}
                  category={category}
                  isActive={selectedCategory === category}
                  onClick={() => setSelectedCategory(category)}
                />
              ))}
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {selectedCategory === 'Sale' ? 'Sale Items' : selectedCategory}
              </h1>
              <p className="text-gray-600">
                {filteredProducts.length} items found
              </p>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-around">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center gap-1 text-soft-purple-600"
            >
              <FaHome className="w-5 h-5" />
              <span className="text-xs font-medium">Home</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center gap-1 text-gray-600"
            >
              <FaBars className="w-5 h-5" />
              <span className="text-xs font-medium">Menu</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center gap-1 text-gray-600 relative"
            >
              <FaShoppingBag className="w-5 h-5" />
              <span className="text-xs font-medium">Bag</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center gap-1 text-gray-600"
            >
              <FaUser className="w-5 h-5" />
              <span className="text-xs font-medium">Me</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SaleCategories;