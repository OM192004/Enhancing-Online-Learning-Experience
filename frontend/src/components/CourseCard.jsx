import React from "react"
import StarRating from "./StarRating"

const CourseCard = ({ title, instructor, rating, reviews, price, image, badge }) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border">
      <div className="aspect-video relative">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="object-cover w-full h-full transition-transform group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col p-4">
        <h3 className="font-bold line-clamp-2 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-1">{instructor}</p>
        <StarRating rating={rating} reviews={reviews} />
        <p className="mt-2 font-bold">₹{price.toLocaleString()}</p>
        {badge && <span className="absolute top-2 left-2 bg-[#eceb98] px-2 py-1 text-xs font-medium">{badge}</span>}
      </div>
    </div>
  )
}

export default CourseCard

