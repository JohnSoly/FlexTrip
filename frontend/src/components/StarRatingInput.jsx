import React from 'react';
import { FaStar } from 'react-icons/fa';


/**
 * A component for selecting a star rating.
 *
 * @param {object} props - The component props.
 * @param {string} props.label - The label for the rating input.
 * @param {number} props.rating - The current selected rating (number of stars).
 * @param {function(number): void} props.onRatingChange - Callback function when the rating changes.
 * @param {number} [props.maxStars=5] - The maximum number of stars to display.
 */
const StarRatingInput = ({ label, rating, onRatingChange, maxStars = 5 }) => {
  const [hover, setHover] = React.useState(0);
  const labelBaseClasses = "block mb-2 text-sm font-medium text-gray-900 dark:text-white";
  return (
    <div className="mb-4">
      <div className="mb-2 block">
      <label  className={labelBaseClasses}> 
        {label}
      </label>
      </div>
      <div className="flex items-center space-x-1">
        {[...Array(maxStars)].map((_, index) => {
          const currentRating = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => onRatingChange(currentRating)}
                className="hidden"
              />
              <FaStar
                className="cursor-pointer transition-colors duration-200"
                color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                size={24}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(0)}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default StarRatingInput;
