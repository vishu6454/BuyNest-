import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Television",
    price: "₹50,000/-",
    description: "A high-quality television with stunning visuals and sound.",
    image:
      "https://plus.unsplash.com/premium_photo-1683141392308-aaa39d916686?w=600&auto=format&fit=crop&q=60",
    link: "/televisions",
  },
  {
    id: 2,
    name: "Speakers",
    price: "₹2,500/-",
    description: "Compact and powerful speakers with excellent sound quality.",
    image:
      "https://images.unsplash.com/photo-1665672629999-0994c3f052a9?w=600&auto=format&fit=crop&q=60",
    link: "/headphones",
  },
  {
    id: 3,
    name: "Computer",
    price: "₹30,000/-",
    description: "A reliable computer for work, study, and entertainment.",
    image:
      "https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?w=600&auto=format&fit=crop&q=60",
    link: "/laptops",
  },
  {
    id: 4,
    name: "Bed",
    price: "₹15,000/-",
    description: "A comfortable and stylish bed to enhance your bedroom.",
    image:
      "https://plus.unsplash.com/premium_photo-1671269705771-1ae9b3162118?w=600&auto=format&fit=crop&q=60",
    link: "/bedroom-furniture",
  },
  {
    id: 5,
    name: "Smartphone",
    price: "₹20,000/-",
    description:
      "Feature-packed smartphone with excellent camera and battery life.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60",
    link: "/mobiles",
  },
  {
    id: 6,
    name: "Headphones",
    price: "₹1,500/-",
    description: "High-quality headphones with noise-cancellation features.",
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60",
    link: "/headphones",
  },
  {
    id: 7,
    name: "Refrigerator",
    price: "₹25,000/-",
    description: "Energy-efficient refrigerator with ample storage space.",
    image:
      "https://images.unsplash.com/photo-1723661973650-febc670fcea2?w=600&auto=format&fit=crop&q=60",
    link: "/refrigerators",
  },
  {
    id: 8,
    name: "Washing Machine",
    price: "₹18,000/-",
    description: "Top-load washing machine with advanced cleaning technology.",
    image:
      "https://images.unsplash.com/photo-1729073375325-99978ce4d052?w=600&auto=format&fit=crop&q=60",
    link: "/washingmachines",
  },
  {
    id: 9,
    name: "Microwave",
    price: "₹8,000/-",
    description: "Compact microwave oven with multiple cooking modes.",
    image:
      "https://m.media-amazon.com/images/I/71uGl3BjeVL._AC_UY327_FMwebp_QL65_.jpg",
    link: "/kitchenappliances",
  },
  {
    id: 10,
    name: "Bag",
    price: "₹1,000/-",
    description: "Comfortable, waterproof bag made with silky fabric.",
    image:
      "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?w=600&auto=format&fit=crop&q=60",
    link: "/kids",
  },
];

const Deal = () => {
  return (
    <div className="w-full px-3 sm:px-5 md:px-6 lg:px-10 py-6 sm:py-8">
      {/* Heading */}
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-center text-emerald-900 mb-6 sm:mb-8 tracking-tight">
        ✨ Top 10 Deals You Can't Miss! ✨
      </h1>

      {/* Grid for Products */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col bg-gradient-to-br from-slate-100 to-gray-50 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
          >
            {/* Product Image */}
            <div className="relative h-32 sm:h-36 md:h-40 lg:h-44 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                <p className="text-white text-[10px] sm:text-xs">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-3 sm:p-4 flex flex-col justify-between flex-grow">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1 truncate">
                {product.name}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 mb-2">
                {product.description}
              </p>

              {/* Price and Button */}
              <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-200">
                <span className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                  {product.price}
                </span>
                <Link to={product.link} className="ml-1">
                  <button className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 text-xs sm:text-sm rounded-md bg-gradient-to-r from-cyan-200 to-blue-400 text-gray-900 font-semibold shadow hover:from-blue-600 hover:to-purple-800 hover:text-white transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">
                    Grab
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deal;
