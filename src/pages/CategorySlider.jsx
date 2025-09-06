import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { forwardRef, useState } from "react";
import {
  FaTshirt,
  FaMobileAlt,
  FaTv,
  FaHome,
  FaAppleAlt,
  FaCouch,
  FaRunning,
  FaGamepad,
  FaHeart,
  FaRobot,
  FaLeaf,
} from "react-icons/fa";

// Category Data
const categories = [
  { name: "Fashion", icon: <FaTshirt />, Link: "/shop", color: "#E57373" },
  { name: "Appliances", icon: <FaTv />, Link: "/shop", color: "#81D4FA" },
  { name: "Mobiles", icon: <FaMobileAlt />, Link: "/shop", color: "#FFD54F" },
  { name: "Electronics", icon: <FaRobot />, Link: "/shop", color: "#BA68C8" },
  { name: "Smart Gadgets", icon: <FaGamepad />, Link: "/shop", color: "#4DB6AC" },
  { name: "Home", icon: <FaHome />, Link: "/shop", color: "#A1887F" },
  { name: "Beauty & Personal Care", icon: <FaHeart />, Link: "/shop", color: "#F48FB1" },
  { name: "Toys", icon: <FaAppleAlt />, Link: "/shop", color: "#FF8A65" },
  { name: "Food & Healthcare", icon: <FaLeaf />, Link: "/shop", color: "#AED581" },
  { name: "Sport Hub", icon: <FaRunning />, Link: "/shop", color: "#64B5F6" },
  { name: "Furniture", icon: <FaCouch />, Link: "/shop", color: "#DCE775" },
];

const cardsPerPage = 6; // fixed for desktop view

export default function CategorySlider() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const totalPages = Math.ceil(categories.length / cardsPerPage);
  const currentPage = wrap(0, totalPages, page);

  const startIndex = currentPage * cardsPerPage;
  const visibleCategories = categories.slice(startIndex, startIndex + cardsPerPage);

  const paginate = (newDirection) => {
    setPage((prev) => prev + newDirection);
    setDirection(newDirection);
  };

  return (
    <motion.div
      className="w-full px-4 py-6 flex flex-col md:flex-row items-center justify-center gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Previous Button */}
      {totalPages > 1 && (
        <motion.button
          aria-label="Previous"
          onClick={() => paginate(-1)}
          className="hidden md:flex w-10 h-10 rounded-full items-center justify-center bg-gray-200 hover:bg-gray-300 shadow-md transition-colors duration-200 ease-in-out"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
        >
          <ArrowLeft />
        </motion.button>
      )}

      {/* Category Cards */}
      <div className="w-full overflow-hidden">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <AnimatePresence initial={false} mode="popLayout">
            {visibleCategories.map((item) => (
              <motion.a
                key={item.name}
                href={item.Link}
                className="flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Slide name={item.name} color={item.color} icon={item.icon} />
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Next Button */}
      {totalPages > 1 && (
        <motion.button
          aria-label="Next"
          onClick={() => paginate(1)}
          className="hidden md:flex w-10 h-10 rounded-full items-center justify-center bg-gray-200 hover:bg-gray-300 shadow-md transition-colors duration-200 ease-in-out"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
        >
          <ArrowRight />
        </motion.button>
      )}

      {/* Pagination Dots (Mobile Only) */}
      <div className="flex md:hidden justify-center mt-4 gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentPage === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => {
              setPage(index);
              setDirection(index > currentPage ? 1 : -1);
            }}
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </div>
    </motion.div>
  );
}

const Slide = forwardRef(({ name, color, icon }, ref) => {
  return (
    <motion.div
      ref={ref}
      className="w-[100px] sm:w-[120px] md:w-[140px] h-[120px] sm:h-[140px] md:h-[160px] 
      flex flex-col justify-center items-center rounded-xl shadow-lg text-white cursor-pointer relative overflow-hidden"
      style={{ backgroundColor: color }}
      whileHover="hover"
    >
      {/* Icon */}
      <motion.div
        className="text-2xl sm:text-3xl md:text-4xl z-10"
        variants={{
          rest: { y: 0, rotate: 0 },
          hover: { rotate: [0, 10, -10, 0], transition: { duration: 0.6 } },
        }}
        initial="rest"
        animate="rest"
      >
        {icon}
      </motion.div>

      {/* Name */}
      <motion.span
        className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center text-white z-10"
        variants={{
          rest: { y: 0 },
          hover: { y: -8, transition: { duration: 0.3 } },
        }}
        initial="rest"
        animate="rest"
      >
        {name}
      </motion.span>

      {/* Hover Overlay */}
      <motion.div
        className="absolute inset-0 bg-white bg-opacity-20 flex items-center justify-center"
        variants={{
          rest: { y: "100%" },
          hover: { y: "0%", transition: { duration: 0.3 } },
        }}
        initial="rest"
        animate="rest"
      >
        <span className="text-white text-sm sm:text-base md:text-lg font-bold">
          Shop Now
        </span>
      </motion.div>
    </motion.div>
  );
});

/** Navigation Arrows */
function ArrowLeft() {
  return (
    <svg {...iconsProps}>
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg {...iconsProps}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

const iconsProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
