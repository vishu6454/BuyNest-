import { useEffect, useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

const CartCheckout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart, cartItems: contextCartItems, subtotal: contextSubtotal, totalItems: contextTotalItems } = useCart();
  const { currentUser } = useContext(AuthContext);
  
  const { cartItems = contextCartItems, subtotal = contextSubtotal, totalItems = contextTotalItems } = location.state || {};
  const [selectedAddress, setSelectedAddress] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [addresses, setAddresses] = useState([]);

  const deliveryCharges = 0;

  useEffect(() => {
    if (!cartItems || cartItems.length === 0) {
      navigate('/cart');
    }
    
    if (currentUser) {
      const stored = localStorage.getItem(`user-addresses_${currentUser.uid}`);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setAddresses(parsed);
        } catch (err) {
          console.error("Error parsing addresses:", err);
        }
      }
    }
  }, [cartItems, navigate, currentUser]);

  const handleApplyPromo = () => {
    if (promoCode === "DISCOUNT10") {
      setDiscount(10);
      alert("Promo code applied! 10% discount added.");
    } else {
      setDiscount(0);
      alert("Invalid promo code");
    }
  };

  const calculateTotal = () => {
    const discountAmount = (subtotal * discount) / 100;
    return subtotal - discountAmount + deliveryCharges;
  };

  const handlePlaceOrder = () => {
    if (addresses.length === 0) {
      alert("Please add a delivery address in your profile");
      return;
    }
    
    navigate('/Cartpayment', {
      state: {
        cartItems,
        totalAmount: calculateTotal(),
        selectedAddress: addresses[selectedAddress],
        discount,
        promoCode,
        subtotal,
        totalItems
      }
    });
  };

  if (!cartItems || cartItems.length === 0) {
    return null;
  }

  return (
    <motion.div className="max-w-7xl mx-auto px-4 py-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Checkout</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          {/* Delivery Address Section */}
          <motion.div className="bg-white p-6 rounded-2xl shadow space-y-4" whileHover={{ scale: 1.01 }}>
            <h2 className="text-xl font-semibold">Delivery Address</h2>
            {addresses.length === 0 ? (
              <p className="text-gray-500 text-sm">No saved addresses found. Please add one in your profile.</p>
            ) : (
              addresses.map((addr, index) => (
                <motion.div
                  key={index}
                  className={`border rounded-xl p-4 cursor-pointer transition ${
                    selectedAddress === index ? "border-blue-500 bg-blue-50" : "hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedAddress(index)}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{addr.firstName} {addr.lastName}</p>
                      <p className="text-sm text-gray-600">
                        {addr.flat}, {addr.area}, {addr.landmark}, {addr.city} - {addr.pincode}
                      </p>
                      <p className="text-sm text-gray-600">{addr.state}, {addr.country}</p>
                      <p className="text-sm text-gray-600 font-medium">📞 {addr.mobile}</p>
                    </div>
                    {selectedAddress === index ? (
                      <span className="text-green-600 font-medium">✓ Selected</span>
                    ) : (
                      <button
                        className="text-blue-500 hover:underline text-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedAddress(index);
                        }}
                      >
                        Select
                      </button>
                    )}
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>

          {/* Order Items */}
          <motion.div className="bg-white p-6 rounded-2xl shadow" whileHover={{ scale: 1.01 }}>
            <h2 className="text-xl font-semibold mb-4">Order Items</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-4 items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>
                    <div className="flex gap-2 mt-1">
                      <span className="text-lg font-bold text-green-700">₹{item.price.toLocaleString()}</span>
                      {item.originalPrice && (
                        <span className="line-through text-sm text-gray-500">
                          ₹{item.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Price Details */}
        <motion.div
          className="bg-white p-6 rounded-2xl shadow h-fit space-y-6"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <h2 className="text-xl font-semibold">Price Details</h2>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Price ({totalItems} item{totalItems > 1 ? 's' : ''})</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className={deliveryCharges === 0 ? "text-green-600" : ""}>
                {deliveryCharges === 0 ? "Free" : `₹${deliveryCharges}`}
              </span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-green-700">
                <span>Discount ({discount}%)</span>
                <span>-₹{((subtotal * discount) / 100).toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between font-bold text-base pt-2 border-t">
              <span>Total Payable</span>
              <span>₹{calculateTotal().toLocaleString()}</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Promo Code</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 p-2 border rounded-lg"
                placeholder="DISCOUNT10"
              />
              <button
                onClick={handleApplyPromo}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Apply
              </button>
            </div>
          </div>

          <motion.button
            onClick={handlePlaceOrder}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition"
          >
            Place Order
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CartCheckout;