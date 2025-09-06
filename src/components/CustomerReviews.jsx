import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import {
  HandThumbUpIcon,
  HandThumbDownIcon,
  EllipsisVerticalIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

const customerReviewsData = {
  averageRating: 4.1,
  totalRatings: 7551,
  totalReviews: 357,
  feelingTags: [
    "Fabric Quality", "Colour", "Style", "Comfort",
    "True to Specs", "Stitching Quality", "Value for Money"
  ],
  customerImages: [
    "https://placehold.co/100x100/A78BFA/FFFFFF?text=Img1",
    "https://placehold.co/100x100/8B5CF6/FFFFFF?text=Img2",
    "https://placehold.co/100x100/6D28D9/FFFFFF?text=Img3",
    "https://placehold.co/100x100/5B21B6/FFFFFF?text=Img4",
  ],
  reviews: [
    {
      id: 'r1',
      rating: 4,
      text: "Very nice kurti i loved it ❤️💕🥰",
      name: "Itz Sona",
      timeAgo: "11 months ago",
      isCertifiedBuyer: true,
      location: "Bhagalpur",
      likes: 69,
      dislikes: 19,
      images: [],
    },
    {
      id: 'r2',
      rating: 5,
      text: "Fabric is so soft and comfortable you must buy this kurti set",
      name: "Varsha Chetry",
      timeAgo: "10 months ago",
      isCertifiedBuyer: true,
      location: "Bengaluru",
      likes: 53,
      dislikes: 13,
      images: [],
    },
    {
      id: 'r3',
      rating: 5,
      text: "Good quality 👍",
      name: "Nikita Rai",
      timeAgo: "11 months ago",
      isCertifiedBuyer: true,
      location: "Nashik",
      likes: 16,
      dislikes: 3,
      images: [
        "https://placehold.co/100x100/3B82F6/FFFFFF?text=ImgA",
        "https://placehold.co/100x100/2563EB/FFFFFF?text=ImgB",
      ],
    },
  ],
};

function CustomerReviews() {
  const [selectedFeeling, setSelectedFeeling] = useState(null);
  const [selectedSort, setSelectedSort] = useState("Newest");
  const [selectedRating, setSelectedRating] = useState(null);

  const renderStars = (rating) => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`h-4 w-4 ${i < rating ? 'text-green-500' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );

  const filteredReviews = customerReviewsData.reviews
    .filter(r => selectedRating ? r.rating === selectedRating : true)
    .sort((a, b) => {
      if (selectedSort === "Highest Rated") return b.rating - a.rating;
      if (selectedSort === "Lowest Rated") return a.rating - b.rating;
      return 0; // Newest - default
    });

  return (
    <div className="min-h-screen  py-8 px-8 font-inter flex justify-end">
      <div className="w-full lg:w-1/2 border-x-gray-400 rounded-xl shadow-lg p-6 sm:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 border-b pb-4">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Ratings & Reviews</h1>
            <div className="flex items-center space-x-3">
              <div className="flex items-center bg-green-500 text-white px-3 py-1 rounded-md text-base font-semibold">
                {customerReviewsData.averageRating}
                <StarIcon className="h-4 w-4 ml-1" />
              </div>
              <p className="text-sm text-gray-600">
                {customerReviewsData.totalRatings.toLocaleString()} ratings • {customerReviewsData.totalReviews} reviews
              </p>
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-md font-semibold shadow-sm">
            Rate Product
          </button>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {customerReviewsData.feelingTags.map((tag) => (
              <button
                key={tag}
                className={`px-4 py-1.5 rounded-full text-sm ${
                  selectedFeeling === tag
                    ? 'bg-blue-100 text-blue-700 border border-blue-500'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedFeeling(tag === selectedFeeling ? null : tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          <select
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
            className="border text-sm rounded-md px-3 py-1"
          >
            <option>Newest</option>
            <option>Highest Rated</option>
            <option>Lowest Rated</option>
          </select>
        </div>

        {/* Uploaded Images */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Customer Images</h3>
          <div className="flex space-x-2">
            {customerReviewsData.customerImages.map((image, i) => (
              <div key={i} className="relative w-20 h-20 rounded-md overflow-hidden border">
                <img src={image} alt={`Customer ${i}`} className="w-full h-full object-cover" />
                {i === customerReviewsData.customerImages.length - 1 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-semibold text-sm">
                    +{customerReviewsData.totalReviews - customerReviewsData.customerImages.length}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Rating Filter */}
        <div className="flex gap-2 mb-6">
          {[5, 4, 3, 2, 1].map(r => (
            <button
              key={r}
              className={`border px-3 py-1.5 text-sm rounded-full ${
                selectedRating === r
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedRating(selectedRating === r ? null : r)}
            >
              {r}★
            </button>
          ))}
        </div>

        {/* Reviews */}
        <div className="space-y-6">
          {filteredReviews.map((review) => (
            <div key={review.id} className="border-b pb-6">
              <div className="flex items-center mb-2">
                <div className="flex items-center bg-green-500 text-white px-2 py-0.5 rounded-md text-sm font-semibold mr-2">
                  {review.rating}
                  <StarIcon className="h-3 w-3 ml-1" />
                </div>
                <p className="text-gray-800 font-medium text-base">{review.text}</p>
              </div>

              {review.images.length > 0 && (
                <div className="flex space-x-2 mt-2 mb-3">
                  {review.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Review image ${idx + 1}`}
                      className="w-16 h-16 rounded-md object-cover border"
                    />
                  ))}
                </div>
              )}

              <div className="flex items-center text-xs text-gray-500 mb-2">
                <span className="font-semibold">{review.name}</span>
                <span className="mx-1">•</span>
                <span>{review.timeAgo}</span>
                {review.isCertifiedBuyer && (
                  <>
                    <span className="mx-1">•</span>
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-1" />
                    <span>Certified Buyer</span>
                  </>
                )}
                <span className="mx-1">•</span>
                <span>{review.location}</span>
              </div>

              <div className="flex items-center text-sm text-gray-600">
                <button className="flex items-center hover:text-blue-600">
                  <HandThumbUpIcon className="h-5 w-5 mr-1" />
                  {review.likes}
                </button>
                <span className="mx-4">|</span>
                <button className="flex items-center hover:text-red-600">
                  <HandThumbDownIcon className="h-5 w-5 mr-1" />
                  {review.dislikes}
                </button>
                <button className="ml-auto p-1 rounded-full hover:bg-gray-100">
                  <EllipsisVerticalIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* All Reviews Link */}
        <div className="text-center mt-8">
          <a href="#" className="text-blue-600 hover:underline text-base font-semibold">
            View all {customerReviewsData.totalReviews} reviews
          </a>
        </div>
      </div>
    </div>
  );
}

export default CustomerReviews;
