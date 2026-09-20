import { FaStar } from "react-icons/fa"
import { RiDeleteBin6Line } from "react-icons/ri"
import ReactStars from "react-rating-stars-component"
import { useDispatch, useSelector } from "react-redux"

import { removeFromCart } from "../../../../slices/cartSlice"

export default function RenderCartCourses() {
  const { cart } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  return (
    <div className="flex flex-1 flex-col">
      {cart.map((course, indx) => (
        <div
          key={course._id}
          className={`flex w-full flex-wrap items-start justify-between gap-6 ${
            indx !== cart.length - 1 && "border-b border-b-richblack-400 pb-6"
          } ${indx !== 0 && "mt-6"} `}
        >
          <div className="flex flex-1 flex-col sm:flex-row gap-4">
            <img
              src={course?.thumbnail}
              alt={course?.courseName}
              className="h-[180px] sm:h-[148px] w-full sm:w-[220px] rounded-lg object-cover"
            />
            <div className="flex flex-col space-y-1">
              <p className="text-lg font-medium text-richblack-5">
                {course?.courseName}
              </p>
              <p className="text-sm text-richblack-300">
                {course?.category?.name}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-yellow-5">4.5</span>
                <ReactStars
                  count={5}
                  value={course?.ratingAndReviews?.length || 5}
                  size={18}
                  edit={false}
                  activeColor="#ffd700"
                  emptyIcon={<FaStar />}
                  fullIcon={<FaStar />}
                />
                <span className="text-richblack-400 text-xs sm:text-sm">
                  {course?.ratingAndReviews?.length} Ratings
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto space-y-0 sm:space-y-2">
            <p className="order-1 sm:order-2 text-2xl sm:text-3xl font-medium text-yellow-100">
              ₹ {course?.price}
            </p>
            <button
              onClick={() => dispatch(removeFromCart(course._id))}
              className="order-2 sm:order-1 flex items-center gap-x-1 rounded-md border border-richblack-600 bg-richblack-700 py-2 sm:py-3 px-[12px] text-pink-200 text-sm"
            >
              <RiDeleteBin6Line />
              <span>Remove</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
