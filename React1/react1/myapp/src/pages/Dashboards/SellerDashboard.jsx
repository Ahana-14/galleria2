import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash, FaEye, FaChartLine, FaDollarSign, FaShoppingCart, FaArrowUp } from 'react-icons/fa';
import SimpleChart from '../../components/SimpleChart';

const SellerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const sidebar = [
    { id: 'overview', label: 'Overview' },
    { id: 'inventory', label: 'Inventory' },
    { id: 'orders', label: 'Orders' },
    { id: 'products', label: 'Manage Products' },
  ];
  
  // Mock data
  const stats = {
    totalSales: 125000,
    totalOrders: 45,
    totalProducts: 12,
    monthlyRevenue: 25000
  };

  // Chart data
  const salesData = [
    { label: 'Jan', value: 15000 },
    { label: 'Feb', value: 18000 },
    { label: 'Mar', value: 22000 },
    { label: 'Apr', value: 19000 },
    { label: 'May', value: 25000 },
    { label: 'Jun', value: 28000 }
  ];

  const ordersData = [
    { label: 'Jan', value: 8 },
    { label: 'Feb', value: 12 },
    { label: 'Mar', value: 15 },
    { label: 'Apr', value: 10 },
    { label: 'May', value: 18 },
    { label: 'Jun', value: 22 }
  ];

  const recentOrders = [
    { id: 1, customer: 'John Doe', product: 'Abstract Harmony', amount: 45000, status: 'Completed', date: '2024-01-15' },
    { id: 2, customer: 'Jane Smith', product: 'Urban Dreams', amount: 38000, status: 'Pending', date: '2024-01-14' },
    { id: 3, customer: 'Mike Johnson', product: 'Eternal Dance', amount: 52000, status: 'Shipped', date: '2024-01-13' }
  ];

  const products = [
    { id: 1, name: 'Abstract Harmony', price: 45000, stock: 1, status: 'Active', sales: 3 },
    { id: 2, name: 'Urban Dreams', price: 38000, stock: 2, status: 'Active', sales: 2 },
    { id: 3, name: 'Eternal Dance', price: 52000, stock: 1, status: 'Active', sales: 1 }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: FaChartLine },
    { id: 'products', name: 'Products', icon: FaShoppingCart },
    { id: 'orders', name: 'Orders', icon: FaDollarSign }
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
              <h1 className="text-3xl font-bold text-gray-900">Seller Dashboard</h1>
              <p className="text-gray-600 mt-1">Manage your art sales and inventory</p>
            </div>
            <button className="mt-4 md:mt-0 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center">
              <FaPlus className="w-4 h-4 mr-2" />
              Add New Product
            </button>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <FaDollarSign className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Sales</p>
                  <p className="text-2xl font-bold text-gray-900">₹{stats.totalSales.toLocaleString()}</p>
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
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
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
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <FaChartLine className="w-6 h-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Products</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalProducts}</p>
                </div>
              </div>
                <div className="text-right">
                  <div className="flex items-center text-green-600 text-sm">
                    <FaArrowUp className="w-3 h-3 mr-1" />
                    <span>+3</span>
                  </div>
                  <p className="text-xs text-gray-500">new this month</p>
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
              <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <FaChartLine className="w-6 h-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">₹{stats.monthlyRevenue.toLocaleString()}</p>
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
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-md mb-8">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
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
                    {/* Sales Chart */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="bg-white rounded-xl shadow-sm p-6"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold text-gray-900">Sales Trend</h3>
                        <div className="flex items-center text-green-600 text-sm">
                          <FaArrowUp className="w-4 h-4 mr-1" />
                          <span>+12%</span>
                        </div>
                      </div>
                      <SimpleChart data={salesData} type="line" color="blue" height={200} />
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

                  {/* Recent Orders */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h3>
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
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                          {recentOrders.map((order, index) => (
                            <motion.tr
                              key={order.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 + index * 0.1 }}
                              className="hover:bg-gray-50 transition-colors"
                            >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{order.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.product}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{order.amount.toLocaleString()}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-blue-100 text-blue-800'
                              }`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.date}</td>
                            </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  </motion.div>
                </div>
              )}

              {activeTab === 'products' && (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">My Products</h3>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center">
                      <FaPlus className="w-4 h-4 mr-2" />
                      Add Product
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                      <div key={product.id} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-gray-900">{product.name}</h4>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            product.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {product.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">₹{product.price.toLocaleString()}</p>
                        <p className="text-sm text-gray-500 mb-4">Stock: {product.stock} | Sales: {product.sales}</p>
                        <div className="flex space-x-2">
                          <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors">
                            <FaEye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                            <FaEdit className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                            <FaTrash className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'orders' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Management</h3>
                  <div className="bg-gray-50 rounded-lg p-8 text-center">
                    <FaDollarSign className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Order Management</h4>
                    <p className="text-gray-600">Manage and track all your orders from this section.</p>
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

export default SellerDashboard;
