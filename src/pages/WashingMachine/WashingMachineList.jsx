// WashingMachineList.jsx
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import WashingMachineCard from "../../components/ShopProductCards/WashingMachineCard";
import FilterSidebar from "../../components/FilterSidebar";
import WashingMachinesData from "../../data/washingMachinesData";
import "../../style/Navbar.css";

const WashingMachineList = () => {
  const [products] = useState(WashingMachinesData);
  const [sortOption, setSortOption] = useState("featured");
  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    size: [],
    priceRange: [0, 100000],
    rating: 0,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [showSort, setShowSort] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchQuery) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filters.category.length > 0) {
      result = result.filter((product) =>
        filters.category.includes(product.category)
      );
    }

    if (filters.brand.length > 0) {
      result = result.filter((product) =>
        filters.brand.includes(product.brand)
      );
    }

    if (filters.size.length > 0) {
      result = result.filter((product) =>
        product.size.some((size) => filters.size.includes(size))
      );
    }

    result = result.filter(
      (product) =>
        product.discountedPrice >= filters.priceRange[0] &&
        product.discountedPrice <= filters.priceRange[1]
    );

    if (filters.rating > 0) {
      result = result.filter((product) => product.rating >= filters.rating);
    }

    switch (sortOption) {
      case "price-low":
        result.sort((a, b) => a.discountedPrice - b.discountedPrice);
        break;
      case "price-high":
        result.sort((a, b) => b.discountedPrice - a.discountedPrice);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => b.newArrival - a.newArrival);
        break;
      default:
        result.sort((a, b) => b.boughtInPastMonth - a.boughtInPastMonth);
    }

    return result;
  }, [products, filters, sortOption, searchQuery]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="hidden md:block md:w-1/4 sticky top-4 self-start z-10">
          <FilterSidebar
            products={products}
            filters={filters}
            onFilterChange={setFilters}
          />
        </aside>

        <main className="w-full md:w-3/4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-4">
            <h1 className="text-2xl font-bold text-gray-900">Washing Machines</h1>
            <div className="hidden sm:flex items-center">
              <label htmlFor="sort" className="mr-2 text-sm text-gray-600">
                Sort by:
              </label>
              <select
                id="sort"
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
                <option value="newest">New Arrivals</option>
              </select>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-6">
            Showing {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "product" : "products"}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <WashingMachineCard product={product} />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">
                  No products match your filters.
                </p>
                <button
                  onClick={() => {
                    setFilters({
                      category: [],
                      brand: [],
                      size: [],
                      priceRange: [0, 100000],
                      rating: 0,
                    });
                    setSearchQuery("");
                  }}
                  className="mt-4 text-indigo-600 hover:text-indigo-800"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </main>
      </div>

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] md:hidden">
        <div className="bg-white shadow-lg rounded-lg flex justify-around py-3 border">
          <button
            onClick={() => setShowFilters(true)}
            className="text-sm text-indigo-600 font-medium"
          >
            Filters
          </button>
          <button
            onClick={() => setShowSort(true)}
            className="text-sm text-indigo-600 font-medium"
          >
            Sort
          </button>
        </div>

        {showFilters && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-end">
            <div className="bg-white w-full max-h-[90vh] overflow-y-auto rounded-t-xl p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-gray-600 text-sm"
                >
                  Close
                </button>
              </div>
              <FilterSidebar
                products={products}
                filters={filters}
                onFilterChange={setFilters}
              />
            </div>
          </div>
        )}

        {showSort && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-end">
            <div className="bg-white w-full max-h-[50vh] overflow-y-auto rounded-t-xl p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Sort By</h2>
                <button
                  onClick={() => setShowSort(false)}
                  className="text-gray-600 text-sm"
                >
                  Close
                </button>
              </div>
              <select
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                value={sortOption}
                onChange={(e) => {
                  setSortOption(e.target.value);
                  setShowSort(false);
                }}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
                <option value="newest">New Arrivals</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default WashingMachineList;