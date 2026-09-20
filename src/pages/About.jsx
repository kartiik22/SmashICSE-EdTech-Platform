import React from "react"

import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Footer from "../components/Common/Footer"
import ReviewSlider from "../components/Common/ReviewSlider"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"

const About = () => {
  return (
    <div className="w-full">
      <section className="bg-richblack-800 border-b border-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between text-center text-white py-12 sm:py-20">
          <header className="mx-auto text-2xl sm:text-3xl md:text-4xl font-semibold lg:w-[90%] leading-tight">
            Smash your <HighlightText text={"ICSE "} /> Syllabus
            <p className="mx-auto mt-4 text-center text-sm sm:text-base font-normal text-richblack-200 lg:w-[90%] leading-relaxed">
              Smash ICSE has significantly helped ICSE students by providing well-structured courses, expert-led video lectures, and interactive quizzes designed for Class XI and XII. With a focus on conceptual clarity and exam-oriented preparation, students can learn at their own pace and boost their performance. The platform ensures accessible and engaging education, helping students excel in their ICSE journey. 🚀📚
            </p>
          </header>
        </div>
      </section>

      <div className="py-8 sm:py-12 px-4">
        <div className="w-full max-w-3xl mx-auto p-5 sm:p-8 bg-gradient-to-r from-green-900 via-green-700 to-green-500 text-white rounded-2xl shadow-xl text-center animate-fadeIn">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase animate-slideIn">
            <HighlightText text={"About SmashICSE"} />
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-richblack-5">
            <b>Smash ICSE</b> was founded by <b>Kartik Duseja</b> and <b>Harshit Sanwal</b> with a vision to revolutionize ICSE education. Our platform provides high-quality, well-structured courses tailored for Class XI and XII ICSE students. From <b>interactive video lectures</b> to <b>practice tests</b>, we ensure students grasp concepts easily and excel in their exams.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8 text-left">
            <div className="flex-1 min-w-0 p-5 sm:p-6 bg-white/20 backdrop-blur-sm rounded-xl shadow-md">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-white">Our Mission</h2>
              <p className="text-sm sm:text-base text-richblack-5 leading-relaxed">
                To provide top-tier education that is accessible, engaging, and effective for ICSE students across India.
              </p>
            </div>

            <div className="flex-1 min-w-0 p-5 sm:p-6 bg-white/20 backdrop-blur-sm rounded-xl shadow-md">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-white">Our Features</h2>
              <ul className="list-none space-y-2 text-sm sm:text-base text-richblack-5">
                <li>✅ High Quality Video Lectures</li>
                <li>✅ Expert Instructors</li>
                <li>✅ Revision Classes</li>
                <li>✅ Interactive Tests</li>
                <li>✅ 24/7 Doubt Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
