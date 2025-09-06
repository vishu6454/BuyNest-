import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CheckCircleIcon, ArrowLeftIcon, ShoppingBagIcon, TruckIcon, CreditCardIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';

const OrderConfirmation = () => {
  const location = useLocation();
  const { selectedAddress, paymentMethod } = location.state || {};
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedAddress || !paymentMethod) {
      toast.error('Invalid order confirmation');
      navigate('/');
    }
  }, [selectedAddress, paymentMethod, navigate]);

  if (!selectedAddress || !paymentMethod) return null;

  const getPaymentMethodIcon = () => {
    switch (paymentMethod) {
      case 'card':
        return <CreditCardIcon className="h-5 w-5 text-indigo-600 mr-2" />;
      case 'upi':
        return <WalletIcon className="h-5 w-5 text-indigo-600 mr-2" />;
      case 'netbanking':
        return <BanknotesIcon className="h-5 w-5 text-indigo-600 mr-2" />;
      default:
        return <CreditCardIcon className="h-5 w-5 text-indigo-600 mr-2" />;
    }
  };

  const getPaymentMethodName = () => {
    switch (paymentMethod) {
      case 'card':
        return 'Credit/Debit Card';
      case 'upi':
        return 'UPI Payment';
      case 'netbanking':
        return 'Net Banking';
      default:
        return paymentMethod;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center"
    >
      <div className="bg-white rounded-xl shadow-sm p-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6"
        >
          <CheckCircleIcon className="h-10 w-10 text-green-600" />
        </motion.div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Thank you for your purchase. Your order has been confirmed and will be shipped soon.
        </p>

        <div className="max-w-md mx-auto bg-gray-50 rounded-lg p-6 mb-8 text-left">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Details</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <ShoppingBagIcon className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
              <div>
                <h3 className="font-medium text-gray-900">Order Number</h3>
                <p className="text-sm text-gray-500">#ORD-2023-456789</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <TruckIcon className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
              <div>
                <h3 className="font-medium text-gray-900">Delivery Address</h3>
                <p className="text-sm text-gray-500">
                  {selectedAddress.name}<br />
                  {selectedAddress.fullAddress}
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              {getPaymentMethodIcon()}
              <div>
                <h3 className="font-medium text-gray-900">Payment Method</h3>
                <p className="text-sm text-gray-500">{getPaymentMethodName()}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Continue Shopping
          </Link>
          <Link
            to="/orders"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            View Order Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderConfirmation;
