import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TagIcon } from "@heroicons/react/24/solid";

const Banner = ({
  discount = "50%",
  offerText = "OFF",
  description = "on this brand",
  imageUrl = "https://images.unsplash.com/photo-1633793566189-8e9fe6f817fc?w=600&auto=format&fit=crop&q=60",
  link = "/skincare",
}) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-between 
      bg-gradient-to-r from-indigo-500 to-purple-600 text-white 
      p-5 sm:p-6 md:p-8 rounded-2xl shadow-2xl mb-6 w-full max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Left Offer Section */}
      <motion.div
        className="flex flex-col items-center md:items-start text-center md:text-left 
        space-y-2 w-full md:w-1/3"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <TagIcon className="h-8 w-8 text-yellow-300 animate-bounce" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">{discount}</h1>
        <h3 className="text-xl sm:text-2xl font-semibold">{offerText}</h3>
        <span className="text-sm sm:text-base">{description}</span>
      </motion.div>

      {/* Center Product Image */}
      <motion.div
        className="my-4 md:my-0 flex justify-center w-full md:w-1/3 px-3"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          to={link}
          className="block transform hover:scale-105 transition duration-300 
          w-full max-w-xs sm:max-w-sm md:max-w-md"
        >
          <img
            src={imageUrl}
            alt="Product"
            className="w-full h-52 sm:h-60 md:h-64 object-cover rounded-2xl shadow-lg"
            loading="lazy"
          />
        </Link>
      </motion.div>

      {/* Right Offer Section */}
      <motion.div
        className="flex flex-col items-center md:items-start text-center md:text-left 
        space-y-2 w-full md:w-1/3"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <TagIcon className="h-8 w-8 text-yellow-300 animate-bounce" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">{discount}</h1>
        <h3 className="text-xl sm:text-2xl font-semibold">{offerText}</h3>
        <span className="text-sm sm:text-base">{description}</span>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
