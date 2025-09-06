// FitnessProduct.jsx
import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  StarIcon,
  ShoppingBagIcon,
  ArrowLeftIcon,
  HeartIcon as HeartSolid,
} from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import FitnessData from "../../data/fitnessData";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-hot-toast";

const FitnessProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const foundProduct = FitnessData.find(
      (item) => item.id === parseInt(id)
    );
    setProduct(foundProduct);
    if (foundProduct) {
      setSelectedSize(foundProduct.sizes[0]?.value || "");
    }
  }, [id]);

  if (!product) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Product not found</p>
        <Link
          to="/"
          className="mt-4 text-indigo-600 hover:text-indigo-800 inline-block"
        >
          Back to shopping
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.discountedPrice,
      image: product.mainImage,
      size: selectedSize,
      quantity,
    });
  };

  const handleCheckoutProcess = () => {
    if (!selectedSize) {
      toast.error("Please select a size before adding to cart.");
      return;
    }
    if (!currentUser) {
      navigate("/Sign", {
        state: { highlightLogin: true, from: `/product/${id}` },
      });
      return;
    }
    handleAddToCart();
    navigate("/cart");
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      toast.error("Please select a size before buying.");
      return;
    }
    if (!currentUser) {
      navigate("/Sign", {
        state: { highlightLogin: true, from: `/product/${id}` },
      });
      return;
    }
    navigate("/checkout", {
      state: {
        product: {
          id: product.id,
          name: product.name,
          image: product.mainImage,
          price: product.discountedPrice,
          size: selectedSize,
          quantity,
        },
      },
    });
  };

  const handleWishlistClick = () => {
    if (isInWishlist(product.id)) {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 py-8"
    >
      <Link
        to="/fitness"
        className="flex items-center text-gray-600 hover:text-indigo-600 mb-6"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-1" />
        Back to products
      </Link>

      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div>
          <div className="bg-white rounded-lg overflow-hidden mb-4 aspect-[4/3] flex justify-center items-center">
            <img
              src={
                selectedImage === 0
                  ? product.mainImage
                  : product.thumbnailImages[selectedImage - 1]
              }
              alt={product.name}
              className="max-h-[400px] object-contain"
            />
          </div>
          <div className="grid grid-cols-5 gap-2">
            {[product.mainImage, ...product.thumbnailImages].map((img, i) => (
              <button
                key={i}
                className={`border rounded-md overflow-hidden aspect-square ${
                  selectedImage === i
                    ? "border-indigo-600 ring-2 ring-indigo-500"
                    : "border-gray-200"
                }`}
                onClick={() => setSelectedImage(i)}
              >
                <img
                  src={img}
                  alt="thumb"
                  className="w-full h-full object-contain p-1"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 lg:mt-0">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600">{product.brand}</p>
              <p className="text-sm text-gray-500">
                Category: {product.category}
              </p>
            </div>
            <button onClick={handleWishlistClick}>
              {isInWishlist(product.id) ? (
                <HeartSolid className="h-6 w-6 text-red-500" />
              ) : (
                <HeartOutline className="h-6 w-6" />
              )}
            </button>
          </div>

          <div className="mt-4 flex items-center">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((n) => (
                <StarIcon
                  key={n}
                  className={`h-5 w-5 ${
                    n <= Math.round(product.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-500">
              {product.rating} ({product.reviewsCount} reviews)
            </span>
          </div>

          <div className="mt-6">
            <span className="text-3xl font-bold text-gray-900">
              ₹{product.discountedPrice.toLocaleString()}
            </span>
            {product.discountedPrice < product.originalPrice && (
              <>
                <span className="ml-3 text-xl line-through text-gray-500">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
                <span className="ml-2 text-sm font-medium text-green-600">
                  {product.discountPercentage}% off
                </span>
              </>
            )}
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900">Size</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size.value}
                  className={`px-4 py-2 border rounded-md text-sm font-medium ${
                    selectedSize === size.value
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedSize(size.value)}
                >
                  {size.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 space-y-1 text-sm text-gray-700">
            <p>
              <span className="font-medium">Material:</span>{" "}
              {product.materialComposition}
            </p>
            <p>
              <span className="font-medium">Color:</span> {product.color}
            </p>
            <p>
              <span className="font-medium">Variant:</span> {product.variant}
            </p>
            <p>
              <span className="font-medium">Bought in Past Month:</span>{" "}
              {product.boughtInPastMonth}
            </p>
            {product.newArrival && (
              <p className="text-green-600 font-medium">New Arrival</p>
            )}
          </div>

          <div className="mt-6 border-t pt-4 space-y-1 text-sm text-gray-700">
            <p>
              <span className="font-medium">Delivery by:</span>{" "}
              {product.deliveryDate}
            </p>
            <p>
              <span className="font-medium">Delivery Charge:</span>{" "}
              {product.deliveryCharge}
            </p>
            <p>
              <span className="font-medium">Seller:</span> {product.seller}
            </p>
            <p>
              <span className="font-medium">Open Box Eligible:</span>{" "}
              {product.openBoxEligible ? "Yes" : "No"}
            </p>
            <p>
              <span className="font-medium">EMI starts at:</span> ₹
              {product.emiStartsAt}
            </p>
            <p>
              <span className="font-medium">Protect+ Fee:</span> ₹
              {product.protectPromiseFee}
            </p>
          </div>

          <div className="mt-6 bg-gray-50 border rounded-md p-4">
            <h3 className="text-sm font-semibold mb-2">Available Offers:</h3>
            <ul className="space-y-1 text-sm text-gray-800">
              {product.offers.map((offer, index) => (
                <li key={index}>
                  <span className="font-medium text-indigo-600">
                    {offer.type}:
                  </span>{" "}
                  {offer.description}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-indigo-600 text-white py-3 px-8 rounded-md font-medium"
              onClick={handleCheckoutProcess}
            >
              <ShoppingBagIcon className="h-5 w-5 mr-2 inline" />
              Add to Cart
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-green-600 text-white py-3 px-8 rounded-md font-medium"
              onClick={handleBuyNow}
            >
              Buy Now
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FitnessProduct;