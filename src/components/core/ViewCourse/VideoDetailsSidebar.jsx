import { useEffect, useState } from "react"
import { BsChevronDown } from "react-icons/bs"
import { IoIosArrowBack } from "react-icons/io"
import { useSelector } from "react-redux"
import { useLocation, useNavigate, useParams } from "react-router-dom"

import IconBtn from "../../Common/IconBtn"

export default function VideoDetailsSidebar({ setReviewModal, sidebarOpen = false, setSidebarOpen = () => {} }) {
  const [activeStatus, setActiveStatus] = useState("")
  const [videoBarActive, setVideoBarActive] = useState("")
  const navigate = useNavigate()
  const location = useLocation()
  const { sectionId, subSectionId } = useParams()
  const {
    courseSectionData,
    courseEntireData,
    totalNoOfLectures,
    completedLectures,
  } = useSelector((state) => state.viewCourse)

  useEffect(() => {
    ;(() => {
      if (!courseSectionData.length) return
      const currentSectionIndx = courseSectionData.findIndex(
        (data) => data._id === sectionId
      )
      const currentSubSectionIndx = courseSectionData?.[
        currentSectionIndx
      ]?.subSection.findIndex((data) => data._id === subSectionId)
      const activeSubSectionId =
        courseSectionData[currentSectionIndx]?.subSection?.[
          currentSubSectionIndx
        ]?._id
      setActiveStatus(courseSectionData?.[currentSectionIndx]?._id)
      setVideoBarActive(activeSubSectionId)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseSectionData, courseEntireData, location.pathname])

  const content = (
    <div className="flex h-full w-[300px] sm:w-[320px] max-w-[85vw] flex-col border-r-[1px] border-r-richblack-700 bg-black">
      <div className="mx-4 sm:mx-5 flex flex-col items-start justify-between gap-2 gap-y-4 border-b border-richblack-600 py-4 sm:py-5 text-lg font-bold text-richblack-25">
        <div className="flex w-full items-center justify-between ">
          <div
            onClick={() => {
              setSidebarOpen(false)
              navigate(`/dashboard/enrolled-courses`)
            }}
            className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-full bg-richblack-800 p-1 text-richblack-100 hover:scale-90"
            title="back"
          >
            <IoIosArrowBack size={24} />
          </div>
          <IconBtn
            text="Add Review"
            customClasses="ml-auto text-xs sm:text-sm"
            onclick={() => {
              setSidebarOpen(false)
              setReviewModal(true)
            }}
          />
        </div>
        <div className="flex flex-col">
          <p className="text-sm sm:text-base font-semibold">{courseEntireData?.courseName}</p>
          <p className="text-xs sm:text-sm font-semibold text-richblack-400">
            {completedLectures?.length} / {totalNoOfLectures} lectures completed
          </p>
        </div>
      </div>

      <div className="h-[calc(100vh-6rem)] overflow-y-auto">
        {courseSectionData.map((course, index) => (
          <div
            className="mt-2 cursor-pointer text-sm text-richblack-5"
            onClick={() => setActiveStatus(course?._id)}
            key={index}
          >
            {/* Section */}
            <div className="flex flex-row justify-between bg-richblack-700 px-4 sm:px-5 py-3.5">
              <div className="w-[70%] font-semibold text-xs sm:text-sm">
                {course?.sectionName}
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`${
                    activeStatus === course?._id
                      ? "rotate-180"
                      : "rotate-0"
                  } transition-all duration-300 text-richblack-300`}
                >
                  <BsChevronDown />
                </span>
              </div>
            </div>

            {/* Sub Sections */}
            {activeStatus === course?._id && (
              <div className="transition-[height] duration-300 ease-in-out">
                {course.subSection.map((topic, i) => (
                  <div
                    className={`flex gap-3 px-4 sm:px-5 py-2.5 text-xs sm:text-sm transition-colors ${
                      videoBarActive === topic._id
                        ? "bg-[#22c44c] font-semibold text-black"
                        : "hover:bg-richblack-900 text-richblack-200"
                    } `}
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation()
                      navigate(
                        `/view-course/${courseEntireData?._id}/section/${course?._id}/sub-section/${topic?._id}`
                      )
                      setVideoBarActive(topic._id)
                      setSidebarOpen(false)
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={completedLectures.includes(topic?._id)}
                      onChange={() => {}}
                      className="cursor-pointer"
                    />
                    <span className="truncate">{topic.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex h-[calc(100vh-3.5rem)]">
        {content}
      </div>

      {/* Mobile Drawer */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="relative z-50 h-full animate-slideIn">
            {content}
          </div>
        </div>
      )}
    </>
  )
}
