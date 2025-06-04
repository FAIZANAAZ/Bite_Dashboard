import ContributionCalendar from "@/components/HOME_FIRST/activity-graph"
import StatisticsDashboard from "@/components/HOME_FIRST/Chart/main"
import CourseCards from "@/components/HOME_FIRST/courseCard"
import { OngoingCourses } from "@/components/HOME_FIRST/ongoing-courses"
import RightSidebarDashboard from "@/components/HOME_FIRST/right-sidebar-dashboard"
import Sidebar from "@/components/HOME_FIRST/sidebar"
import { StatsSection } from "@/components/HOME_FIRST/stats-section"
import { WelcomeHeader } from "@/components/HOME_FIRST/welcome-header"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Left Sidebar - Fixed Width */}
      <div className="w-64 bg-white shadow-sm border-r border-gray-200 flex-shrink-0">
        <div className="h-full overflow-y-auto">
          <Sidebar />
        </div>
      </div>

      {/* Main Content Area - Flexible */}
      <div className="flex-1 flex flex-col min-w-0">
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

      {/* Right Sidebar - Fixed Width, No Scroll */}
      <div className="w-64 bg-white shadow-sm border-l border-gray-200 flex-shrink-0">
        <div className="h-full overflow-hidden">
          <RightSidebarDashboard />
        </div>
      </div>
    </div>
  )
}
