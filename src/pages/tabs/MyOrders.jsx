import React, { useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
function Orders() {
  const [orders, setOrders] = useState([]);
  const [filters, setFilters] = useState({ status: [], time: [] });
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  const saveOrdersToStorage = (updatedOrders) => {
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  const handleCancel = (orderId) => {
    const updatedOrders = orders.map(order =>
      order.id === orderId ? { ...order, status: 'Cancelled' } : order
    );
    saveOrdersToStorage(updatedOrders);
  };

  const handleReturn = (orderId) => {
    const updatedOrders = orders.map(order =>
      order.id === orderId ? { ...order, status: 'Returned' } : order
    );
    saveOrdersToStorage(updatedOrders);
  };

  const filteredOrders = orders.filter(order => {
    const matchesStatus = filters.status.length === 0 || filters.status.includes(order.status);
    const matchesTime = filters.time.length === 0 || filters.time.includes('Last 30 days');
    const matchesSearch = order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.status.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesTime && matchesSearch;
  });

  const handleFilterChange = (type, value) => {
    setFilters(prev => {
      const currentValues = prev[type];
      return {
        ...prev,
        [type]: currentValues.includes(value)
          ? currentValues.filter(item => item !== value)
          : [...currentValues, value]
      };
    });
  };

  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const toggleDetails = (orderId) => setExpandedOrderId(prev => (prev === orderId ? null : orderId));

  return (
    <div className={`min-h-screen font-inter ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-800'}`}>
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full shadow-lg transition ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-white text-gray-800'}`}
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? '🌙' : '☀️'}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row p-4 lg:p-8 gap-6">
        <aside className={`w-full lg:w-1/4 p-4 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className="text-lg font-semibold mb-4 border-b pb-2">Filters</h2>
          <div className="mb-6">
            <h3 className="font-medium mb-3">ORDER STATUS</h3>
            {['Order Confirmed', 'Delivered', 'Cancelled', 'Returned'].map(status => (
              <label key={status} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={filters.status.includes(status)}
                  onChange={() => handleFilterChange('status', status)}
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
                <span className="ml-2 text-sm">{status}</span>
              </label>
            ))}
          </div>
          <div className="mb-6">
            <h3 className="font-medium mb-3">ORDER TIME</h3>
            {['Last 30 days'].map(time => (
              <label key={time} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={filters.time.includes(time)}
                  onChange={() => handleFilterChange('time', time)}
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
                <span className="ml-2 text-sm">{time}</span>
              </label>
            ))}
          </div>
        </aside>

        <main className="flex-1">
          <div className={`flex items-center mb-6 p-2 rounded-full shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <input
              type="text"
              placeholder="Search your orders here"
              className={`flex-1 p-3 pl-5 rounded-full outline-none ${darkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-100 text-gray-800'}`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <div
                  key={order.id}
                  className={`p-4 rounded-xl shadow-md transition hover:shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                >
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center flex-grow">
                      <img src={order.image} alt={order.name} className="w-16 h-16 rounded-lg mr-4 object-cover" />
                      <div className="flex-1">
                        <p className="font-semibold">{order.name}</p>
                        <p className="text-gray-500 text-sm">{order.price}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-medium ${order.status === 'Order Confirmed' || order.status === 'Delivered' ? 'text-green-600' : 'text-red-600'}`}>
                        {order.status}
                      </p>
                      <p className="text-sm">{order.message}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-4">
                    {order.status === 'Order Confirmed' && (
                      <button
                        onClick={() => handleCancel(order.id)}
                        className="px-4 py-2 rounded-lg text-white bg-red-500 hover:bg-red-600 transition"
                      >
                        Cancel Order
                      </button>
                    )}
                    {order.status === 'Delivered' && (
                      <button
                        onClick={() => handleReturn(order.id)}
                        className="px-4 py-2 rounded-lg text-white bg-yellow-500 hover:bg-yellow-600 transition"
                      >
                        Return Order
                      </button>
                    )}
                  </div>

                  <div className="mt-4 pt-2 border-t border-gray-200">
                    <button
                      onClick={() => toggleDetails(order.id)}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      {expandedOrderId === order.id ? 'Hide Details' : 'View Details'}
                    </button>
                    {expandedOrderId === order.id && (
                      <div className={`mt-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <p><strong>Payment Status:</strong> {order.paymentStatus}</p>
                        <p><strong>Delivery:</strong> {order.deliveryDate}</p>
                        <p><strong>Info:</strong> {order.details}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className={`p-6 text-center rounded-xl shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <p className="text-lg font-medium">No orders found.</p>
                <p className="text-sm text-gray-500 mt-2">Try placing an order or adjusting your filters.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Orders;
