// -------------------- Imports --------------------
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import logo from "../Assest/Logo/2.png";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { DarkModeContext } from "../context/DarkModeContext";

import {
  MoonIcon,
  SunIcon,
  ShoppingCartIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

// -------------------- Example Product Data --------------------
const productData = [
  { id: 1, name: "iPhone 15 Pro", category: "Mobiles" },
  { id: 2, name: "Samsung Galaxy S23", category: "Mobiles" },
  { id: 3, name: "Sony WH-1000XM5 Headphones", category: "Audio" },
  { id: 4, name: "OnePlus Nord CE 3", category: "Mobiles" },
  { id: 5, name: "MacBook Air M2", category: "Laptops" },
];

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const { currentUser, logout } = useContext(AuthContext);
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const navigate = useNavigate();

  // Detect scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  // Search logic
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts([]);
      return;
    }

    const results = productData.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredProducts(results);
  }, [searchQuery]);

  // Handle search selection
  const handleSearchSelection = (productName) => {
    setSearchQuery("");
    setFilteredProducts([]);
    navigate(`/shop?search=${encodeURIComponent(productName)}`);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (searchQuery.trim() !== "") {
        handleSearchSelection(searchQuery);
      }
    }
  };

  const handleCartClick = (e) => {
    if (!currentUser) {
      e.preventDefault();
      navigate("/Sign", { state: { highlightLogin: true, from: "/cart" } });
    }
  };

  return (
    <nav
      className={`navbar fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <motion.img
            src={logo}
            alt="BuyNest Logo"
            className="h-10 w-auto rounded-full object-cover"
            whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
            transition={{ duration: 0.6 }}
          />
          <span className="text-2xl font-bold dark:text-gray-100">BuyNest</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-lg text-gray-700 dark:text-gray-200 hover:text-cyan-600"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-lg text-gray-700 dark:text-gray-200 hover:text-cyan-600"
          >
            Shop
          </Link>

          {/* Search Bar */}
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-gray-300 dark:border-gray-600 rounded-full px-5 py-3 transition-all duration-300 focus-within:ring-2 focus-within:ring-cyan-400 shadow-sm"
            >
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 dark:text-gray-300 mr-2" />
              <input
                id="search"
                name="search"
                className="bg-transparent placeholder:text-gray-400 dark:placeholder:text-gray-300 focus:outline-none w-64 text-base text-gray-700 dark:text-gray-200"
                placeholder="Search for products, brands..."
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearchSubmit}
              />
            </motion.div>

            {/* Dropdown Suggestions */}
            <AnimatePresence>
              {searchQuery && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 w-full mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-xl z-50 max-h-60 overflow-auto"
                >
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <li
                        key={product.id}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
                        onClick={() => handleSearchSelection(product.name)}
                      >
                        {product.name}
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-2 text-gray-500 dark:text-gray-400">
                      No products found
                    </li>
                  )}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop Profile, Cart, Dark Mode */}
        <div className="hidden md:flex items-center gap-5">
          {/* Profile Dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1 focus:outline-none"
              >
                <UserIcon className="h-7 w-7 text-gray-700 dark:text-gray-300" />
                <ChevronDownIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </motion.div>
            </MenuButton>
            <MenuItems
              as={motion.div}
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute right-0 mt-3 w-64 origin-top-right rounded-2xl bg-white dark:bg-gray-800 backdrop-blur-md shadow-xl ring-1 ring-black/10 p-2 z-50"
            >
              {!currentUser ? (
                <MenuItem>
                  {({ active }) => (
                    <Link
                      to="/Sign"
                      className={`block px-4 py-3 text-base rounded-lg ${
                        active
                          ? "bg-cyan-500 text-white"
                          : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      Sign Up / Login
                    </Link>
                  )}
                </MenuItem>
              ) : (
                <>
                  <MenuItem>
                    {({ active }) => (
                      <Link
                        to="/account"
                        className={`block px-4 py-3 text-base rounded-lg ${
                          active
                            ? "bg-cyan-500 text-white"
                            : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                      >
                        My Account
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <Link
                        to="/Orders"
                        className={`block px-4 py-3 text-base rounded-lg ${
                          active
                            ? "bg-cyan-500 text-white"
                            : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                      >
                        My Orders
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <button
                        onClick={logout}
                        className={`w-full text-left px-4 py-3 text-base rounded-lg ${
                          active
                            ? "bg-red-500 text-white"
                            : "text-red-600 hover:bg-red-100 dark:hover:bg-red-600 dark:hover:text-white"
                        }`}
                      >
                        Sign Out
                      </button>
                    )}
                  </MenuItem>
                </>
              )}
            </MenuItems>
          </Menu>

          {/* Cart */}
          <Link to="/cart" onClick={handleCartClick} className="relative">
            <ShoppingCartIcon className="h-7 w-7 text-gray-700 dark:text-gray-200 hover:text-cyan-600" />
            {itemCount > 0 && (
              <motion.span
                className="absolute -top-3 -right-3 h-6 w-6 flex items-center justify-center bg-red-500 text-white rounded-full text-sm font-bold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                {itemCount}
              </motion.span>
            )}
          </Link>

          {/* Dark Mode Toggle */}
          <motion.button
            onClick={toggleDarkMode}
            whileHover={{ rotate: 90, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`p-3 rounded-full shadow-lg transition-colors ${
              isDarkMode ? "bg-gray-50 text-gray-700" : "bg-gray-700 text-gray-50"
            }`}
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg rounded-b-2xl z-40"
          >
            <div className="flex flex-col p-4 space-y-4">
              <Link
                to="/"
                onClick={toggleMobileMenu}
                className="text-lg text-gray-700 dark:text-gray-200 hover:text-cyan-600"
              >
                Home
              </Link>
              <Link
                to="/shop"
                onClick={toggleMobileMenu}
                className="text-lg text-gray-700 dark:text-gray-200 hover:text-cyan-600"
              >
                Shop
              </Link>

              {/* Cart for Mobile */}
              <Link
                to="/cart"
                onClick={(e) => {
                  handleCartClick(e);
                  toggleMobileMenu();
                }}
                className="flex items-center gap-2 text-lg text-gray-700 dark:text-gray-200 hover:text-cyan-600"
              >
                <ShoppingCartIcon className="h-6 w-6" />
                Cart ({itemCount})
              </Link>

              {/* Dark Mode for Mobile */}
              <button
                onClick={toggleDarkMode}
                className="flex items-center gap-2 text-lg text-gray-700 dark:text-gray-200 hover:text-cyan-600"
              >
                {isDarkMode ? (
                  <>
                    <SunIcon className="h-6 w-6" /> Light Mode
                  </>
                ) : (
                  <>
                    <MoonIcon className="h-6 w-6" /> Dark Mode
                  </>
                )}
              </button>

              {/* Profile Links */}
              {!currentUser ? (
                <Link
                  to="/Sign"
                  onClick={toggleMobileMenu}
                  className="text-lg text-gray-700 dark:text-gray-200 hover:text-cyan-600"
                >
                  Sign Up / Login
                </Link>
              ) : (
                <>
                  <Link
                    to="/account"
                    onClick={toggleMobileMenu}
                    className="text-lg text-gray-700 dark:text-gray-200 hover:text-cyan-600"
                  >
                    My Account
                  </Link>
                  <Link
                    to="/Orders"
                    onClick={toggleMobileMenu}
                    className="text-lg text-gray-700 dark:text-gray-200 hover:text-cyan-600"
                  >
                    My Orders
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      toggleMobileMenu();
                    }}
                    className="text-lg text-red-600 hover:text-red-800"
                  >
                    Sign Out
                  </button>
                </>
              )}
            </div>

            {/* Mobile Search Bar at the Bottom */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-full px-4 py-2 shadow-sm"
              >
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 dark:text-gray-300 mr-2" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearchSubmit}
                  placeholder="Search for products..."
                  className="bg-transparent placeholder:text-gray-400 dark:placeholder:text-gray-300 focus:outline-none w-full text-gray-700 dark:text-gray-200"
                />
              </motion.div>

              {/* Suggestions */}
              <AnimatePresence>
                {searchQuery && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg max-h-60 overflow-auto"
                  >
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map((product) => (
                        <li
                          key={product.id}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
                          onClick={() => {
                            handleSearchSelection(product.name);
                            toggleMobileMenu();
                          }}
                        >
                          {product.name}
                        </li>
                      ))
                    ) : (
                      <li className="px-4 py-2 text-gray-500 dark:text-gray-400">
                        No products found
                      </li>
                    )}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
