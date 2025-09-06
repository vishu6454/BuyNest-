import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BuyNestFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is BuyNest?",
      answer: "BuyNest is a leading e-commerce platform offering a wide range of products from electronics to home goods, fashion, and more. We provide a seamless shopping experience with secure payments and fast delivery."
    },
    {
      question: "How do I create an account?",
      answer: "Click on the 'Sign Up' button at the top right corner of our website. You can register using your email address or through social media accounts like Google or Facebook. The process takes less than a minute!"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and BuyNest Gift Cards. All transactions are securely processed with 256-bit SSL encryption."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery times vary based on your location and the shipping method selected. Standard delivery typically takes 3-5 business days, while express options can deliver within 1-2 business days. You'll receive tracking information once your order ships."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes! We ship to over 100 countries worldwide. International delivery times vary by destination (typically 7-14 business days). Note that additional customs fees or import taxes may apply depending on your country's regulations."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Items must be unused, in original packaging with all tags attached. Some products like perishables or personalized items may be exempt. Visit our Returns Center to initiate a return."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive an email with a tracking number and link. You can also track orders by logging into your account and visiting 'My Orders'. Our system updates tracking information in real-time."
    },
    {
      question: "Do you have a mobile app?",
      answer: "Yes! The BuyNest app is available for both iOS and Android devices. Download it from the App Store or Google Play Store for exclusive app-only deals and a more convenient shopping experience."
    },
    {
      question: "How do I contact customer service?",
      answer: "Our customer service team is available 24/7. You can reach us via live chat on our website, email at support@buynest.com, or phone at 1-800-BUYNEST (286-9378). Average response time is under 5 minutes for live chat."
    },
    {
      question: "Are there any membership programs?",
      answer: "Yes! BuyNest Prime offers free expedited shipping, exclusive deals, early access to sales, and more for $12.99/month or $99/year. We also have a free loyalty program that earns you points on every purchase."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about BuyNest
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center p-6 text-left rounded-lg transition-all duration-300 ${activeIndex === index ? 'bg-blue-600 text-white' : 'bg-white text-gray-900 hover:bg-blue-50 border border-gray-200'}`}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  className="ml-4"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
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

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-blue-50 p-8 rounded-xl text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-gray-700 mb-6">Our customer support team is ready to help you 24/7</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-colors duration-300"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BuyNestFAQ;