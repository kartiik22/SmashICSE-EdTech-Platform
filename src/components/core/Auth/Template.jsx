import { FcGoogle } from "react-icons/fc"
import { useSelector } from "react-redux"

import frameImg from "../../../assets/Images/frame.png"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center w-full px-4 py-8 sm:py-12">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto flex w-full max-w-[500px] flex-col justify-center items-center">
          <div className="w-full">
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight text-richblack-5">
              {title}
            </h1>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed">
              <span className="text-richblack-200">{description1}</span>{" "}
              <span className="font-edu-sa font-bold italic text-blue-100">
                {description2}
              </span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
        </div>
      )}
    </div>
  )
}

export default Template
