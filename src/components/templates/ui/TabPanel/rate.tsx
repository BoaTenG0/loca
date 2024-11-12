import React from 'react'
import { Rate, Progress } from 'antd'

interface CategoryRating {
  label: string
  percentage: number
}

interface RatingComponentProps {
  overallRating: number
  reviewCount: number
  categoryRatings: CategoryRating[]
}

const RatingComponent: React.FC<RatingComponentProps> = ({ overallRating, reviewCount, categoryRatings }) => {
  return (
    <div className="flex items-start gap-4 my-4">
      {/* Left Section: Overall Rating */}
      <div className="flex flex-col items-center">
        <Rate disabled allowHalf value={overallRating} className="text-locaGreen" />
        {/* <Rate disabled allowHalf value={overallRating} className="text-locaGreen" /> */}
        <div className="text-2xl font-bold mt-1">
          {overallRating.toFixed(1)}
          <span className="text-xs text-gray-500 items-center">({reviewCount} reviews)</span>
        </div>
      </div>

      {/* Right Section: Category Ratings */}
      <div className="flex flex-col w-[60%] space-y-2">
        {categoryRatings.map(({ label, percentage }) => (
          <div key={label} className="flex items-center">
            <Progress
              percent={percentage}
              showInfo={false}
              strokeColor="#52c41a"
              trailColor="#e8e8e8"
              style={{ width: '100%', height: '8px' }}
            />
            <div className="w-20 text-right text-gray-600 ml-2">{label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RatingComponent
