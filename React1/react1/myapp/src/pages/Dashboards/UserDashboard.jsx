import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { 
  FaShoppingCart, 
  FaHeart, 
  FaUser, 
  FaChartLine, 
  FaDollarSign,
  FaStar,
  FaCog,
  FaBell
} from 'react-icons/fa';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock data
  const stats = {
    totalOrders: 8,
    totalSpent: 125000,
    wishlistItems: 5,
    reviewsWritten: 3
  };

  const recentOrders = [
    { id: 1, product: 'Abstract Harmony', artist: 'Priya Sharma', amount: 45000, status: 'Delivered', date: '2024-01-15', image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119' },
    { id: 2, product: 'Urban Dreams', artist: 'Rahul Dev', amount: 38000, status: 'Shipped', date: '2024-01-14', image: 'https://images.unsplash.com/photo-1578926288207-a90a5366759d' },
    { id: 3, product: 'Eternal Dance', artist: 'Maya Patel', amount: 52000, status: 'Processing', date: '2024-01-13', image: 'https://images.unsplash.com/photo-1578321272066-408ea0f3f494' }
  ];

  const wishlistItems = [
    { id: 1, product: 'Digital Dreams', artist: 'Arun Kumar', price: 29000, image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9' },
    { id: 2, product: 'Mountain Serenity', artist: 'Lisa Wang', price: 35000, image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119' }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: FaChartLine },
    { id: 'orders', name: 'My Orders', icon: FaShoppingCart },
    { id: 'wishlist', name: 'Wishlist', icon: FaHeart },
    { id: 'reviews', name: 'Reviews', icon: FaStar },
    { id: 'settings', name: 'Settings', icon: FaCog }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <FaUser className="w-8 h-8 mr-3 text-indigo-600" />
                My Dashboard
              </h1>
              <p className="text-gray-600 mt-1">Welcome back! Here's your activity overview</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center">
                <FaBell className="w-4 h-4 mr-2" />
                Notifications
              </button>
              <Link to="/profile" className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center">
                <FaUser className="w-4 h-4 mr-2" />
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6">
          {/* Sidebar */}
          <aside className="bg-white rounded-2xl shadow-md border p-4 h-max">
            <nav className="space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-indigo-50 text-indigo-700'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.name}
                  </button>
                );
              })}
            </nav>
          </aside>
          <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <FaShoppingCart className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Orders</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalOrders}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center">
                <div className="p-3 bg-green-100 rounded-lg">
                  <FaDollarSign className="w-6 h-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Spent</p>
                  <p className="text-2xl font-bold text-gray-900">₹{(stats.totalSpent / 1000).toFixed(0)}K</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center">
                <div className="p-3 bg-red-100 rounded-lg">
                  <FaHeart className="w-6 h-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Wishlist</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.wishlistItems}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center">
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <FaStar className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Reviews</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.reviewsWritten}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-md mb-8">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6 overflow-x-auto">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'border-indigo-500 text-indigo-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {tab.name}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Recent Orders */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
                      <Link to="/dashboard?tab=orders" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                        View All
                      </Link>
                    </div>
                    <div className="space-y-3">
                      {recentOrders.slice(0, 3).map((order) => (
                        <div key={order.id} className="flex items-center p-4 bg-gray-50 rounded-lg">
                          <img src={order.image} alt={order.product} className="w-12 h-12 rounded-lg object-cover mr-4" />
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{order.product}</p>
                            <p className="text-sm text-gray-600">by {order.artist}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-gray-900">₹{order.amount.toLocaleString()}</p>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                              order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {order.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Wishlist Preview */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">Wishlist</h3>
                      <Link to="/wishlist" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                        View All
                      </Link>
                    </div>
                    <div className="space-y-3">
                      {wishlistItems.map((item) => (
                        <div key={item.id} className="flex items-center p-4 bg-gray-50 rounded-lg">
                          <img src={item.image} alt={item.product} className="w-12 h-12 rounded-lg object-cover mr-4" />
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{item.product}</p>
                            <p className="text-sm text-gray-600">by {item.artist}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-gray-900">₹{item.price.toLocaleString()}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'orders' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Order History</h3>
                  <div className="space-y-4">
                    {recentOrders.map((order, index) => (
                      <motion.div
                        key={order.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center">
                            <motion.img
                              src={order.image}
                              alt={order.product}
                              className="w-16 h-16 rounded-lg object-cover mr-4"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.2 }}
                            />
                            <div>
                              <h4 className="font-medium text-gray-900">{order.product}</h4>
                              <p className="text-sm text-gray-600">by {order.artist}</p>
                              <p className="text-sm text-gray-500">Order #{order.id}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-gray-900">₹{order.amount.toLocaleString()}</p>
                            <p className="text-sm text-gray-500">{order.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <motion.span
                            className={`px-3 py-1 text-sm rounded-full ${
                              order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                              order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}
                            whileHover={{ scale: 1.05 }}
                          >
                            {order.status}
                          </motion.span>
                          <div className="flex space-x-2">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-4 py-2 text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
                            >
                              Track Order
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                            >
                              Write Review
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'wishlist' && (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">My Wishlist</h3>
                    <Link to="/wishlist" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                      View Full Wishlist
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlistItems.map((item) => (
                      <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                        <img src={item.image} alt={item.product} className="w-full h-32 object-cover rounded-lg mb-3" />
                        <h4 className="font-medium text-gray-900 mb-1">{item.product}</h4>
                        <p className="text-sm text-gray-600 mb-2">by {item.artist}</p>
                        <p className="font-medium text-gray-900 mb-3">₹{item.price.toLocaleString()}</p>
                        <div className="flex space-x-2">
                          <button className="flex-1 px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm">
                            Add to Cart
                          </button>
                          <button className="px-3 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition-colors">
                            <FaHeart className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">My Reviews</h3>
                  <div className="bg-gray-50 rounded-lg p-8 text-center">
                    <FaStar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Reviews</h4>
                    <p className="text-gray-600 mb-4">You've written {stats.reviewsWritten} reviews so far.</p>
                    <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                      Write a Review
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h3>
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-medium text-gray-900 mb-2">Profile Settings</h4>
                      <p className="text-sm text-gray-600 mb-4">Update your personal information and preferences.</p>
                      <Link to="/profile" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                        Edit Profile
                      </Link>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-medium text-gray-900 mb-2">Notification Preferences</h4>
                      <p className="text-sm text-gray-600 mb-4">Manage how you receive notifications about orders and updates.</p>
                      <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                        Configure Notifications
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserDashboard;