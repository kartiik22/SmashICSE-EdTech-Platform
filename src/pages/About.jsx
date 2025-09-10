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
    <div>
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-12/12 max-w-maxContent flex-col justify-between gap-1 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[91%]">
            Smash your
            <HighlightText text={"ICSE "} />
            Syllabus
            <br/>
            <br/>
            <br/>
            <p className="mx-auto mt-1 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
            Smash ICSE has significantly helped ICSE students by providing well-structured courses, expert-led video lectures, and interactive quizzes designed for Class XI and XII. With a focus on conceptual clarity and exam-oriented preparation, students can learn at their own pace and boost their performance. The platform ensures accessible and engaging education, helping students excel in their ICSE journey. 🚀📚
              
            </p>
          </header>
          {/* <div className="sm:h-[70px] lg:h-[150px]"></div> */}
      
        </div>
      </section>

      <div>
    

      <div className="max-w-3xl mx-auto p-8 mt-8 bg-gradient-to-r from-green-900 via-green-700 to-green-500 text-white rounded-lg shadow-lg text-center animate-fadeIn">
        <h1 className="text-4xl font-bold uppercase animate-slideIn">
        <HighlightText text={"About SmashICSE"} />
        </h1>
        <p className="mt-4 text-lg leading-relaxed animate-fadeInDelay">
          <b>Smash ICSE</b> was founded by <b>Kartik Duseja</b> and{" "}
          <b>Harshit Sanwal</b> with a vision to revolutionize ICSE education.
          Our platform provides high-quality, well-structured courses tailored
          for Class XI and XII ICSE students. From{" "}
          <b>interactive video lectures</b> to <b>practice tests</b>, we ensure
          students grasp concepts easily and excel in their exams.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
          <div className="flex-1 min-w-[250px] p-6 bg-opacity-20 bg-white rounded-lg shadow-md animate-fadeInDelay2">
            <h2 className="text-xl font-semibold">Our Mission</h2>
            <p>
              To provide top-tier education that is accessible, engaging, and
              effective for ICSE students across India.
            </p>
          </div>

          <div className="flex-1 min-w-[250px] p-6 bg-opacity-20 bg-white rounded-lg shadow-md animate-fadeInDelay3">
            <h2 className="text-xl font-semibold">Our Features</h2>
            <ul className="list-none mt-2 space-y-2">
              <li>✅ Good Video Lectures </li>
              <li>✅ Expert Instructors</li>
              <li>✅ Revision Classes </li>
              <li>✅ Interactive Tests</li>
              <li>✅ 24/7 Doubt Support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
          </div>
  )
}

export default About
