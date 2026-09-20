import { useState } from "react"
import { VscMenu } from "react-icons/vsc"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import Sidebar from "../components/core/Dashboard/Sidebar"

function Dashboard() {
  const { loading: profileLoading } = useSelector((state) => state.profile)
  const { loading: authLoading } = useSelector((state) => state.auth)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div className="relative flex flex-col md:flex-row min-h-[calc(100vh-3.5rem)] w-full">
      {/* Mobile Top Dashboard Bar */}
      <div className="flex md:hidden items-center justify-between border-b border-richblack-700 bg-richblack-900 px-4 py-3 sticky top-0 z-30">
        <button
          onClick={() => setMobileSidebarOpen(true)}
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-richblack-100 bg-richblack-800 hover:bg-richblack-700 px-3 py-2 rounded-lg border border-richblack-700 transition-colors"
        >
          <VscMenu className="text-base text-[#22c44c]" />
          <span>Dashboard Menu</span>
        </button>
        <span className="text-xs font-medium text-richblack-400">Smash ICSE</span>
      </div>

      <Sidebar mobileOpen={mobileSidebarOpen} setMobileOpen={setMobileSidebarOpen} />

      <main className="h-auto md:h-[calc(100vh-3.5rem)] flex-1 overflow-x-hidden overflow-y-auto">
        <div className="mx-auto w-11/12 max-w-[1000px] py-6 sm:py-10">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default Dashboard
