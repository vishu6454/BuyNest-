import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ReturnsPage = () => {
  const [activeTab, setActiveTab] = useState('returns');
  const [activeStep, setActiveStep] = useState(null);

  const toggleStep = (index) => {
    setActiveStep(activeStep === index ? null : index);
  };

  const returnSteps = [
    {
      title: "Initiate Your Return",
      content: "Log in to your BuyNest account and go to 'My Orders'. Select the item you want to return and click 'Return Item'. Choose a reason for return and select your preferred return method.",
      icon: "📱"
    },
    {
      title: "Package Your Item",
      content: "Securely pack the item in its original packaging with all tags and accessories included. Include the original invoice or packing slip. If original packaging isn't available, use a sturdy box with sufficient padding.",
      icon: "📦"
    },
    {
      title: "Ship Your Return",
      content: "Attach the prepaid return label (if applicable) and drop off at the designated carrier location. For in-store returns, bring the item to any BuyNest physical store with your return authorization.",
      icon: "🚚"
    },
    {
      title: "Receive Your Refund",
      content: "Once we receive and inspect your return (typically within 3-5 business days), we'll process your refund to the original payment method. You'll receive an email confirmation when complete.",
      icon: "💳"
    }
  ];

  const refundTimeline = [
    {
      method: "Credit/Debit Card",
      time: "3-5 business days after return processing"
    },
    {
      method: "PayPal",
      time: "Within 24 hours of return processing"
    },
    {
      method: "BuyNest Gift Card",
      time: "Immediately upon return processing"
    },
    {
      method: "Bank Transfer",
      time: "5-7 business days after return processing"
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
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4"
          >
            Returns & Refunds Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our hassle-free return policy ensures you can shop with confidence
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex border-b border-gray-200 mb-8"
        >
          <button
            onClick={() => setActiveTab('returns')}
            className={`py-4 px-6 font-medium text-lg ${activeTab === 'returns' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Return Process
          </button>
          <button
            onClick={() => setActiveTab('policy')}
            className={`py-4 px-6 font-medium text-lg ${activeTab === 'policy' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Policy Details
          </button>
          <button
            onClick={() => setActiveTab('refunds')}
            className={`py-4 px-6 font-medium text-lg ${activeTab === 'refunds' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Refund Information
          </button>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'returns' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Easy 4-Step Return Process</h2>
                <div className="space-y-4">
                  {returnSteps.map((step, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="overflow-hidden"
                    >
                      <button
                        onClick={() => toggleStep(index)}
                        className={`w-full flex items-start p-6 text-left rounded-lg transition-all duration-300 ${activeStep === index ? 'bg-blue-100' : 'bg-white hover:bg-gray-50 border border-gray-200'}`}
                      >
                        <span className="text-2xl mr-4">{step.icon}</span>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                            <motion.span
                              animate={{ rotate: activeStep === index ? 180 : 0 }}
                              className="ml-4"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </motion.span>
                          </div>
                          <AnimatePresence>
                            {activeStep === index && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-2 text-gray-600"
                              >
                                {step.content}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </button>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-12 bg-blue-50 p-8 rounded-xl"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need to start a return?</h3>
                  <p className="text-gray-700 mb-6">Initiate your return process now through our self-service portal</p>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-colors duration-300"
                  >
                    Start Return Process
                  </motion.button>
                </motion.div>
              </div>
            )}

            {activeTab === 'policy' && (
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">✓</span>
                    What You Can Return
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Most new, unopened items within 30 days of delivery
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Defective or damaged items (within 1 year of purchase)
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Incorrect items received (must report within 7 days)
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Unworn clothing with original tags attached
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="bg-red-100 text-red-600 p-2 rounded-full mr-3">✗</span>
                    Non-Returnable Items
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Downloadable software products
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Gift cards and vouchers
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Personal care items (unless defective)
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Customized or personalized products
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Items damaged by misuse or normal wear and tear
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="md:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Important Policy Details</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Time Frame</h4>
                      <p className="text-gray-700">30 days from delivery date for most items. Some categories may have different return windows.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Return Shipping</h4>
                      <p className="text-gray-700">Free for defective/wrong items. $6.99 return shipping fee otherwise (waived for BuyNest Prime members).</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Restocking Fee</h4>
                      <p className="text-gray-700">15% for opened electronics (unless defective). No fee for other categories.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {activeTab === 'refunds' && (
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Refund Timelines</h3>
                  <div className="space-y-4">
                    {refundTimeline.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                      >
                        <span className="font-medium text-gray-900">{item.method}</span>
                        <span className="text-gray-700">{item.time}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Refund Methods</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Original Payment Method</h4>
                      <p className="text-gray-700">Refunds are typically issued to the original payment method. For credit/debit cards, please allow 1-2 billing cycles for the refund to appear on your statement.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Store Credit</h4>
                      <p className="text-gray-700">You may opt for BuyNest store credit which is issued immediately and never expires. Receive 10% bonus when choosing this option (e.g., get $110 credit for $100 return).</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Exchange Policy</h4>
                      <p className="text-gray-700">Items can be exchanged for a different size/color if available. Exchanges are processed after we receive your return. You'll be notified when your exchange ships.</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="md:col-span-2 bg-blue-50 p-8 rounded-xl"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Need help with your refund?</h3>
                      <p className="text-gray-700">Our customer service team can check the status of your refund</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-colors duration-300"
                    >
                      Contact Support
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ReturnsPage;