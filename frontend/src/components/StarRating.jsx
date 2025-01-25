import React from "react"
import { Star, StarHalf } from "lucide-react"

const StarRating = ({ rating, reviews }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5

  return (
    <div className="flex items-center gap-1">
      <span className="font-bold text-[#b4690e]">{rating}</span>
      <div className="flex text-[#b4690e]">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} fill="currentColor" className="h-4 w-4" />
        ))}
        {hasHalfStar && <StarHalf fill="currentColor" className="h-4 w-4" />}
      </div>
      <span className="text-sm text-gray-500">({reviews.toLocaleString()})</span>
    </div>
  )
}

export default StarRating

