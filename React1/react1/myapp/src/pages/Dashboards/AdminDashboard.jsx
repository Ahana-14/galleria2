import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUsers, 
  FaShoppingCart, 
  FaBox, 
  FaChartLine, 
  FaDollarSign, 
  FaEye, 
  FaEdit, 
  FaTrash, 
  FaPlus,
  FaShieldAlt,
  FaCog,
  FaBell,
  FaArrowUp,
  FaArrowDown
} from 'react-icons/fa';
import SimpleChart from '../../components/SimpleChart';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const sidebar = [
    { id: 'overview', label: 'Overview' },
    { id: 'users', label: 'Users' },
    { id: 'products', label: 'Products' },
    { id: 'orders', label: 'Orders' },
    { id: 'settings', label: 'Settings' },
  ];
  
  // Mock data
  const stats = {
    totalUsers: 1250,
    totalOrders: 89,
    totalProducts: 45,
    totalRevenue: 2500000,
    pendingOrders: 12,
    activeSellers: 23
  };

  // Chart data
  const revenueData = [
    { label: 'Jan', value: 120000 },
    { label: 'Feb', value: 150000 },
    { label: 'Mar', value: 180000 },
    { label: 'Apr', value: 220000 },
    { label: 'May', value: 250000 },
    { label: 'Jun', value: 280000 }
  ];

  const ordersData = [
    { label: 'Jan', value: 45 },
    { label: 'Feb', value: 52 },
    { label: 'Mar', value: 48 },
    { label: 'Apr', value: 61 },
    { label: 'May', value: 55 },
    { label: 'Jun', value: 67 }
  ];

  const categoryData = [
    { label: 'Paintings', value: 35, color: 'blue' },
    { label: 'Sculptures', value: 25, color: 'green' },
    { label: 'Handicrafts', value: 20, color: 'purple' },
    { label: 'Pottery', value: 15, color: 'orange' },
    { label: 'Jewelry', value: 5, color: 'red' }
  ];

  const recentOrders = [
    { id: 1, customer: 'John Doe', product: 'Abstract Harmony', amount: 45000, status: 'Completed', date: '2024-01-15' },
    { id: 2, customer: 'Jane Smith', product: 'Urban Dreams', amount: 38000, status: 'Pending', date: '2024-01-14' },
    { id: 3, customer: 'Mike Johnson', product: 'Eternal Dance', amount: 52000, status: 'Shipped', date: '2024-01-13' },
    { id: 4, customer: 'Sarah Wilson', product: 'Digital Dreams', amount: 29000, status: 'Processing', date: '2024-01-12' }
  ];

  const recentUsers = [
    { id: 1, name: 'Alice Brown', email: 'alice@example.com', joinDate: '2024-01-10', status: 'Active' },
    { id: 2, name: 'Bob Green', email: 'bob@example.com', joinDate: '2024-01-09', status: 'Active' },
    { id: 3, name: 'Carol Blue', email: 'carol@example.com', joinDate: '2024-01-08', status: 'Pending' }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: FaChartLine },
    { id: 'users', name: 'Users', icon: FaUsers },
    { id: 'orders', name: 'Orders', icon: FaShoppingCart },
    { id: 'products', name: 'Products', icon: FaBox },
    { id: 'settings', name: 'Settings', icon: FaCog }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6">
          {/* Sidebar */}
          <aside className="bg-white rounded-2xl shadow-md border p-4 h-max sticky top-6">
            <nav className="space-y-1">
              {sidebar.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${activeTab===item.id? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-100 text-gray-700'}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </aside>
          <div>
          
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <FaShieldAlt className="w-8 h-8 mr-3 text-red-600" />
                Admin Dashboard
              </h1>
              <p className="text-gray-600 mt-1">Manage your art gallery platform</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center">
                <FaBell className="w-4 h-4 mr-2" />
                Notifications
              </button>
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center">
                <FaPlus className="w-4 h-4 mr-2" />
                Add New
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <FaUsers className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Users</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalUsers.toLocaleString()}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-green-600 text-sm">
                    <FaArrowUp className="w-3 h-3 mr-1" />
                    <span>+12%</span>
                  </div>
                  <p className="text-xs text-gray-500">vs last month</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <FaShoppingCart className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Orders</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalOrders}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-green-600 text-sm">
                    <FaArrowUp className="w-3 h-3 mr-1" />
                    <span>+8%</span>
                  </div>
                  <p className="text-xs text-gray-500">vs last month</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <FaBox className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Products</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalProducts}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-green-600 text-sm">
                    <FaArrowUp className="w-3 h-3 mr-1" />
                    <span>+5%</span>
                  </div>
                  <p className="text-xs text-gray-500">vs last month</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <FaDollarSign className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">₹{(stats.totalRevenue / 100000).toFixed(1)}L</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-green-600 text-sm">
                    <FaArrowUp className="w-3 h-3 mr-1" />
                    <span>+15%</span>
                  </div>
                  <p className="text-xs text-gray-500">vs last month</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <FaShoppingCart className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Pending</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.pendingOrders}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-red-600 text-sm">
                    <FaArrowDown className="w-3 h-3 mr-1" />
                    <span>-3%</span>
                  </div>
                  <p className="text-xs text-gray-500">vs last month</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-3 bg-indigo-100 rounded-lg">
                    <FaUsers className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Sellers</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.activeSellers}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-green-600 text-sm">
                    <FaArrowUp className="w-3 h-3 mr-1" />
                    <span>+7%</span>
                  </div>
                  <p className="text-xs text-gray-500">vs last month</p>
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
                <div className="space-y-8">
                  {/* Charts Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Revenue Chart */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="bg-white rounded-xl shadow-sm p-6"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold text-gray-900">Revenue Trend</h3>
                        <div className="flex items-center text-green-600 text-sm">
                          <FaArrowUp className="w-4 h-4 mr-1" />
                          <span>+15%</span>
                        </div>
                      </div>
                      <SimpleChart data={revenueData} type="line" color="blue" height={200} />
                    </motion.div>

                    {/* Orders Chart */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="bg-white rounded-xl shadow-sm p-6"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold text-gray-900">Orders Trend</h3>
                        <div className="flex items-center text-green-600 text-sm">
                          <FaArrowUp className="w-4 h-4 mr-1" />
                          <span>+8%</span>
                        </div>
                      </div>
                      <SimpleChart data={ordersData} type="bar" color="green" height={200} />
                    </motion.div>
                  </div>

                  {/* Category Distribution */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-xl shadow-sm p-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Product Categories</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                      {categoryData.map((category, index) => (
                        <motion.div
                          key={category.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="text-center"
                        >
                          <div className={`w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 flex items-center justify-center text-white font-bold text-lg`}>
                            {category.value}%
                          </div>
                          <p className="text-sm font-medium text-gray-900">{category.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Recent Activity */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Recent Orders */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h3>
                      <div className="space-y-3">
                        {recentOrders.map((order, index) => (
                          <motion.div
                            key={order.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <div>
                              <p className="font-medium text-gray-900">#{order.id} - {order.customer}</p>
                              <p className="text-sm text-gray-600">{order.product}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-gray-900">₹{order.amount.toLocaleString()}</p>
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {order.status}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Recent Users */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Users</h3>
                      <div className="space-y-3">
                        {recentUsers.map((user, index) => (
                          <motion.div
                            key={user.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.9 + index * 0.1 }}
                            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <div>
                              <p className="font-medium text-gray-900">{user.name}</p>
                              <p className="text-sm text-gray-600">{user.email}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-600">{user.joinDate}</p>
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {user.status}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}

              {activeTab === 'users' && (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">User Management</h3>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center">
                      <FaPlus className="w-4 h-4 mr-2" />
                      Add User
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {recentUsers.map((user) => (
                          <tr key={user.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.joinDate}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {user.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex space-x-2">
                                <button className="text-indigo-600 hover:text-indigo-900">
                                  <FaEye className="w-4 h-4" />
                                </button>
                                <button className="text-green-600 hover:text-green-900">
                                  <FaEdit className="w-4 h-4" />
                                </button>
                                <button className="text-red-600 hover:text-red-900">
                                  <FaTrash className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'orders' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Management</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {recentOrders.map((order) => (
                          <tr key={order.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{order.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.product}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{order.amount.toLocaleString()}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex space-x-2">
                                <button className="text-indigo-600 hover:text-indigo-900">
                                  <FaEye className="w-4 h-4" />
                                </button>
                                <button className="text-green-600 hover:text-green-900">
                                  <FaEdit className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'products' && (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Product Management</h3>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center">
                      <FaPlus className="w-4 h-4 mr-2" />
                      Add Product
                    </button>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-8 text-center">
                    <FaBox className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Product Management</h4>
                    <p className="text-gray-600">Manage all products, categories, and inventory from this section.</p>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">System Settings</h3>
                  <div className="bg-gray-50 rounded-lg p-8 text-center">
                    <FaCog className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Settings</h4>
                    <p className="text-gray-600">Configure system settings, preferences, and platform options.</p>
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
    </div>
  );
};

export default AdminDashboard;