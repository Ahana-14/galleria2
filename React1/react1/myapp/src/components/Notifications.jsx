import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBell, FaTimes, FaTruck, FaGift, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

const Notifications = ({ isOpen, onClose }) => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  // Mock notifications data
  useEffect(() => {
    const mockNotifications = [
      {
        id: 1,
        type: 'order',
        title: 'Order Shipped',
        message: 'Your order #12345 has been shipped and is on its way!',
        time: '2 hours ago',
        read: false,
        icon: FaTruck,
        color: 'text-blue-500',
        bgColor: 'bg-blue-50'
      },
      {
        id: 2,
        type: 'offer',
        title: 'Special Offer',
        message: 'Get 25% off on all paintings this weekend!',
        time: '5 hours ago',
        read: false,
        icon: FaGift,
        color: 'text-red-500',
        bgColor: 'bg-red-50'
      },
      {
        id: 3,
        type: 'event',
        title: 'Upcoming Exhibition',
        message: 'Art Gallery Exhibition starts tomorrow at 10 AM',
        time: '1 day ago',
        read: true,
        icon: FaCalendarAlt,
        color: 'text-green-500',
        bgColor: 'bg-green-50'
      },
      {
        id: 4,
        type: 'order',
        title: 'Order Delivered',
        message: 'Your order #12340 has been delivered successfully!',
        time: '2 days ago',
        read: true,
        icon: FaCheckCircle,
        color: 'text-green-500',
        bgColor: 'bg-green-50'
      },
      {
        id: 5,
        type: 'offer',
        title: 'Flash Sale',
        message: 'Limited time: 50% off on sculptures!',
        time: '3 days ago',
        read: true,
        icon: FaGift,
        color: 'text-orange-500',
        bgColor: 'bg-orange-50'
      },
      {
        id: 6,
        type: 'system',
        title: 'Account Update',
        message: 'Your profile has been updated successfully',
        time: '1 week ago',
        read: true,
        icon: FaCheckCircle,
        color: 'text-purple-500',
        bgColor: 'bg-purple-50'
      }
    ];

    setNotifications(mockNotifications);
    setUnreadCount(mockNotifications.filter(n => !n.read).length);
  }, []);

  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, read: true }
          : notification
      )
    );
    setUnreadCount(prev => Math.max(0, prev - 1));
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
    setUnreadCount(0);
  };

  const getNotificationIcon = (notification) => {
    const IconComponent = notification.icon;
    return <IconComponent className={`w-5 h-5 ${notification.color}`} />;
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-end pt-16 pr-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, x: 20, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 20, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <FaBell className="w-6 h-6 text-gray-700" />
                {unreadCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    {unreadCount}
                  </motion.span>
                )}
              </div>
              <h2 className="text-xl font-bold text-gray-900">Notifications</h2>
            </div>
            <div className="flex items-center gap-2">
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Mark all read
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="max-h-96 overflow-y-auto">
          <AnimatePresence>
            {notifications.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <FaBell className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No notifications yet</p>
              </div>
            ) : (
              notifications.map((notification, index) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.05 }}
                  className={`p-4 border-b border-gray-100 cursor-pointer transition-all duration-200 ${
                    !notification.read ? 'bg-blue-50/50' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${notification.bgColor}`}>
                      {getNotificationIcon(notification)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <h3 className={`font-medium text-sm ${
                          !notification.read ? 'text-gray-900' : 'text-gray-700'
                        }`}>
                          {notification.title}
                        </h3>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-1 ml-2 flex-shrink-0"></div>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-400 mt-2">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
          <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium">
            View All Notifications
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Notifications;
