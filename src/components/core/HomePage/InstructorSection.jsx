import React from 'react'
import CTAButton from "../../../components/core/HomePage/Button";
import { FaArrowRight } from "react-icons/fa";
import Instructor from "../../../assets/Images/Instructor.png";
import HighlightText from './HighlightText';

const InstructorSection = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full lg:w-[80%] flex gap-6 sm:gap-8 flex-col text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mx-auto leading-tight">
            Become a <HighlightText text={"Teacher"} /> at Smash ICSE
          </h2>

          <p className="font-normal text-sm sm:text-base w-full sm:w-[85%] text-richblack-300 text-center mx-auto leading-relaxed px-2">
            Instructors from around the country teach thousands of students on
            SmashICSE. We provide the tools and platform to teach what you love.
          </p>

          <div className="w-full flex justify-center pt-2">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                Start Teaching Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructorSection