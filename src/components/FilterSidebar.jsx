import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const FilterSidebar = ({ products, filters, onFilterChange }) => {
  const [openCategory, setOpenCategory] = useState(true);
  const [openBrand, setOpenBrand] = useState(true);
  const [openSize, setOpenSize] = useState(true);
  const [openPrice, setOpenPrice] = useState(true);
  const [openRating, setOpenRating] = useState(true);

  const categories = [...new Set(products.map((product) => product.category))];
  const brands = [...new Set(products.map((product) => product.brand))];
  const allSizes = products.flatMap((product) => product.size);
  const sizes = [...new Set(allSizes)];

  const handleCategoryChange = (category) => {
    const newCategories = filters.category.includes(category)
      ? filters.category.filter((c) => c !== category)
      : [...filters.category, category];

    onFilterChange({ ...filters, category: newCategories });
  };

  const handleBrandChange = (brand) => {
    const newBrands = filters.brand.includes(brand)
      ? filters.brand.filter((b) => b !== brand)
      : [...filters.brand, brand];

    onFilterChange({ ...filters, brand: newBrands });
  };

  const handleSizeChange = (size) => {
    const newSizes = filters.size.includes(size)
      ? filters.size.filter((s) => s !== size)
      : [...filters.size, size];

    onFilterChange({ ...filters, size: newSizes });
  };

  const handlePriceChange = (min, max) => {
    onFilterChange({ ...filters, priceRange: [min, max] });
  };

  const handleRatingChange = (rating) => {
    onFilterChange({
      ...filters,
      rating: rating === filters.rating ? 0 : rating,
    });
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200 w-full sm:w-64">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Filters</h2>

      {/* Category Filter */}
      <div className="mb-6 border-b pb-4">
        <button
          className="flex justify-between items-center w-full text-left font-semibold text-gray-800 hover:text-indigo-600"
          onClick={() => setOpenCategory(!openCategory)}
        >
          <span>Category</span>
          {openCategory ? (
            <ChevronUpIcon className="h-5 w-5" />
          ) : (
            <ChevronDownIcon className="h-5 w-5" />
          )}
        </button>

        {openCategory && (
          <div className="mt-3 space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id={`category-${category}`}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    checked={filters.category.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  <label
                    htmlFor={`category-${category}`}
                    className="ml-2 text-sm text-gray-700 cursor-pointer"
                  >
                    {category}
                  </label>
                </div>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                  {products.filter((p) => p.category === category).length}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Brand Filter */}
      <div className="mb-6 border-b pb-4">
        <button
          className="flex justify-between items-center w-full text-left font-medium text-gray-700"
          onClick={() => setOpenBrand(!openBrand)}
        >
          <span>Brand</span>
          {openBrand ? (
            <ChevronUpIcon className="h-5 w-5" />
          ) : (
            <ChevronDownIcon className="h-5 w-5" />
          )}
        </button>

        {openBrand && (
          <div className="mt-3 space-y-2">
            {brands.map((brand) => (
              <div key={brand} className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id={`brand-${brand}`}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    checked={filters.brand.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                  />
                  <label
                    htmlFor={`brand-${brand}`}
                    className="ml-2 text-sm text-gray-700"
                  >
                    {brand}
                  </label>
                </div>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                  {products.filter((p) => p.brand === brand).length}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Size Filter */}
      <div className="mb-6 border-b pb-4">
        <button
          className="flex justify-between items-center w-full text-left font-medium text-gray-700"
          onClick={() => setOpenSize(!openSize)}
        >
          <span>Size</span>
          {openSize ? (
            <ChevronUpIcon className="h-5 w-5" />
          ) : (
            <ChevronDownIcon className="h-5 w-5" />
          )}
        </button>

        {openSize && (
          <div className="mt-3 grid grid-cols-3 gap-2">
            {sizes.map((size) => (
              <div key={size} className="flex items-center col-span-1">
                <input
                  id={`size-${size}`}
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  checked={filters.size.includes(size)}
                  onChange={() => handleSizeChange(size)}
                />
                <label
                  htmlFor={`size-${size}`}
                  className="ml-1 text-sm text-gray-700"
                >
                  {size}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Price Range Filter */}
      <div className="mb-6 border-b pb-4">
        <button
          className="flex justify-between items-center w-full text-left font-medium text-gray-700"
          onClick={() => setOpenPrice(!openPrice)}
        >
          <span>Price Range</span>
          {openPrice ? (
            <ChevronUpIcon className="h-5 w-5" />
          ) : (
            <ChevronDownIcon className="h-5 w-5" />
          )}
        </button>

        {openPrice && (
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>₹{filters.priceRange[0]}</span>
              <span>₹{filters.priceRange[1]}</span>
            </div>
            <input
              type="range"
              min="0"
              max="10000"
              step="500"
              value={filters.priceRange[0]}
              onChange={(e) =>
                handlePriceChange(Number(e.target.value), filters.priceRange[1])
              }
              className="w-full mb-2"
            />
            <input
              type="range"
              min="0"
              max="10000"
              step="500"
              value={filters.priceRange[1]}
              onChange={(e) =>
                handlePriceChange(filters.priceRange[0], Number(e.target.value))
              }
              className="w-full"
            />
            <div className="flex justify-center mt-2">
              <button
                onClick={() => handlePriceChange(0, 10000)}
                className="text-xs text-indigo-600 hover:text-indigo-800"
              >
                Reset Price
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Rating Filter */}
      <div className="mb-4">
        <button
          className="flex justify-between items-center w-full text-left font-medium text-gray-700"
          onClick={() => setOpenRating(!openRating)}
        >
          <span>Customer Rating</span>
          {openRating ? (
            <ChevronUpIcon className="h-5 w-5" />
          ) : (
            <ChevronDownIcon className="h-5 w-5" />
          )}
        </button>

        {openRating && (
          <div className="mt-3 space-y-2">
            {[4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center">
                <input
                  id={`rating-${rating}`}
                  type="radio"
                  name="rating"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  checked={filters.rating === rating}
                  onChange={() => handleRatingChange(rating)}
                />
                <label
                  htmlFor={`rating-${rating}`}
                  className="ml-2 text-sm text-gray-700"
                >
                  {rating} Stars & Up
                </label>
              </div>
            ))}
            {filters.rating > 0 && (
              <div className="flex justify-center mt-2">
                <button
                  onClick={() => handleRatingChange(0)}
                  className="text-xs text-indigo-600 hover:text-indigo-800"
                >
                  Clear Rating
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;
