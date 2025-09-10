import * as Icons from "react-icons/vsc"
import { useDispatch } from "react-redux"
import { NavLink, matchPath, useLocation } from "react-router-dom"

import { resetCourseState } from "../../../slices/courseSlice"

export default function SidebarLink({ link, iconName }) {
  const Icon = Icons[iconName]
  const location = useLocation()
  const dispatch = useDispatch()

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <NavLink
      to={link.path}
      onClick={() => dispatch(resetCourseState())}
      className={`relative px-8 py-2 text-sm font-medium transition-all duration-200 ${
        matchRoute(link.path) ? "text-white" : "text-richblack-300"
      }`}
      style={matchRoute(link.path) ? { backgroundColor: "#22c55e" } : {}}
      
    >
     <span
  className={`absolute left-0 top-0 h-full w-[0.15rem] ${
    matchRoute(link.path) ? "opacity-100" : "opacity-0"
  }`}
  style={matchRoute(link.path) ? { backgroundColor: "#22c55e" } : {}}
/>

      <div className="flex items-center gap-x-2">
        {/* Icon Goes Here */}
        <Icon className="text-lg" />
        <span>{link.name}</span>
      </div>
    </NavLink>
  )
}
