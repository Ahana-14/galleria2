import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { FaSearch, FaHeart, FaBell } from "react-icons/fa";
import { motion } from "framer-motion";
import EnhancedSearch from "./EnhancedSearch";
import Notifications from "./Notifications";
import HamburgerMenu from "./HamburgerMenu";
import HamburgerIcon from "./HamburgerIcon";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [searchQuery] = useState("");
  const { items } = useCart();
  const { items: wishlistItems } = useWishlist();
  const location = useLocation();
  const count = items.reduce((sum, i) => sum + i.quantity, 0);
  const wishlistCount = wishlistItems.length;

  // Check if we're on the cart page
  const isCartPage = location.pathname === '/cart';


  return (
    <nav className="bg-gray-900 text-white px-4 py-3 flex items-center">
      {/* Left: Hamburger Menu */}
      <div className="flex items-center gap-3 relative">
        <HamburgerIcon 
          isOpen={menuOpen} 
          onClick={() => setMenuOpen((v) => !v)} 
        />
        <h1 className="text-xl font-bold">Galleria</h1>
      </div>

      {/* Center: Navigation Links and Search */}
      <div className="flex-1 flex justify-center mx-4">
        <div className="flex items-center space-x-6">
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link to="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link>
            <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link>
          </div>
          
          {/* Search Bar - Only show if NOT on cart page */}
          {!isCartPage && (
            <div className="relative w-full max-w-md">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSearchOpen(true)}
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 flex items-center gap-3 hover:bg-gray-700 transition-colors"
              >
                <FaSearch className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">Search artworks...</span>
              </motion.button>
            </div>
          )}
        </div>
      </div>

      {/* Right: Notifications, Wishlist and Cart */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setNotificationsOpen(true)}
          className="relative p-2 rounded hover:bg-gray-800 transition-colors"
          aria-label="Notifications"
        >
          <FaBell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 inline-flex items-center justify-center text-[10px] leading-none bg-red-600 text-white rounded-full px-1.5 py-0.5">
            3
          </span>
        </motion.button>

        {/* Wishlist */}
        <Link to="/wishlist" aria-label="Wishlist" className="relative p-2 rounded hover:bg-gray-800 transition-colors">
          <FaHeart className="w-6 h-6" />
          {wishlistCount > 0 && (
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center text-[10px] leading-none bg-red-600 text-white rounded-full px-1.5 py-0.5">
              {wishlistCount}
            </span>
          )}
        </Link>
        
        {/* Cart */}
        <Link to="/cart" aria-label="Cart" className="relative p-2 rounded hover:bg-gray-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M2.25 3a.75.75 0 0 1 .75-.75h1.382a1.5 1.5 0 0 1 1.414 1.05l.318.955h12.436a.75.75 0 0 1 .73.935l-1.5 6a.75.75 0 0 1-.73.565H7.09l-.3.9a1.5 1.5 0 0 1-1.414 1.05H3a.75.75 0 0 1 0-1.5h2.376l2.25-6.75H4.886l-.45-1.35H3a.75.75 0 0 1-.75-.75z"/>
            <path d="M8.25 19.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm9-1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
          </svg>
          {count > 0 && (
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center text-[10px] leading-none bg-red-600 text-white rounded-full px-1.5 py-0.5">
              {count}
            </span>
          )}
        </Link>
      </div>

      {/* Enhanced Search Modal */}
      <EnhancedSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      
      {/* Notifications Modal */}
      <Notifications isOpen={notificationsOpen} onClose={() => setNotificationsOpen(false)} />
      
      {/* Hamburger Menu */}
      <HamburgerMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </nav>
  );
}

export default Navbar;