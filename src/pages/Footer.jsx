import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Facebook from "../Assest/facebook-brands.svg";
import Instagram from "../Assest/instagram-brands.svg";
import LinkedIn from "../Assest/linkedin-brands.svg";
import Twitter from "../Assest/twitter-brands.svg";

function Footer() {
  const [email, setEmail] = useState("");

  // Handle Subscribe Form
  const handleSubscribe = (e) => {
    e.preventDefault(); // Prevent page reload
    if (email.trim() === "") {
      alert("⚠️ Please enter a valid email address!");
      return;
    }
    alert("🎉 You are subscribed!");
    setEmail(""); // Clear the input after alert
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gradient-to-tr from-gray-800 to-gray-900 dark:from-gray-900 dark:to-cyan-800 text-white px-6 py-12 mt-16 rounded-t-3xl shadow-2xl"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Navigation Links */}
        <motion.div whileHover={{ scale: 1.03 }} className="space-y-3">
          <h3 className="text-xl font-semibold text-cyan-500">Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-indigo-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-indigo-500 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-indigo-500 transition">
                Terms of Service
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Help Section */}
        <motion.div whileHover={{ scale: 1.03 }} className="space-y-3">
          <h3 className="text-xl font-semibold text-cyan-500">Help</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/contact" className="hover:text-indigo-500 transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-indigo-500 transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/returns" className="hover:text-indigo-500 transition">
                Returns and Refunds
              </Link>
            </li>
            <li>
              <Link to="/shipping" className="hover:text-indigo-500 transition">
                Shipping
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div whileHover={{ scale: 1.03 }} className="space-y-3">
          <h3 className="text-xl font-semibold text-cyan-500">Follow Us</h3>
          <div className="flex space-x-4 items-center mt-2">
            {[
              { img: Facebook, alt: "Facebook" },
              { img: Twitter, alt: "Twitter" },
              { img: Instagram, alt: "Instagram" },
              { img: LinkedIn, alt: "LinkedIn" },
            ].map(({ img, alt }) => (
              <motion.a
                whileHover={{ scale: 1.2 }}
                key={alt}
                href="#"
                aria-label={alt}
                className="bg-white p-1.5 rounded-full shadow hover:shadow-md transition"
              >
                <img src={img} alt={`${alt} Logo`} className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Subscribe Section */}
        <motion.div whileHover={{ scale: 1.03 }} className="space-y-3">
          <h3 className="text-xl font-semibold text-cyan-500">Subscribe</h3>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-2"
          >
            <input
              type="email"
              name="email"
              placeholder="Your Email ID"
              aria-label="Your Email ID"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-400 text-white px-4 py-2 rounded-br-full transition"
              aria-label="Subscribe"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </motion.footer>
  );
}

export default Footer;
