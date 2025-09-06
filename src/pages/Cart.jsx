import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, subtotal, totalItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Your cart is empty</h2>
        <p className="mt-2 text-gray-600">Looks like you haven't added anything to your cart yet.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  const handleProceedToCheckout = () => {
    navigate('/Cartcheckout', {
      state: {
        cartItems,
        subtotal,
        totalItems,
      },
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Shopping Cart ({totalItems})</h1>
            <button
              onClick={clearCart}
              className="text-sm text-indigo-600 hover:text-indigo-800"
            >
              Clear Cart
            </button>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <motion.li 
                  key={`${item.id}-${item.size}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <CartItem 
                    item={item}
                    onRemove={() => removeFromCart(item.id, item.size)}
                    onQuantityChange={(newQuantity) => 
                      updateQuantity(item.id, item.size, newQuantity)
                    }
                  />
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="bg-white shadow rounded-md p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between text-base font-medium text-gray-900 mb-2">
                <p>Subtotal</p>
                <p>₹{subtotal.toLocaleString()}</p>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <p>Delivery</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <p>Taxes</p>
                <p>Calculated at checkout</p>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between text-lg font-bold text-gray-900">
                  <p>Total</p>
                  <p>₹{subtotal.toLocaleString()}</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleProceedToCheckout}
                className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Proceed to Checkout
              </motion.button>
            </div>

            <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
              <p>
                or{' '}
                <Link to="/" className="text-indigo-600 font-medium hover:text-indigo-500">
                  Continue Shopping
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-6 bg-white shadow rounded-md p-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Promo Code</h3>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter promo code"
                className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-r-md text-sm font-medium hover:bg-gray-300">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
