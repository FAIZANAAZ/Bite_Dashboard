"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { RiVipDiamondFill } from "react-icons/ri"
import { WeeklyBarChart } from "./barchart-prograss"
import { CircularProgressChart } from "./circular-progress-chart"

interface DayData {
  day: string
  value: number
  hasIcon: boolean
}

const weeklyData: DayData[] = [
  { day: "Mon", value: 60, hasIcon: false },
  { day: "Tue", value: 40, hasIcon: false },
  { day: "Wed", value: 85, hasIcon: true },
  { day: "Thu", value: 60, hasIcon: false },
  { day: "Fri", value: 80, hasIcon: false },
  { day: "Sat", value: 50, hasIcon: false },
  { day: "Sun", value: 40, hasIcon: false },
]

export default function StatisticsDashboard() {
  const [todayProgress, setTodayProgress] = useState(67)
  const [selectedPeriod, setSelectedPeriod] = useState("Monthly")

  // Simulate real-time progress updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (todayProgress < 100) {
        setTodayProgress((prev) => Math.min(prev + Math.random() * 1, 100))
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [todayProgress])

  const handlePeriodChange = () => {
    const periods = ["Monthly", "Weekly", "Daily", "Yearly"]
    const currentIndex = periods.indexOf(selectedPeriod)
    const nextPeriod = periods[(currentIndex + 1) % periods.length]
    setSelectedPeriod(nextPeriod)
  }

  return (
    <div className="w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-2 sm:px-4">
      <Card className="bg-white shadow-sm border-0 rounded-xl sm:rounded-2xl overflow-hidden">
        <CardContent className="p-3 sm:p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {/* Left Side - Bar Chart */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="flex flex-col xs:flex-row sm:flex-row items-start xs:items-center sm:items-center gap-2 sm:gap-3">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 whitespace-nowrap">
                  Statistics
                </h2>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <Button
                    variant="secondary"
                    className="bg-[#CBEFB199] text-green-700 hover:bg-green-100 px-2 py-1 sm:px-3 sm:py-1.5 md:px-3 md:py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-200"
                  >
                    Hours spent
                  </Button>
                  <Button
                    variant="secondary"
                    className="bg-[#CBEFB199] text-green-700 hover:bg-blue-100 px-2 py-1 sm:px-3 sm:py-1.5 md:px-3 md:py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-200"
                  >
                    Daily Goal
                  </Button>
                </div>
              </div>

              <div className="w-full overflow-hidden">
                <WeeklyBarChart data={weeklyData} />
              </div>
            </div>

            {/* Right Side - Progress Chart */}
            <div className="space-y-4 sm:space-y-6 border rounded-2xl sm:rounded-[20px] p-3 sm:p-4 md:p-[10px]">
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  className="border-gray-200 text-gray-700 hover:bg-gray-300 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm transition-all duration-200"
                  onClick={handlePeriodChange}
                >
                  <span className="truncate max-w-[80px] sm:max-w-none">{selectedPeriod}</span>
                  <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 flex-shrink-0" />
                </Button>
              </div>

              <div className="text-center space-y-4 sm:space-y-6 md:space-y-8">
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 leading-tight">
                    Todays
                    <br />
                    Progress
                  </h3>

                  <div className="flex justify-center items-center">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
                      <CircularProgressChart progress={todayProgress} />
                    </div>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <p className="text-black font-bold text-sm sm:text-base leading-relaxed px-2">
                    Finish todays program
                    <br />
                    and get
                  </p>

                  <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                    <RiVipDiamondFill className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 fill-blue-500 flex-shrink-0" />
                    <span className="text-xl sm:text-2xl font-bold text-gray-900">10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
