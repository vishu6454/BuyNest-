import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const images = [
    'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
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
            About <span className="text-indigo-600">BuyNest</span>
          </motion.h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing online shopping with seamless experiences and customer-first approach.
          </p>
        </div>

        {/* Hero Image Slider */}
        <div className="relative h-96 mb-20 rounded-xl overflow-hidden shadow-2xl">
          <AnimatePresence mode='wait'>
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              alt="BuyNest showcase"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-32">
            <div className="absolute bottom-4 left-4 text-white">
              <motion.p 
                className="text-xl font-semibold"
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.3 }}
              >
                BuyNest - Where Shopping Feels Like Home
              </motion.p>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2018, BuyNest began as a small startup with a big vision - to create an e-commerce platform that prioritizes user experience above all else. What started as a team of five passionate individuals in a garage has now grown into one of the most trusted online shopping destinations.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our name "BuyNest" reflects our philosophy - we want to create a comfortable, safe space where customers can find everything they need, just like a bird finds everything it needs in its nest.
              </p>
              <p className="text-lg text-gray-600">
                Today, we serve millions of customers worldwide with a catalog of over 10 million products across 50+ categories.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="BuyNest team" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Mission and Values */}
        <motion.section 
          className="mb-20 bg-indigo-50 rounded-2xl p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Mission & Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Customer First",
                icon: "👑",
                desc: "We put our customers at the heart of everything we do, ensuring their needs are always our top priority."
              },
              {
                title: "Innovation",
                icon: "💡",
                desc: "We constantly push boundaries to deliver cutting-edge shopping experiences through technology."
              },
              {
                title: "Integrity",
                icon: "🤝",
                desc: "We maintain transparency and honesty in all our dealings with customers and partners."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Achievements */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Achievements</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "10M+", label: "Happy Customers" },
              { number: "50+", label: "Categories" },
              { number: "100+", label: "Countries Served" },
              { number: "24/7", label: "Customer Support" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-4xl font-bold text-indigo-600 mb-2">{item.number}</p>
                <p className="text-gray-600">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Leadership</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Sarah Johnson", role: "CEO & Founder", img: "https://randomuser.me/api/portraits/women/44.jpg" },
              { name: "Michael Chen", role: "CTO", img: "https://randomuser.me/api/portraits/men/32.jpg" },
              { name: "Emma Rodriguez", role: "CMO", img: "https://randomuser.me/api/portraits/women/63.jpg" },
              { name: "David Kim", role: "COO", img: "https://randomuser.me/api/portraits/men/75.jpg" }
            ].map((person, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg border-4 border-white">
                  <img 
                    src={person.img} 
                    alt={person.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{person.name}</h3>
                <p className="text-indigo-600">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Future Vision */}
        <motion.section 
          className="bg-gray-900 text-white rounded-2xl p-12 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision for the Future</h2>
              <p className="text-lg text-gray-300 mb-4">
                As we look ahead, BuyNest is committed to pioneering the next generation of e-commerce. We're investing heavily in AI-powered personalization, augmented reality shopping experiences, and sustainable delivery solutions.
              </p>
              <p className="text-lg text-gray-300">
                Our goal is to reduce our carbon footprint by 50% by 2025 while maintaining our position as the most customer-centric platform in the industry. We believe the future of shopping is personalized, sustainable, and seamlessly integrated into daily life.
              </p>
            </div>
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 5, 0],
                y: [0, -10, 10, -10, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Future vision" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div 
          className="text-center py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join the BuyNest Family</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the difference of shopping with a platform that truly cares about your needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold"
          >
            Start Shopping Now
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;