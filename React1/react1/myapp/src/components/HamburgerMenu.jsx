import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaHome,
  FaThLarge,
  FaTag,
  FaGift,
  FaHeart,
  FaShoppingBag,
  FaBox,
  FaCog,
  FaGlobe,
  FaMoon,
  FaShieldAlt,
  FaQuestionCircle,
  FaSignOutAlt,
  FaChevronDown,
  FaEdit,
} from "react-icons/fa";

const HamburgerMenu = ({ isOpen, onClose }) => {
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const location = useLocation();

  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  });

  const badgeCounts = {
    wishlist: 3,
    cart: 2,
    orders: 5,
  };

  const menuItems = [
    { icon: FaHome, label: "Home", href: "/" },
    { icon: FaThLarge, label: "Categories", href: "/categories" },
    { icon: FaTag, label: "Brands", href: "/brands" },
    { icon: FaGift, label: "Offers", href: "/offers" },
    { icon: FaHeart, label: "Wishlist", href: "/wishlist", badge: badgeCounts.wishlist },
    { icon: FaShoppingBag, label: "Cart", href: "/cart", badge: badgeCounts.cart },
    { icon: FaBox, label: "Orders", href: "/orders", badge: badgeCounts.orders },
  ];

  const settingsItems = [
    {
      icon: FaCog,
      label: "Settings",
      subMenu: [
        { icon: FaGlobe, label: "Language", href: "/settings/language" },
        { icon: FaMoon, label: "Theme", href: "/settings/theme" },
      ],
    },
    {
      icon: FaShieldAlt,
      label: "Privacy",
      subMenu: [
        { icon: FaShieldAlt, label: "Data Privacy", href: "/settings/privacy" },
        { icon: FaQuestionCircle, label: "Help Center", href: "/help" },
      ],
    },
  ];

  const MenuItem = ({ icon: Icon, label, href, subMenu, index, badge }) => {
    const isActive = href && location.pathname === href;
    return (
      <div>
        <motion.div
          onClick={() => subMenu && setOpenSubMenu(openSubMenu === index ? null : index)}
          whileHover={{ x: 5, backgroundColor: "rgba(99, 102, 241, 0.06)" }}
          whileTap={{ scale: 0.98 }}
          className={`flex items-center justify-between gap-4 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer ${
            isActive ? "bg-indigo-50 text-indigo-600" : "text-gray-700 hover:text-indigo-600"
          }`}
        >
          <div className="flex items-center gap-4 relative">
            <Icon className={`w-5 h-5 ${isActive ? "text-indigo-600" : ""}`} />
            {href && !subMenu ? (
              <Link to={href} className="flex-1 font-medium" onClick={onClose}>{label}</Link>
            ) : (
              <span className="flex-1 font-medium">{label}</span>
            )}
            {badge > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-5 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold"
              >
                {badge}
              </motion.span>
            )}
          </div>
          {subMenu && <FaChevronDown className={`w-4 h-4 transition-transform ${openSubMenu === index ? "rotate-180" : ""}`} />}
        </motion.div>
        {subMenu && openSubMenu === index && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="pl-10 mt-2 flex flex-col gap-2"
          >
            {subMenu.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === item.href ? "bg-indigo-50 text-indigo-600" : "text-gray-600 hover:text-indigo-600"
                }`}
                onClick={onClose}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Side Drawer */}
          <motion.div
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            exit={{ x: -400 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Menu</h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <FaTimes className="w-5 h-5 text-gray-600" />
              </motion.button>
            </div>

            {/* User Profile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 border-b border-gray-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div whileHover={{ scale: 1.05 }} className="relative">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-purple-200"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{user.name}</h3>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-xl hover:from-indigo-200 hover:to-purple-200 transition-all duration-200"
              >
                <FaEdit className="w-4 h-4" />
                <span className="font-medium">Edit Profile</span>
              </motion.button>
            </motion.div>

            {/* Main Navigation */}
            <div className="p-6 space-y-1">
              {menuItems.map((item, index) => (
                <MenuItem
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  href={item.href}
                  index={index}
                  badge={item.badge}
                  subMenu={item.subMenu}
                />
              ))}
            </div>

            {/* Settings & Privacy */}
            <div className="p-6 border-t border-gray-200 space-y-1">
              {settingsItems.map((item, index) => (
                <MenuItem
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  subMenu={item.subMenu}
                  index={index + menuItems.length}
                />
              ))}
            </div>

            {/* Logout */}
            <div className="p-6 border-t border-gray-200">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  to="/logout"
                  onClick={onClose}
                  className="flex items-center gap-4 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all duration-200"
                >
                  <FaSignOutAlt />
                  <span className="font-medium">Logout</span>
                </Link>
              </motion.div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 text-center text-xs text-gray-500">
              Galleria App v1.0.0 <br />
              Made with ❤️ for art lovers
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HamburgerMenu;

