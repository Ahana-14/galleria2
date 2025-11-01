import { useEffect, useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import LanguageDropdown from "../components/LanguageDropdown";
import PasswordChange from "../components/PasswordChange";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaBell, FaShieldAlt, FaMapMarkerAlt, FaCog } from "react-icons/fa";

const SETTINGS_KEY = "galleria_user_settings";

function Settings() {
  const [settings, setSettings] = useState({ 
    theme: "light", 
    language: "en",
    notifications: {
      email: true,
      push: true,
      sms: false
    },
    privacy: {
      profileVisibility: "public",
      showEmail: false,
      showPhone: false
    },
    addresses: []
  });
  const [activeTab, setActiveTab] = useState("general");
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    isDefault: false
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem(SETTINGS_KEY);
      if (saved) setSettings(JSON.parse(saved));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch {}
  }, [settings]);

  const tabs = [
    { id: "general", name: "General", icon: FaCog },
    { id: "notifications", name: "Notifications", icon: FaBell },
    { id: "privacy", name: "Privacy", icon: FaShieldAlt },
    { id: "addresses", name: "Addresses", icon: FaMapMarkerAlt },
    { id: "security", name: "Security", icon: FaUser }
  ];

  const handleAddAddress = () => {
    if (newAddress.name && newAddress.street && newAddress.city) {
      setSettings(prev => ({
        ...prev,
        addresses: [...prev.addresses, { ...newAddress, id: Date.now() }]
      }));
      setNewAddress({
        name: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        phone: "",
        isDefault: false
      });
      setShowAddAddress(false);
    }
  };

  const handleDeleteAddress = (id) => {
    setSettings(prev => ({
      ...prev,
      addresses: prev.addresses.filter(addr => addr.id !== id)
    }));
  };

  const handleSetDefaultAddress = (id) => {
    setSettings(prev => ({
      ...prev,
      addresses: prev.addresses.map(addr => ({
        ...addr,
        isDefault: addr.id === id
      }))
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
            <p className="text-gray-600">Manage your account preferences and settings</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20">
                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-blue-100 text-blue-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <tab.icon className="w-5 h-5 mr-3" />
                      {tab.name}
                    </button>
                  ))}
                </nav>
            </div>
          </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20"
                >
                  {activeTab === "general" && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">General Settings</h2>
                        <div className="space-y-6">
                          <ThemeToggle 
                            value={settings.theme} 
                            onChange={(v) => setSettings({ ...settings, theme: v })} 
                          />
                          <LanguageDropdown 
                            value={settings.language} 
                            onChange={(v) => setSettings({ ...settings, language: v })} 
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "notifications" && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Notification Preferences</h2>
                        <div className="space-y-6">
                          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                            <div>
                              <h3 className="font-medium text-gray-900">Email Notifications</h3>
                              <p className="text-sm text-gray-600">Receive updates via email</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={settings.notifications.email}
                                onChange={(e) => setSettings(prev => ({
                                  ...prev,
                                  notifications: { ...prev.notifications, email: e.target.checked }
                                }))}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                          </div>

                          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                            <div>
                              <h3 className="font-medium text-gray-900">Push Notifications</h3>
                              <p className="text-sm text-gray-600">Receive push notifications on your device</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={settings.notifications.push}
                                onChange={(e) => setSettings(prev => ({
                                  ...prev,
                                  notifications: { ...prev.notifications, push: e.target.checked }
                                }))}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                          </div>

                          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                            <div>
                              <h3 className="font-medium text-gray-900">SMS Notifications</h3>
                              <p className="text-sm text-gray-600">Receive updates via SMS</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={settings.notifications.sms}
                                onChange={(e) => setSettings(prev => ({
                                  ...prev,
                                  notifications: { ...prev.notifications, sms: e.target.checked }
                                }))}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "privacy" && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy Settings</h2>
                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Profile Visibility
                            </label>
                            <select
                              value={settings.privacy.profileVisibility}
                              onChange={(e) => setSettings(prev => ({
                                ...prev,
                                privacy: { ...prev.privacy, profileVisibility: e.target.value }
                              }))}
                              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                              <option value="public">Public</option>
                              <option value="friends">Friends Only</option>
                              <option value="private">Private</option>
                            </select>
                          </div>

                          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                            <div>
                              <h3 className="font-medium text-gray-900">Show Email Address</h3>
                              <p className="text-sm text-gray-600">Allow others to see your email address</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={settings.privacy.showEmail}
                                onChange={(e) => setSettings(prev => ({
                                  ...prev,
                                  privacy: { ...prev.privacy, showEmail: e.target.checked }
                                }))}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                          </div>

                          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                            <div>
                              <h3 className="font-medium text-gray-900">Show Phone Number</h3>
                              <p className="text-sm text-gray-600">Allow others to see your phone number</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={settings.privacy.showPhone}
                                onChange={(e) => setSettings(prev => ({
                                  ...prev,
                                  privacy: { ...prev.privacy, showPhone: e.target.checked }
                                }))}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "addresses" && (
                    <div className="space-y-8">
                      <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-gray-900">Address Management</h2>
                        <button
                          onClick={() => setShowAddAddress(true)}
                          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors"
                        >
                          Add Address
                        </button>
                      </div>

                      {showAddAddress && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-gray-50 rounded-xl p-6"
                        >
                          <h3 className="text-lg font-semibold mb-4">Add New Address</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                              type="text"
                              placeholder="Full Name"
                              value={newAddress.name}
                              onChange={(e) => setNewAddress(prev => ({ ...prev, name: e.target.value }))}
                              className="rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                              type="text"
                              placeholder="Phone Number"
                              value={newAddress.phone}
                              onChange={(e) => setNewAddress(prev => ({ ...prev, phone: e.target.value }))}
                              className="rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                              type="text"
                              placeholder="Street Address"
                              value={newAddress.street}
                              onChange={(e) => setNewAddress(prev => ({ ...prev, street: e.target.value }))}
                              className="rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                              type="text"
                              placeholder="City"
                              value={newAddress.city}
                              onChange={(e) => setNewAddress(prev => ({ ...prev, city: e.target.value }))}
                              className="rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                              type="text"
                              placeholder="State"
                              value={newAddress.state}
                              onChange={(e) => setNewAddress(prev => ({ ...prev, state: e.target.value }))}
                              className="rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                              type="text"
                              placeholder="ZIP Code"
                              value={newAddress.zipCode}
                              onChange={(e) => setNewAddress(prev => ({ ...prev, zipCode: e.target.value }))}
                              className="rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          <div className="flex items-center mt-4">
                            <input
                              type="checkbox"
                              id="default"
                              checked={newAddress.isDefault}
                              onChange={(e) => setNewAddress(prev => ({ ...prev, isDefault: e.target.checked }))}
                              className="mr-2"
                            />
                            <label htmlFor="default" className="text-sm text-gray-600">
                              Set as default address
                            </label>
                          </div>
                          <div className="flex gap-3 mt-6">
                            <button
                              onClick={handleAddAddress}
                              className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-colors"
                            >
                              Save Address
                            </button>
                            <button
                              onClick={() => setShowAddAddress(false)}
                              className="bg-gray-300 text-gray-700 px-6 py-2 rounded-xl hover:bg-gray-400 transition-colors"
                            >
                              Cancel
                            </button>
                          </div>
                        </motion.div>
                      )}

                      <div className="space-y-4">
                        {settings.addresses.map((address) => (
                          <div key={address.id} className="bg-gray-50 rounded-xl p-6">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <h3 className="font-semibold text-gray-900">{address.name}</h3>
                                  {address.isDefault && (
                                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                      Default
                                    </span>
                                  )}
                                </div>
                                <p className="text-gray-600">{address.street}</p>
                                <p className="text-gray-600">{address.city}, {address.state} {address.zipCode}</p>
                                <p className="text-gray-600">{address.phone}</p>
                              </div>
                              <div className="flex gap-2">
                                {!address.isDefault && (
                                  <button
                                    onClick={() => handleSetDefaultAddress(address.id)}
                                    className="text-blue-600 hover:text-blue-700 text-sm"
                                  >
                                    Set Default
                                  </button>
                                )}
                                <button
                                  onClick={() => handleDeleteAddress(address.id)}
                                  className="text-red-600 hover:text-red-700 text-sm"
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "security" && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Security Settings</h2>
            <PasswordChange onSubmit={(form) => console.log("Password updated", form)} />
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Settings;



