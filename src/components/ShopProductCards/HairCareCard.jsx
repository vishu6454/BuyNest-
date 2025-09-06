// HairCareCard.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StarIcon, HeartIcon } from '@heroicons/react/24/solid';
import { useWishlist } from '../../context/WishlistContext';

const HairCareCard = ({ product }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);

  const handleWishlistClick = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.discountedPrice,
        originalPrice: product.originalPrice,
        image: product.mainImage,
        brand: product.brand,
        rating: product.rating,
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link to={`/haircare/product/${product.id}`}>
        <div className="relative aspect-[4/3] bg-white">
          <img
            src={product.mainImage}
            alt={product.name}
            className="w-full h-full object-contain p-4"
          />
          {product.newArrival && (
            <span className="absolute top-2 left-2 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              New
            </span>
          )}
          {product.discountPercentage > 0 && (
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {product.discountPercentage}% OFF
            </span>
          )}
        </div>
      </Link>

      <div className="px-4 pt-2 flex justify-end">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          onClick={handleWishlistClick}
        >
          <HeartIcon
            className={`h-5 w-5 ${isWishlisted ? 'text-red-500' : 'text-gray-600'}`}
          />
        </motion.button>
      </div>

      <div className="p-4">
        <Link to={`/haircare/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 hover:text-indigo-600 truncate">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.brand}</p>
        </Link>

        <div className="mt-2 flex items-center">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((rating) => (
              <StarIcon
                key={rating}
                className={`h-4 w-4 ${rating <= Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="ml-1 text-xs text-gray-500">({product.reviewsCount || 0})</span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            ₹{product.discountedPrice.toLocaleString()}
          </span>
          {product.discountedPrice < product.originalPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default HairCareCard;