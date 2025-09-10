import React from "react"

import Footer from "../components/Common/Footer"
import ReviewSlider from "../components/Common/ReviewSlider"
import ContactDetails from "../components/core/ContactUsPage/ContactDetails"
import ContactForm from "../components/core/ContactUsPage/ContactForm"
import HighlightText from "../components/core/HomePage/HighlightText"

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-richblack-900 text-white py-12 animate-fadeIn">
  <h1 className="text-6xl font-bold mb-14 text-center text-white  animate-float">
  <HighlightText text={"Reach Us At"} />
  </h1>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4 animate-fadeInUp">
    {/* Chat With Us */}
    <div className="flex flex-col items-center p-8 bg-richblack-800 rounded-3xl shadow-2xl hover:shadow-richblack-700 transition-all transform hover:scale-105 animate-pulse-slow">
      <div className="w-40 h-40 rounded-full mb-6 overflow-hidden shadow-lg animate-float">
        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXl0emdqZm9sdDU1Z3htOGNyNjIzbTd4cWlqdmJzNXNsMTR0bWRxeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Zteb3kBneWjpkY0/giphy.gif" alt="Chat with Us" className="w-full h-full object-cover" />
      </div>
      <h2 className="text-3xl font-bold mb-3 text-gradient bg-gradient-to-r from-blue-400 to-green-500 animate-text-gradient">Chat With Us</h2>
      <p className="text-richblack-300 text-center mb-4">Email us anytime at <a href="smashicse@gmail.com" className="text-blue-400 hover:text-blue-600 underline">smashicse@gmail.com</a></p>
      <button className="mt-4 bg-gradient-to-r from-blue-500 to-green-700 px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-green-700 animate-bounce-slow">
        Start Chat
      </button>
    </div>

    {/* Visit Us */}
    <div className="flex flex-col items-center p-8 bg-richblack-800 rounded-3xl shadow-2xl hover:shadow-richblack-700 transition-all transform hover:scale-105 animate-pulse-slow">
      <div className="w-40 h-40 rounded-full mb-6 overflow-hidden shadow-lg animate-float">
        <img src="https://media.giphy.com/media/xTiTnqUxyWbsAXq7Ju/giphy.gif" alt="Visit Us" className="w-full h-full object-cover" />
      </div>
      <h2 className="text-3xl font-bold mb-3 text-gradient bg-gradient-to-r from-blue-400 to-green-500 animate-text-gradient">Visit Us</h2>
      <p className="text-richblack-300 text-center mb-4">Ghaziabad<br/>Uttar Pradesh,India</p>
      <button className="mt-4 bg-gradient-to-r from-blue-500 to-green-700 px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-green-700 animate-bounce-slow">
        Get Directions
      </button>
    </div>

    {/* Call Us */}
    <div className="flex flex-col items-center p-8 bg-richblack-800 rounded-3xl shadow-2xl hover:shadow-richblack-700 transition-all transform hover:scale-105 animate-pulse-slow">
      <div className="w-40 h-40 rounded-full mb-6 overflow-hidden shadow-lg animate-float">
        <img src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" alt="Call Us" className="w-full h-full object-cover" />
      </div>
      <h2 className="text-3xl font-bold mb-3 text-gradient bg-gradient-to-r from-blue-400 to-green-500 animate-text-gradient">Call Us</h2>
        <p className="text-richblack-300 text-center mb-4">Need help? Call us at <a href="tel:+919891026062" className="text-blue-400 hover:text-blue-600 underline">+91 9891026062</a>.</p>
      <button className="mt-4 bg-gradient-to-r from-blue-500 to-green-700 px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-green-700 animate-bounce-slow">
        Call Now
      </button>
    </div>
  </div>
  <Footer/>
</div>
  )
}

export default Contact
