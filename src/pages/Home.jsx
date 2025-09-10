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
    <div>
      
      <div className="relative w-full h-screen overflow-hidden">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src="https://cdn.pixabay.com/video/2025/03/18/265815_large.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  

  {/* Dark Overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
  
      {/* Section 1 */}
      <div className="absolute top-0 left-0 w-full z-30">
    <Navbar />
  </div>
  <br/>
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        {/* Become a Instructor Button */}
        
        <br/>

        {/* Heading */}
        <div className="text-center text-4xl font-semibold">
          
          Score best marks in 
          <HighlightText text={"ICSE Board"} />
        </div>
        <br/>
        {/* Sub Heading */}
        <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
        <p 
  className="text-lg md:text-xl font-medium text-richblack-300 text-center w-[90%] md:w-[75%] mx-auto leading-relaxed
             animate-fadeIn opacity-0"
  style={{
    animation: "fadeIn 1.5s ease-out forwards"
  }}
>
  Empowering <span className="text-[#42d392] font-semibold">Class 11 & 12 ICSE</span> students with 
  <span className="text-[#5ae2a5] font-semibold"> top-notch education.</span>  
  At <span className="text-[#42d392] font-semibold">Smash ICSE</span>, we bring  
  <span className="text-[#5ae2a5] font-semibold">expert teachers, structured courses,</span>  
  and <span className="text-[#5ae2a5] font-semibold">interactive learning</span> to help you  
  <span className="text-[#42d392] font-semibold"> ace your exams with confidence.</span>
</p>
<br/>
<p 
  className="mt-4 text-md md:text-lg text-richblack-200 text-center w-[85%] md:w-[70%] mx-auto
             animate-slideUp opacity-0"
  style={{
    animation: "slideUp 1.5s ease-out 0.5s forwards"
  }}
>
  🎓 <span className="text-[#5ae2a5] font-semibold">Did you know? </span>  
  <span className="text-richblack-100">ICSE students have a <span className="text-[#42d392] font-bold">higher success rate </span>  
  in competitive exams due to their **strong conceptual foundation**  
  in <span className="text-[#5ae2a5] font-semibold">Math, Science, and English.</span></span>
</p>
<br/>
<p 
  className="mt-4 text-md md:text-lg italic font-medium text-[#42d392] text-center w-[85%] md:w-[70%] mx-auto
             animate-fadeIn opacity-0"
  style={{
    animation: "fadeIn 1.5s ease-out 1s forwards"
  }}
>
  ✨ "Success is not about luck, it's about  
  <span className="text-[#5ae2a5] font-bold"> preparation, perseverance,</span>  
  and <span className="text-[#5ae2a5] font-bold">the right guidance.</span>"  
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

        {/* CTA Buttons */}
       

<div className="mt-8 flex flex-row gap-7">
  {/* Button 1 - Learn More */}
  <Link to="/signup" className="relative w-48 h-14 bg-caribbeangreen-500 text-white font-semibold rounded-lg overflow-hidden flex items-center justify-center">
    <img
      src="https://media.tenor.com/z1YT2LePMWkAAAAi/tkthao219-peach.gif"
      alt="Background Animation"
      className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
    />
    <span className="relative z-10">Join Us</span>
  </Link>

  {/* Button 2 - Book a Demo */}
  <Link to="/login" className="relative w-48 h-14 bg-richblack-800 text-white font-semibold rounded-lg overflow-hidden flex items-center justify-center">
    <img
      src="https://media.tenor.com/Yc0X0ZFY25QAAAAM/you-member-memberberries.gif"
      alt="Background Animation"
      className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
    />
    <span className="relative z-10">Already a member?</span>
  </Link>
  
</div>
<br/>
<br/>
</div>


        {/* Video */}
        {/* <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div> */}

        {/* Code Section 1  */}
        {/* <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your
                <HighlightText text={"coding potential"} /> with our online
                courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>
 */}
        {/* Code Section 2 */}
        {/* <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div> */}

        {/* Explore Section */}
        
      </div>

      {/* Section 2 */}
      <br/>
      <div className="bg-richblack-900 text-richblack-700">
        {/* <div className="homepage_bg h-[320px]">
          
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div> */}

        <div className=" text-white mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">

          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] ">
              We give assistance that you need for a{" "}
              <HighlightText text={"good preparation"} />
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px]">
                Best guidance for ICSE exams, by excellent teachers.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div className="">Join Today</div>
              </CTAButton>
            </div>
          </div>

        

          <LearningLanguageSection />
          {/* <TimelineSection /> */}
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Become a instructor section */}
        <InstructorSection />

        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        <ReviewSlider />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
