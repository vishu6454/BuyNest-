import React, { useState, useEffect, useContext } from 'react';
import Sidebar from '../components/AccountSidebar';
import Orders from './tabs/MyOrders';
import ProfileTab from './tabs/ProfileTab';
import AddressTab from './tabs/AddressTab';
import PanCardTab from './tabs/PanCardTab';
import PaymentsTab from './tabs/PaymentsTab';
import { DarkModeContext } from '../context/DarkModeContext'; // ✅ Import context

export default function Account() {
  const { isDarkMode } = useContext(DarkModeContext); // ✅ Access dark mode
  const [activeTab, setActiveTab] = useState('profile');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
  }, []);

  const renderTab = () => {
    switch (activeTab) {
      case 'orders':
        return <Orders />;
      case 'profile':
        return <ProfileTab user={user} />;
      case 'address':
        return <AddressTab />;
      case 'pan':
        return <PanCardTab />;
      case 'payments':
        return <PaymentsTab />;
      default:
        return <ProfileTab user={user} />;
    }
  };

  return (
    <div className={`flex min-h-screen p-4 transition-colors duration-500 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} user={user} />
      <div className="flex-1 ml-4">{renderTab()}</div>
    </div>
  );
}
