import React from "react"

import Footer from "../components/Common/Footer"
import ReviewSlider from "../components/Common/ReviewSlider"
import ContactDetails from "../components/core/ContactUsPage/ContactDetails"
import ContactForm from "../components/core/ContactUsPage/ContactForm"
import HighlightText from "../components/core/HomePage/HighlightText"

const Contact = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-gradient-to-br from-gray-900 to-richblack-900 text-white animate-fadeIn">
      <div className="flex flex-col items-center justify-center py-10 sm:py-14 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 text-center text-white">
          <HighlightText text={"Reach Us At"} />
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
          {/* Chat With Us */}
          <div className="flex flex-col items-center p-5 sm:p-8 bg-richblack-800 rounded-2xl sm:rounded-3xl border border-richblack-700 shadow-2xl hover:shadow-richblack-700 transition-all">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full mb-4 sm:mb-6 overflow-hidden shadow-lg">
              <img
                src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXl0emdqZm9sdDU1Z3htOGNyNjIzbTd4cWlqdmJzNXNsMTR0bWRxeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Zteb3kBneWjpkY0/giphy.gif"
                alt="Chat with Us"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-[#22c44c]">
              Chat With Us
            </h2>
            <p className="text-sm sm:text-base text-richblack-300 text-center mb-4 leading-relaxed">
              Email us anytime at{" "}
              <a href="mailto:smashicse@gmail.com" className="text-blue-200 hover:text-blue-100 underline">
                smashicse@gmail.com
              </a>
            </p>
            <a
              href="mailto:smashicse@gmail.com"
              className="mt-auto bg-gradient-to-r from-blue-500 to-green-700 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:scale-105 active:scale-95 transition-transform duration-300 shadow-lg"
            >
              Start Chat
            </a>
          </div>

          {/* Visit Us */}
          <div className="flex flex-col items-center p-5 sm:p-8 bg-richblack-800 rounded-2xl sm:rounded-3xl border border-richblack-700 shadow-2xl hover:shadow-richblack-700 transition-all">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full mb-4 sm:mb-6 overflow-hidden shadow-lg">
              <img
                src="https://media.giphy.com/media/xTiTnqUxyWbsAXq7Ju/giphy.gif"
                alt="Visit Us"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-[#22c44c]">
              Visit Us
            </h2>
            <p className="text-sm sm:text-base text-richblack-300 text-center mb-4 leading-relaxed">
              Ghaziabad<br />Uttar Pradesh, India
            </p>
            <button
              onClick={() => window.open("https://maps.google.com/?q=Ghaziabad,Uttar+Pradesh", "_blank")}
              className="mt-auto bg-gradient-to-r from-blue-500 to-green-700 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:scale-105 active:scale-95 transition-transform duration-300 shadow-lg"
            >
              Get Directions
            </button>
          </div>

          {/* Call Us */}
          <div className="flex flex-col items-center p-5 sm:p-8 bg-richblack-800 rounded-2xl sm:rounded-3xl border border-richblack-700 shadow-2xl hover:shadow-richblack-700 transition-all sm:col-span-2 md:col-span-1">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full mb-4 sm:mb-6 overflow-hidden shadow-lg">
              <img
                src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif"
                alt="Call Us"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-[#22c44c]">
              Call Us
            </h2>
            <p className="text-sm sm:text-base text-richblack-300 text-center mb-4 leading-relaxed">
              Need help? Call us at{" "}
              <a href="tel:+919891026062" className="text-blue-200 hover:text-blue-100 underline">
                +91 9891026062
              </a>
            </p>
            <a
              href="tel:+919891026062"
              className="mt-auto bg-gradient-to-r from-blue-500 to-green-700 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:scale-105 active:scale-95 transition-transform duration-300 shadow-lg"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
