// Sidebar.js
import React, { useContext } from 'react';
import {
  UserIcon,
  MapPinIcon,
  IdentificationIcon,
  CreditCardIcon,
  ArrowRightOnRectangleIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { AuthContext } from '../context/AuthContext';

export default function Sidebar({ activeTab, setActiveTab }) {
  const { currentUser, logout } = useContext(AuthContext);

  const fullName = currentUser
    ? `${currentUser.firstName || ''} ${currentUser.lastName || ''}`.trim()
    : 'User';
  const avatarInitial = currentUser?.firstName?.[0]?.toUpperCase() || 'U';

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      className="w-64 bg-gradient-to-br from-white to-blue-50 p-6 shadow-xl rounded-2xl h-full flex flex-col justify-between border border-gray-200"
    >
      <div>
        <div className="flex flex-col items-center mb-8">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            className="w-16 h-16 rounded-full bg-yellow-400 text-white flex items-center justify-center font-bold text-xl shadow-lg"
          >
            {avatarInitial}
          </motion.div>
          <p className="text-gray-500 mt-2 text-sm">Welcome back,</p>
          <p className="font-bold text-lg text-indigo-700 text-center">{fullName}</p>
        </div>

        <div className="space-y-5 text-sm">
          <SidebarItem icon={ShoppingBagIcon} label="Your Orders" tab="orders" activeTab={activeTab} onClick={setActiveTab} />
          <div className="text-gray-400 uppercase font-semibold text-xs">Account Settings</div>
          <SidebarItem icon={UserIcon} label="Profile Information" tab="profile" activeTab={activeTab} onClick={setActiveTab} />
          <SidebarItem icon={MapPinIcon} label="Manage Addresses" tab="address" activeTab={activeTab} onClick={setActiveTab} />
          <SidebarItem icon={IdentificationIcon} label="PAN Card Information" tab="pan" activeTab={activeTab} onClick={setActiveTab} />
          <div className="text-gray-400 uppercase font-semibold text-xs pt-4">Payments</div>
          <SidebarItem icon={CreditCardIcon} label="Payments" tab="payments" activeTab={activeTab} onClick={setActiveTab} />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="pt-6 border-t mt-8"
      >
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2 text-red-600 bg-red-50 hover:bg-red-600 hover:text-white rounded-lg transition-all duration-300 shadow-sm"
        >
          <ArrowRightOnRectangleIcon className="w-5 h-5" />
          Logout
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

function SidebarItem({ icon: Icon, label, tab, activeTab, onClick }) {
  const isActive = activeTab === tab;

  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(tab)}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer group transition-all duration-300 ${
        isActive
          ? 'bg-indigo-100 text-indigo-700 font-semibold shadow-inner'
          : 'text-gray-700 hover:bg-indigo-50'
      }`}
    >
      <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'text-indigo-600' : 'text-gray-500 group-hover:text-indigo-500'}`} />
      <span className="transition-colors duration-300">{label}</span>
    </motion.div>
  );
}