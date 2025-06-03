
import { OngoingCourses } from "@/components/ongoing-courses";
import Sidebar from "@/components/sidebar";
import { StatsSection } from "@/components/stats-section";
import { WelcomeHeader } from "@/components/welcome-header";



export default function Dashboard() {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <WelcomeHeader />

      <div className="mb-8">
        <StatsSection />
      </div>

      <OngoingCourses />
      <Sidebar/>
    </div>
  )
}
