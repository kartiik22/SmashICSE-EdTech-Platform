import React from 'react'
import CTAButton from "../../../components/core/HomePage/Button";
import { FaArrowRight } from "react-icons/fa";
import Instructor from "../../../assets/Images/Instructor.png";
import HighlightText from './HighlightText';

const InstructorSection = () => {
  return (
    <div>
        <div className="flex flex-col lg:flex-row gap-20 items-center flex justify-center  ">
       
          <div className="lg:w-[80%] flex gap-10 flex-col text-center">
            <h1 className="lg:w-[80%] text-4xl font-semibold text-center mx-auto">
              Become a
              <HighlightText text={"Teacher "} />
               at Smash ICSE
            </h1>

            <p className="font-medium text-[16px] w-[90%] text-richblack-300 text-center mx-auto">
            Instructors from around the world teach millions of students on
              CodePlay. We provide the tools and skills to teach what you
              love.
            </p>

            <div className="w-full flex justify-center" >
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-3">
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