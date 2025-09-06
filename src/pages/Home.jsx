import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "L size sofa with cushions",
    description:
      "Experience ultimate comfort with our L size sofa, designed with plush cushions and premium fabric for a luxurious feel.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80",
    link: "/bedroom-furniture",
  },
  {
    id: 2,
    title: "Mobile phone",
    description:
      "Stay connected with this sleek and powerful mobile phone, offering cutting-edge features and all-day battery life.",
    image:
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&auto=format&fit=crop&q=80",
    link: "/mobiles",
  },
  {
    id: 3,
    title: "T-Shirt",
    description:
      "A casual classic, this t-shirt is made from breathable cotton, perfect for everyday wear and comfort.",
    image:
      "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?w=800&auto=format&fit=crop&q=80",
    link: "/productlisting",
  },
  {
    id: 4,
    title: "Women T-Shirt",
    description:
      "Style meets comfort with our women’s t-shirt, tailored with soft fabric and a flattering fit for everyday confidence.",
    image:
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=800&auto=format&fit=crop&q=80",
    link: "/women",
  },
  {
    id: 5,
    title: "Nothing Phone",
    description:
      "Discover the future with Nothing Phone – transparent design, pure Android experience, and smart innovation.",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=900&auto=format&fit=crop&q=80",
    link: "/mobiles",
  },
  {
    id: 6,
    title: "Laptop",
    description:
      "Boost productivity with this sleek laptop featuring high-speed performance, crystal-clear display, and long battery life.",
    image:
      "https://plus.unsplash.com/premium_photo-1670274606895-f2dc713f8a90?w=900&auto=format&fit=crop&q=80",
    link: "/laptops",
  },
];

// Animation Variants
const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export default function Home() {
  const [[index, direction], setIndex] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const paginate = (newDirection) => {
    setIndex(([prev]) => {
      const newIndex = (prev + newDirection + products.length) % products.length;
      return [newIndex, newDirection];
    });
  };

  // Auto-slide logic
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 7000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const product = products[index];

  return (
    <div
      className="relative w-full max-w-[1680px] mx-auto px-4 py-8 flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left and Right Click Zones */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1/4 sm:w-1/5 z-30 cursor-pointer"
        onClick={() => paginate(-1)}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-1/4 sm:w-1/5 z-30 cursor-pointer"
        onClick={() => paginate(1)}
      />

      {/* Navigation Arrows */}
      <button
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 bg-white/60 dark:bg-gray-600/70 backdrop-blur p-2 rounded-full z-40 shadow hover:bg-gray-300 dark:hover:bg-gray-500 transition"
        onClick={() => paginate(-1)}
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 bg-white/60 dark:bg-gray-600/70 backdrop-blur p-2 rounded-full z-40 shadow hover:bg-gray-300 dark:hover:bg-gray-500 transition"
        onClick={() => paginate(1)}
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>

      {/* Main Content */}
      <div className="w-full overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={product.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center justify-center px-2 sm:px-4"
          >
            {/* Product Image */}
            <div className="w-full md:w-[65%] h-[280px] sm:h-[380px] md:h-[520px] overflow-hidden rounded-2xl">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              className="w-full md:w-[35%] max-w-sm p-4 sm:p-6 bg-gradient-to-br from-blue-400 to-cyan-400 dark:from-slate-600 dark:to-blue-500 border rounded-xl shadow-lg space-y-3 sm:space-y-4"
            >
              <motion.h2 className="text-base sm:text-xl md:text-3xl font-extrabold text-gray-700 dark:text-white text-center md:text-left">
                {product.title}
              </motion.h2>
              <motion.p className="text-xs sm:text-sm md:text-lg text-gray-700 dark:text-gray-300 text-center md:text-left">
                {product.description}
              </motion.p>

              {/* Correct Navigation Using React Router */}
              <Link
                to={product.link}
                className="inline-flex items-center justify-center w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-cyan-200 to-blue-400 dark:from-blue-700 dark:to-purple-900 text-gray-700 dark:text-gray-100 rounded-lg hover:from-blue-700 hover:to-purple-800 transition-all duration-300 text-sm sm:text-base md:text-lg font-semibold shadow-md"
              >
                Visit Product
                <ArrowRightIcon className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 flex gap-2 justify-center w-full z-40">
        {products.map((_, i) => (
          <button
            key={i}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              i === index
                ? "bg-blue-500 dark:bg-blue-400 scale-125 shadow-lg"
                : "bg-gray-300 dark:bg-gray-500 hover:bg-gray-400"
            }`}
            onClick={() => setIndex([i, i > index ? 1 : -1])}
          />
        ))}
      </div>
    </div>
  );
}
