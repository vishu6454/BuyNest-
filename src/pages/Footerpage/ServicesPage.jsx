import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const [activeTab, setActiveTab] = useState('shopping');
  const [hoveredService, setHoveredService] = useState(null);

  const services = {
    shopping: {
      title: "Seamless Shopping Experience",
      description: "Our platform offers an intuitive, personalized shopping journey with AI-powered recommendations and effortless navigation.",
      features: [
        "Personalized product recommendations",
        "Advanced search & filtering",
        "Wishlist & save for later",
        "Customer reviews & ratings"
      ],
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    delivery: {
      title: "Lightning Fast Delivery",
      description: "Get your products delivered at your doorstep with our optimized logistics network and multiple delivery options.",
      features: [
        "Same-day delivery in select cities",
        "Scheduled deliveries",
        "Real-time tracking",
        "Contactless delivery options"
      ],
      image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    support: {
      title: "24/7 Customer Support",
      description: "Our dedicated support team is always ready to assist you with any queries or issues you might have.",
      features: [
        "24/7 live chat support",
        "Phone & email support",
        "Comprehensive FAQ section",
        "Video call assistance for complex issues"
      ],
      image: "https://images.unsplash.com/photo-1585241936939-be4099591252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    returns: {
      title: "Hassle-Free Returns",
      description: "Not satisfied with your purchase? Our easy return policy ensures you get what you deserve.",
      features: [
        "30-day return policy",
        "Free return shipping",
        "Instant refunds",
        "No questions asked policy"
      ],
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  };

  const premiumServices = [
    {
      title: "Personal Shopper",
      icon: "🛍️",
      description: "Get personalized shopping assistance from our experts who understand your style and preferences.",
      price: "$19.99/month"
    },
    {
      title: "Priority Delivery",
      icon: "⚡",
      description: "Jump the queue with our priority delivery service that guarantees 2-hour delivery in metro areas.",
      price: "$9.99/order"
    },
    {
      title: "Extended Warranty",
      icon: "🛡️",
      description: "Add extra protection to your purchases with our extended warranty plans.",
      price: "From $4.99/item"
    },
    {
      title: "VIP Customer Support",
      icon: "🌟",
      description: "Access our premium support line with instant connection to senior support specialists.",
      price: "$14.99/month"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h1 
            className="text-5xl font-extrabold text-gray-900 mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="text-indigo-600">Services</span>
          </motion.h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how BuyNest goes beyond just shopping to deliver exceptional experiences
          </p>
        </div>

        {/* Main Services Tabs */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.keys(services).map((serviceKey) => (
              <motion.button
                key={serviceKey}
                onClick={() => setActiveTab(serviceKey)}
                className={`px-6 py-3 rounded-full font-medium text-sm sm:text-base ${activeTab === serviceKey ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {services[serviceKey].title.split(' ')[0]}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{services[activeTab].title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{services[activeTab].description}</p>
                  <ul className="space-y-3">
                    {services[activeTab].features.map((feature, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="text-indigo-500 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold"
                  >
                    Learn More
                  </motion.button>
                </div>
                <div className="h-64 md:h-auto">
                  <img 
                    src={services[activeTab].image} 
                    alt={services[activeTab].title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.section>

        {/* Premium Services */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Premium Services</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-indigo-600 font-medium">{service.price}</p>
                </div>
                <motion.div
                  className="h-1 bg-indigo-600"
                  initial={{ scaleX: 0 }}
                  animate={{ 
                    scaleX: hoveredService === index ? 1 : 0,
                    originX: 0
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section 
          className="mb-20 bg-indigo-50 rounded-2xl p-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How BuyNest Services Work</h2>
          
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-indigo-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 lg:space-y-0">
              {[
                {
                  step: "1",
                  title: "Browse & Select",
                  description: "Explore our vast catalog and select products or services that meet your needs.",
                  icon: "🔍"
                },
                {
                  step: "2",
                  title: "Customize Experience",
                  description: "Choose from our standard or premium services to enhance your shopping journey.",
                  icon: "⚙️"
                },
                {
                  step: "3",
                  title: "Fast Checkout",
                  description: "Enjoy our secure, one-click checkout process with multiple payment options.",
                  icon: "💳"
                },
                {
                  step: "4",
                  title: "Receive & Enjoy",
                  description: "Get your products delivered with your selected service level and enjoy!",
                  icon: "🎁"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="relative lg:flex items-center"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className={`lg:absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white text-2xl font-bold z-10 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-3'}`}>
                    {step.icon}
                  </div>
                  <div className={`lg:w-5/12 p-6 bg-white rounded-lg shadow-md ${index % 2 === 0 ? 'lg:mr-auto lg:order-0' : 'lg:ml-auto lg:order-4'}`}>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Our Customers Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "BuyNest's priority delivery saved my event! Got my order in just 90 minutes.",
                author: "Jessica T.",
                role: "Frequent Buyer",
                rating: "★★★★★"
              },
              {
                quote: "The personal shopper service understood my style better than I do. Amazing!",
                author: "Michael R.",
                role: "VIP Member",
                rating: "★★★★★"
              },
              {
                quote: "Their return process is truly hassle-free. No complicated forms or waiting.",
                author: "Sarah K.",
                role: "First-time Customer",
                rating: "★★★★☆"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="text-yellow-400 text-2xl mb-4">{testimonial.rating}</div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-4">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Premium Shopping?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers enjoying BuyNest's exceptional services today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold"
            >
              Sign Up Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;