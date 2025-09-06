// import { StarIcon } from '@heroicons/react/24/solid';

// const ReviewCard = ({ rating, name, date, comment }) => {
//   return (
//     <div className="border-b border-gray-200 pb-6">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center">
//           <div className="flex">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <StarIcon
//                 key={star}
//                 className={`h-5 w-5 ${
//                   star <= rating ? 'text-yellow-400' : 'text-gray-300'
//                 }`}
//               />
//             ))}
//           </div>
//           <span className="ml-2 text-sm font-medium text-gray-900">{name}</span>
//         </div>
//         <span className="text-sm text-gray-500">{date}</span>
//       </div>
//       <p className="mt-2 text-sm text-gray-600">{comment}</p>
//     </div>
//   );
// };

// export default ReviewCard;