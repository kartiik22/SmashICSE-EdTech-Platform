import React from 'react'
import HighlightText from './HighlightText'
import CTAButton from "../../../components/core/HomePage/Button";
import Know_your_progress from "../../../assets/Images/Know_your_progress.png";
import Compare_with_others from "../../../assets/Images/Compare_with_others.svg";
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.svg";

const LearningLanguageSection = () => {
  return (
    <div className="w-full">
      <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center my-8 sm:my-10">
        ICSE made <HighlightText text={"Easy"} />
        <p className="text-center text-richblack-200 font-normal lg:w-[75%] mx-auto leading-relaxed text-sm sm:text-base mt-4 px-2">
          Navigating the ICSE syllabus can be challenging, but we simplify it for you! With structured courses, expert guidance, and an interactive learning experience, mastering Class XI and XII subjects has never been easier. Whether it's concept clarity, exam preparation, or doubt-solving, we ensure you stay ahead with confidence.
        </p>
      </div>

      <div className="w-fit mx-auto mb-8 sm:mb-16">
        <CTAButton active={true} linkto={"/signup"}>
          <div>Learn More</div>
        </CTAButton>
      </div>
    </div>
  )
}

export default LearningLanguageSection