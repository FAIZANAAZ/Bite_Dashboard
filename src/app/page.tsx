"use client"

import { useState } from "react"
import { Menu, ChevronLeft } from "lucide-react"
import ContributionCalendar from "@/components/HOME_FIRST/activity-graph"
import StatisticsDashboard from "@/components/HOME_FIRST/Chart/main"
import CourseCards from "@/components/HOME_FIRST/courseCard"
import { OngoingCourses } from "@/components/HOME_FIRST/ongoing-courses"
import RightSidebarDashboard from "@/components/HOME_FIRST/right-sidebar-dashboard"
import Sidebar from "@/components/HOME_FIRST/sidebar"
import { StatsSection } from "@/components/HOME_FIRST/stats-section"
import { WelcomeHeader } from "@/components/HOME_FIRST/welcome-header"

export default function Dashboard() {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false)
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false)

  const handleMenuItemClick = () => {
    // Close both sidebars when a menu item is clicked (mobile only)
    setLeftSidebarOpen(false)
    setRightSidebarOpen(false)
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden relative">
      {/* Mobile Overlay */}
      {(leftSidebarOpen || rightSidebarOpen) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => {
            setLeftSidebarOpen(false)
            setRightSidebarOpen(false)
          }}
        />
      )}

      {/* Left Sidebar */}
      <div
        className={`
        w-64 bg-white shadow-sm border-r border-gray-200 flex-shrink-0 z-50
        lg:relative lg:translate-x-0
        fixed inset-y-0 left-0 transform transition-transform duration-300 ease-in-out
        ${leftSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="h-full overflow-y-auto">
          <Sidebar onMenuItemClick={handleMenuItemClick} />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header with Toggle Buttons */}
        <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-gray-200">
          <button
            onClick={() => setLeftSidebarOpen(true)}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>

          <h1 className="text-xl font-bold text-blue-400">codebite</h1>

          <button
            onClick={() => setRightSidebarOpen(true)}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 rotate-180" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {/* Welcome Header */}
          <div className="mb-6">
            <WelcomeHeader />
          </div>

          {/* Stats Section */}
          <div className="mb-8">
            <StatsSection />
          </div>

          {/* Ongoing Courses */}
          <div className="mb-8">
            <OngoingCourses />
          </div>

          {/* Statistics Dashboard */}
          <div className="mb-8">
            <StatisticsDashboard />
          </div>

          {/* Activity Graph */}
          <div className="mb-8">
            <ContributionCalendar />
          </div>

          {/* Course Cards */}
          <div className="mb-8">
            <CourseCards />
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div
        className={`
        w-64 bg-white shadow-sm border-l border-gray-200 flex-shrink-0 z-50
        lg:relative lg:translate-x-0
        fixed inset-y-0 right-0 transform transition-transform duration-300 ease-in-out
        ${rightSidebarOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="h-full overflow-hidden">
          <RightSidebarDashboard />
        </div>
      </div>
    </div>
  )
}
