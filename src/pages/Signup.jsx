import signupImg from "../assets/Images/signup.webp"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
<div class="ml-[34%]">

    <Template
      title="Join Smash ICSE"
      description1="Build skills for today, tomorrow, and beyond."

      image={signupImg}
      formType="signup"
    />
    </div>
  )
}

export default Signup
