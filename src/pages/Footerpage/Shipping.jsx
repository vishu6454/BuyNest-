import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ShippingPage = () => {
  const [activeRegion, setActiveRegion] = useState('domestic');
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  const shippingOptions = [
    {
      name: "Standard Shipping",
      price: "Free",
      deliveryTime: "3-5 business days",
      description: "Our most economical option with reliable delivery",
      icon: "🚛"
    },
    {
      name: "Express Shipping",
      price: "$9.99",
      deliveryTime: "1-2 business days",
      description: "Priority handling with faster delivery",
      icon: "✈️"
    },
    {
      name: "Same-Day Delivery",
      price: "$14.99",
      deliveryTime: "Same day (order by 12pm)",
      description: "Available in select metropolitan areas",
      icon: "🏍️"
    },
    {
      name: "Next-Day Delivery",
      price: "$12.99",
      deliveryTime: "Next business day",
      description: "Order by 5pm for next-day delivery",
      icon: "🚀"
    }
  ];

  const domesticRegions = [
    {
      name: "East Coast",
      standard: "2-3 days",
      express: "1 day"
    },
    {
      name: "Midwest",
      standard: "3-4 days",
      express: "1-2 days"
    },
    {
      name: "West Coast",
      standard: "4-5 days",
      express: "2 days"
    },
    {
      name: "Alaska/Hawaii",
      standard: "7-10 days",
      express: "3-5 days"
    }
  ];

  const internationalRegions = [
    {
      name: "Canada",
      standard: "5-7 days",
      express: "2-3 days"
    },
    {
      name: "Europe",
      standard: "7-14 days",
      express: "3-5 days"
    },
    {
      name: "Asia",
      standard: "10-15 days",
      express: "5-7 days"
    },
    {
      name: "Australia/NZ",
      standard: "8-12 days",
      express: "4-6 days"
    }
  ];

  const faqs = [
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can track your package by clicking the link in your shipping confirmation email or by visiting the 'My Orders' section of your account."
    },
    {
      question: "What carriers do you use?",
      answer: "We partner with multiple carriers including UPS, FedEx, USPS, and local delivery services depending on your location and the shipping method selected."
    },
    {
      question: "Can I change my shipping address after ordering?",
      answer: "Address changes may be possible if your order hasn't shipped yet. Contact our customer service immediately at support@buynest.com or call 1-800-BUYNEST for assistance."
    },
    {
      question: "Do you ship to PO boxes?",
      answer: "Yes, we can ship to PO boxes via USPS. However, some shipping methods and certain products may not be eligible for PO box delivery."
    },
    {
      question: "What happens if I'm not home for delivery?",
      answer: "The carrier will typically leave a notice and attempt redelivery or hold the package at a local facility. You can also request specific delivery instructions during checkout."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4"
          >
            Shipping Information
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Fast, reliable delivery options to get your purchases quickly and safely
          </motion.p>
        </div>

        {/* Shipping Options */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Shipping Options</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shippingOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center"
              >
                <span className="text-4xl mb-4">{option.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{option.name}</h3>
                <p className="text-2xl font-semibold text-blue-600 mb-2">{option.price}</p>
                <p className="text-gray-700 font-medium mb-2">{option.deliveryTime}</p>
                <p className="text-gray-600 mt-auto">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Delivery Estimates */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setActiveRegion('domestic')}
                className={`px-6 py-3 text-sm font-medium rounded-l-lg ${activeRegion === 'domestic' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              >
                Domestic Shipping
              </button>
              <button
                onClick={() => setActiveRegion('international')}
                className={`px-6 py-3 text-sm font-medium rounded-r-lg ${activeRegion === 'international' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              >
                International Shipping
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeRegion}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200"
            >
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {activeRegion === 'domestic' ? 'U.S. Region' : 'International Region'}
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Standard Delivery
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Express Delivery
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {(activeRegion === 'domestic' ? domesticRegions : internationalRegions).map((region, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {region.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {region.standard}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {region.express}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 bg-blue-50 p-6 rounded-xl text-center"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">Need faster shipping?</h3>
            <p className="text-gray-700 mb-4">BuyNest Prime members get free expedited shipping on eligible items</p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-md transition-colors duration-300"
            >
              Try Prime Free for 30 Days
            </motion.button>
          </motion.div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Shipping FAQs</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className={`w-full flex justify-between items-center p-6 text-left rounded-lg transition-all duration-300 ${expandedQuestion === index ? 'bg-blue-600 text-white' : 'bg-white text-gray-900 hover:bg-blue-50 border border-gray-200'}`}
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: expandedQuestion === index ? 180 : 0 }}
                    className="ml-4"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence>
                  {expandedQuestion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white border border-t-0 border-gray-200 rounded-b-lg overflow-hidden"
                    >
                      <div className="p-6 text-gray-700">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-16 bg-gray-900 rounded-xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Shop?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Enjoy fast, reliable shipping on millions of products</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-colors duration-300"
            >
              Start Shopping
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-8 rounded-lg shadow-md transition-colors duration-300"
            >
              Contact Support
            </motion.button>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default ShippingPage;