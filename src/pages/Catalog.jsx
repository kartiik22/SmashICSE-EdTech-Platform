import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

// import CourseCard from "../components/Catalog/CourseCard"
// import CourseSlider from "../components/Catalog/CourseSlider"
import Footer from "../components/Common/Footer"
import Course_Card from "../components/core/Catalog/Course_Card"
import Course_Slider from "../components/core/Catalog/Course_Slider"
import { apiConnector } from "../services/apiConnector"
import { categories } from "../services/apis"
import { getCatalogPageData } from "../services/operations/pageAndComponntDatas"
import Error from "./Error"

function Catalog() {
  const { loading } = useSelector((state) => state.profile)
  const { catalogName } = useParams()
  const [active, setActive] = useState(1)
  const [catalogPageData, setCatalogPageData] = useState(null)
  const [categoryId, setCategoryId] = useState("")
  // Fetch All Categories
  useEffect(() => {
    ;(async () => {
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API)
        const category_id = res?.data?.data?.filter(
          (ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName
        )[0]._id
        setCategoryId(category_id)
      } catch (error) {
        console.log("Could not fetch Categories.", error)
      }
    })()
  }, [catalogName])
  useEffect(() => {
    if (categoryId) {
      ;(async () => {
        try {
          const res = await getCatalogPageData(categoryId)
          setCatalogPageData(res)
        } catch (error) {
          console.log(error)
        }
      })()
    }
  }, [categoryId])

  if (loading || !catalogPageData) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }
  if (!loading && !catalogPageData.success) {
    return <Error />
  }
  
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="box-content bg-richblack-900 border-b border-richblack-800 px-4 py-8 sm:py-12">
        <div className="mx-auto flex flex-col justify-center gap-3 max-w-maxContent">
          <p className="text-xs sm:text-sm text-richblack-300">
            {`Home / Class / `}
            <b>
              <span className="text-[#22c44c]">
                {catalogPageData?.data?.selectedCategory?.name}
              </span>
            </b>
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-richblack-5">
            {catalogPageData?.data?.selectedCategory?.name}
          </h1>
          <p className="max-w-[870px] text-sm sm:text-base text-richblack-200 leading-relaxed">
            {catalogPageData?.data?.selectedCategory?.description}
          </p>
        </div>
      </div>

      {/* Section 1 */}
      <div className="mx-auto box-content w-full max-w-maxContent px-4 py-8 sm:py-12">
        <div className="section_heading">Our ICSE Courses</div>
        <div className="my-4 flex border-b border-b-richblack-600 text-sm overflow-x-auto">
          <p
            className={`px-4 py-2 whitespace-nowrap ${
              active === 1
                ? "border-b-2 border-b-[#22c44c] text-[#22c44c] font-semibold"
                : "text-richblack-50"
            } cursor-pointer`}
            onClick={() => setActive(1)}
          >
            Most Viewed Courses
          </p>
          <p
            className={`px-4 py-2 whitespace-nowrap ${
              active === 2
                ? "border-b-2 border-b-[#22c44c] text-[#22c44c] font-semibold"
                : "text-richblack-50"
            } cursor-pointer`}
            onClick={() => setActive(2)}
          >
            Newest Courses
          </p>
        </div>
        <div className="w-full">
          <Course_Slider
            Courses={catalogPageData?.data?.selectedCategory?.courses}
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="mx-auto box-content w-full max-w-maxContent px-4 py-8 sm:py-12">
        <div className="section_heading">
          Top courses in {catalogPageData?.data?.differentCategory?.name}
        </div>
        <div className="py-6 sm:py-8 w-full">
          <Course_Slider
            Courses={catalogPageData?.data?.differentCategory?.courses}
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="mx-auto box-content w-full max-w-maxContent px-4 py-8 sm:py-12">
        <div className="section_heading">Frequently Bought</div>
        <div className="py-6 sm:py-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {catalogPageData?.data?.mostSellingCourses
              ?.slice(0, 4)
              .map((course, i) => (
                <Course_Card course={course} key={i} Height={"h-[200px] sm:h-[260px]"} />
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Catalog
