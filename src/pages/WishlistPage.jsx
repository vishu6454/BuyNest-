import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon, HeartIcon } from '@heroicons/react/24/solid';
import { useWishlist } from '../context/WishlistContext';
import EmptyState from '../components/EmptyState';
import { useState } from 'react';

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const [sortOption, setSortOption] = useState('default');
  const [viewMode, setViewMode] = useState('grid');

  const sortedWishlist = [...wishlist].sort((a, b) => {
    if (sortOption === 'priceLowHigh') return a.price - b.price;
    if (sortOption === 'priceHighLow') return b.price - a.price;
    return 0;
  });

  if (!wishlist || wishlist.length === 0) {
    return (
      <EmptyState
        title="Your wishlist is empty"
        description="Start adding items you love to your wishlist."
        buttonText="Browse Products"
        buttonLink="/"
      />
    );
  }

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <motion.h1
          className="text-3xl font-extrabold text-gray-800"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          My Wishlist <span className="text-indigo-600">({wishlist.length})</span>
        </motion.h1>
        <Link
          to="/"
          className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
        >
          ← Continue Shopping
        </Link>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 rounded-md border border-gray-300 focus:ring focus:ring-indigo-300 text-sm"
        >
          <option value="default">Sort by: Default</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
        </select>

        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-3 py-1 rounded-md text-sm font-medium ${viewMode === 'grid' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            Grid View
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-3 py-1 rounded-md text-sm font-medium ${viewMode === 'list' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            List View
          </button>
        </div>
      </div>

      {/* Wishlist Items */}
      <motion.div
        layout
        className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'} gap-6`}
      >
        <AnimatePresence>
          {sortedWishlist.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              <Link to={`/product/${product.id}`}>
                <motion.div className="relative h-60">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {product.originalPrice && product.price < product.originalPrice && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-0.5 rounded">
                      {Math.round(
                        ((product.originalPrice - product.price) / product.originalPrice) * 100
                      )}% OFF
                    </div>
                  )}
                </motion.div>
              </Link>

              <div className="p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-lg font-bold text-gray-900 hover:text-indigo-600 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500">{product.brand}</p>
                  </Link>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => removeFromWishlist(product.id)}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-red-50 hover:bg-red-100"
                    aria-label="Remove from wishlist"
                  >
                    <HeartIcon className="h-5 w-5 text-red-500" />
                  </motion.button>
                </div>

                {/* Rating */}
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.round(product.rating)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Pricing */}
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-gray-900">
                    ₹{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && product.price < product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default WishlistPage;
