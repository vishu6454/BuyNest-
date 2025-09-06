// Payment.js
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PaymentMethod = ({ selectedMethod, onChange }) => {
  const methods = [
    { id: "creditCard", name: "Credit / Debit Card", description: "Pay with Visa, Mastercard, or other cards", icon: "💳" },
    { id: "upi", name: "UPI", description: "Pay using any UPI app like Google Pay, PhonePe", icon: "📱" },
    { id: "paypal", name: "PayPal", description: "Pay securely with your PayPal account", icon: "🌐" },
    { id: "cod", name: "Cash on Delivery", description: "Pay when you receive your order", icon: "💰" },
  ];

  return (
    <motion.div className="space-y-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <h3 className="text-xl font-semibold text-gray-800">Select Payment Method</h3>
      {methods.map((method) => (
        <motion.div
          key={method.id}
          whileTap={{ scale: 0.97 }}
          className={`flex items-start gap-4 border rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-lg ${selectedMethod === method.id ? 'border-blue-600 bg-blue-50 shadow-md' : 'border-gray-300'}`}
          onClick={() => onChange(method.id)}
        >
          <div className="text-2xl">{method.icon}</div>
          <div className="flex-1">
            <h4 className="text-lg font-medium text-gray-900">{method.name}</h4>
            <p className="text-sm text-gray-600">{method.description}</p>
          </div>
          <input type="radio" name="paymentMethod" checked={selectedMethod === method.id} onChange={() => onChange(method.id)} className="accent-blue-600 mt-1" />
        </motion.div>
      ))}
    </motion.div>
  );
};

const Payment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [cardDetails, setCardDetails] = useState({ number: "", name: "", expiry: "", cvv: "" });
  const [isProcessing, setIsProcessing] = useState(false);

  const { product, quantity, discount, promoCode, selectedAddress, totalAmount } = state || {};

  const subtotal = product?.price * quantity || 0;
  const tax = subtotal * 0.18;
  const discountAmount = (subtotal * discount) / 100;
  const grandTotal = subtotal - discountAmount + tax;

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

      const newOrder = {
        id: Date.now().toString(),
        image: product.image,
        name: product.name,
        price: `₹${product.price}`,
        amount: grandTotal,
        quantity,
        paymentStatus: "Successful",
        status: "Order Confirmed",
        deliveryDate: "Expected in 5-7 days",
        message: "Your order has been successfully placed.",
        details: `Tracking ID: TRK${Math.floor(Math.random() * 1e9)}. Paid via ${paymentMethod}.`,
      };

      localStorage.setItem("orders", JSON.stringify([newOrder, ...existingOrders]));

      setIsProcessing(false);
      navigate("/orders");
    }, 2000);
  };

  return (
    <motion.div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div>
        <motion.h1 className="text-3xl font-bold text-gray-800 mb-6" initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          Payment Method
        </motion.h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <PaymentMethod selectedMethod={paymentMethod} onChange={setPaymentMethod} />
          {paymentMethod === "creditCard" && (
            <motion.div className="space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold text-gray-700">Card Details</h3>
              <input type="text" name="number" value={cardDetails.number} onChange={handleCardChange} placeholder="1234 5678 9012 3456" maxLength="16" required className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500" />
              <input type="text" name="name" value={cardDetails.name} onChange={handleCardChange} placeholder="Name on Card" required className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" name="expiry" value={cardDetails.expiry} onChange={handleCardChange} placeholder="MM/YY" maxLength="5" required className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500" />
                <input type="text" name="cvv" value={cardDetails.cvv} onChange={handleCardChange} placeholder="CVV" maxLength="3" required className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500" />
              </div>
            </motion.div>
          )}

          <div className="flex justify-between items-center pt-4">
            <Link to="/checkout" className="text-blue-600 hover:underline">← Back</Link>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 shadow-md hover:shadow-xl relative flex items-center gap-2 disabled:opacity-60"
              disabled={isProcessing}
            >
              {isProcessing && <span className="loader ease-linear rounded-full border-2 border-t-2 border-white h-4 w-4 animate-spin"></span>}
              {isProcessing ? "Processing..." : `Pay ₹${grandTotal.toFixed(2)}`}
            </button>
          </div>
        </form>
      </div>

      <motion.div className="bg-white p-6 rounded-xl shadow space-y-4 h-fit" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <h2 className="text-xl font-semibold">Order Summary</h2>
        {product && (
          <div className="flex items-center gap-4 border-b pb-3">
            <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-md border" />
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-800">{product.name}</h4>
              <p className="text-xs text-gray-500">Qty: {quantity}</p>
              {promoCode && <p className="text-xs text-green-600">Promo Applied: {promoCode}</p>}
            </div>
            <div className="text-sm font-semibold text-gray-800">
              ₹{(product.price * quantity).toFixed(2)}
            </div>
          </div>
        )}
        <div className="text-sm text-gray-700 space-y-2 pt-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="text-green-700">Free</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (18%)</span>
            <span>₹{tax.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-green-700">
              <span>Discount</span>
              <span>-₹{discountAmount.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between border-t pt-2 font-bold">
            <span>Total</span>
            <span>₹{grandTotal.toFixed(2)}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Payment;
