// Icons Import
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import Navbar from "../components/Common/Navbar"
// Image and Video Import
import Banner from "../assets/Images/banner.mp4"
// Component Imports
import Footer from "../components/Common/Footer"
import ReviewSlider from "../components/Common/ReviewSlider"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/Timeline"

function Home() {
  return (
    <div className="w-full">
      {/* Hero Video Section */}
      <div className="relative w-full min-h-screen overflow-hidden flex flex-col justify-between pb-12">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2025/03/18/265815_large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 w-full h-full bg-black/75"></div>

        {/* Section 1 - Navbar */}
        <div className="relative top-0 left-0 w-full z-30">
          <Navbar />
        </div>

        {/* Hero Content */}
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-center gap-6 text-white my-auto pt-10 sm:pt-14 pb-8">
          {/* Heading */}
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight px-2 leading-tight">
            Score best marks in <HighlightText text={"ICSE Board"} />
          </h1>

          {/* Sub Heading & Highlights */}
          <div className="w-full max-w-[900px] text-center font-medium text-richblack-300 px-2">
            <p
              className="text-base sm:text-lg md:text-xl text-richblack-200 text-center mx-auto leading-relaxed animate-fadeIn opacity-0"
              style={{
                animation: "fadeIn 1.2s ease-out forwards",
              }}
            >
              Empowering <span className="text-[#42d392] font-semibold">Class 11 & 12 ICSE</span> students with{" "}
              <span className="text-[#5ae2a5] font-semibold">top-notch education.</span> At{" "}
              <span className="text-[#42d392] font-semibold">Smash ICSE</span>, we bring{" "}
              <span className="text-[#5ae2a5] font-semibold">expert teachers, structured courses,</span> and{" "}
              <span className="text-[#5ae2a5] font-semibold">interactive learning</span> to help you{" "}
              <span className="text-[#42d392] font-semibold">ace your exams with confidence.</span>
            </p>

            <p
              className="mt-4 text-sm sm:text-base md:text-lg text-richblack-200 text-center mx-auto animate-slideUp opacity-0"
              style={{
                animation: "slideUp 1.2s ease-out 0.4s forwards",
              }}
            >
              🎓 <span className="text-[#5ae2a5] font-semibold">Did you know? </span>
              <span className="text-richblack-100">
                ICSE students have a <span className="text-[#42d392] font-bold">higher success rate </span>
                in competitive exams due to their strong conceptual foundation in{" "}
                <span className="text-[#5ae2a5] font-semibold">Math, Science, and English.</span>
              </span>
            </p>

            <p
              className="mt-4 text-sm sm:text-base md:text-lg italic font-medium text-[#42d392] text-center mx-auto animate-fadeIn opacity-0"
              style={{
                animation: "fadeIn 1.2s ease-out 0.8s forwards",
              }}
            >
              ✨ "Success is not about luck, it's about{" "}
              <span className="text-[#5ae2a5] font-bold">preparation, perseverance,</span> and{" "}
              <span className="text-[#5ae2a5] font-bold">the right guidance.</span>"
            </p>

            <style>
              {`
                @keyframes fadeIn {
                  from { opacity: 0; transform: translateY(10px); }
                  to { opacity: 1; transform: translateY(0); }
                }

                @keyframes slideUp {
                  from { opacity: 0; transform: translateY(20px); }
                  to { opacity: 1; transform: translateY(0); }
                }
              `}
            </style>
          </div>

          {/* CTA Buttons - iPhone 16 responsive stacked on mobile, inline on tablet+ */}
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full items-center justify-center">
            {/* Button 1 - Join Us */}
            <Link
              to="/signup"
              className="relative w-full max-w-[240px] sm:w-48 h-12 sm:h-14 bg-caribbeangreen-500 text-white font-semibold rounded-lg overflow-hidden flex items-center justify-center shadow-lg active:scale-95 transition-transform"
            >
              <img
                src="https://media.tenor.com/z1YT2LePMWkAAAAi/tkthao219-peach.gif"
                alt="Background Animation"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
              />
              <span className="relative z-10 text-base">Join Us</span>
            </Link>

            {/* Button 2 - Login */}
            <Link
              to="/login"
              className="relative w-full max-w-[240px] sm:w-48 h-12 sm:h-14 bg-richblack-800 border border-richblack-700 text-white font-semibold rounded-lg overflow-hidden flex items-center justify-center shadow-lg active:scale-95 transition-transform"
            >
              <img
                src="https://media.tenor.com/Yc0X0ZFY25QAAAAM/you-member-memberberries.gif"
                alt="Background Animation"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
              />
              <span className="relative z-10 text-base">Already a member?</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-richblack-900 text-richblack-25 py-12 sm:py-20">
        <div className="text-white mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-12">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center lg:gap-12 w-full">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold lg:w-[50%] leading-snug">
              We give assistance that you need for a{" "}
              <HighlightText text={"good preparation"} />
            </div>
            <div className="flex flex-col items-start gap-5 lg:gap-8 lg:w-[45%]">
              <div className="text-base text-richblack-300 leading-relaxed">
                Best guidance for ICSE exams, by excellent teachers.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div>Join Today</div>
              </CTAButton>
            </div>
          </div>

          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative mx-auto my-12 sm:my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Become a instructor section */}
        <InstructorSection />

        {/* Reviews from Other Learners */}
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold mt-8">
          Reviews from other learners
        </h2>
        <ReviewSlider />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
