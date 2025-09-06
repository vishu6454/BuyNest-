import { useState } from "react";
import { Link } from "react-router-dom";

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="flex items-start sm:items-center">
        {/* Product Image */}
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 rounded-md object-cover"
        />

        {/* Product Details */}
        <div className="ml-4 flex-1">
          <div className="flex justify-between">
            {/* Name, Brand, and Size */}
            <div>
              <h3 className="text-base font-medium text-gray-900">
                <Link to={`/product/${item.id}`} className="hover:text-indigo-600">
                  {item.name}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{item.brand}</p>
              <p className="mt-1 text-sm text-gray-500">Size: {item.size}</p>
            </div>

            {/* Remove Button */}
            <button
              onClick={onRemove}
              className="text-gray-400 hover:text-gray-500"
            >
              Remove
            </button>
          </div>

          {/* Price and Quantity Controls */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">
              ₹{item.price.toLocaleString()}
            </p>
            <div className="flex items-center">
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                className="p-1 border border-gray-300 rounded-l-md bg-gray-50 text-gray-600 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-900">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantityChange(quantity + 1)}
                className="p-1 border border-gray-300 rounded-r-md bg-gray-50 text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
