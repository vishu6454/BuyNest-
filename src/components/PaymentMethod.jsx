import { CreditCardIcon, BanknotesIcon, QrCodeIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const PaymentMethod = ({ selectedMethod, onChange }) => {
  const methods = [
    {
      id: 'creditCard',
      name: 'Credit / Debit Card',
      icon: <CreditCardIcon className="h-5 w-5" />,
      description: 'Pay with Visa, Mastercard, or other cards',
    },
    {
      id: 'upi',
      name: 'UPI',
      icon: <QrCodeIcon className="h-5 w-5" />,
      description: 'Pay using any UPI app like Google Pay, PhonePe',
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: <ArrowPathIcon className="h-5 w-5" />,
      description: 'Pay securely with your PayPal account',
    },
    {
      id: 'cod',
      name: 'Cash on Delivery',
      icon: <BanknotesIcon className="h-5 w-5" />,
      description: 'Pay when you receive your order',
    },
  ];

  return (
    <div className="space-y-4">
      {methods.map((method) => (
        <div key={method.id} className="flex items-center">
          <input
            id={method.id}
            name="paymentMethod"
            type="radio"
            checked={selectedMethod === method.id}
            onChange={() => onChange(method.id)}
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label htmlFor={method.id} className="ml-3 block">
            <div className="flex items-center">
              <span className="text-gray-700 mr-2">{method.icon}</span>
              <span className="text-sm font-medium text-gray-700">{method.name}</span>
            </div>
            <p className="text-xs text-gray-500 ml-7">{method.description}</p>
          </label>
        </div>
      ))}
    </div>
  );
};

export default PaymentMethod;