"use client"

import { Card, CardBody, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react"
import { ChevronDown } from "lucide-react"

// Generate mock contribution data
const generateContributionData = () => {
  const data: { [key: string]: number } = {}
  const startDate = new Date("2024-01-01")
  const endDate = new Date("2024-12-31")

  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split("T")[0]
    data[dateStr] = Math.floor(Math.random() * 5) // 0-4 contribution levels
  }

  return data
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const weekdays = ["Mon", "Wed", "Fri", "Sun"]

const getContributionLevel = (count: number): string => {
  if (count === 0) return "bg-gray-100"
  if (count === 1) return "bg-green-200"
  if (count === 2) return "bg-green-400"
  if (count === 3) return "bg-green-600"
  return "bg-green-800"
}

const getWeeksInYear = (year: number) => {
  const weeks: Date[][] = []
  const startDate = new Date(year, 0, 1)

  // Find the first Monday of the year or the Monday of the week containing Jan 1
  const firstMonday = new Date(startDate)
 

  const currentDate = new Date(firstMonday)

  for (let week = 0; week < 53; week++) {
    const weekDays: Date[] = []
    for (let day = 0; day < 7; day++) {
      weekDays.push(new Date(currentDate))
      currentDate.setDate(currentDate.getDate() + 1)
    }
    weeks.push(weekDays)

    // Stop if we've gone into the next year
    if (currentDate.getFullYear() > year) break
  }

  return weeks
}

export default function ContributionCalendar() {
  const contributionData = generateContributionData()
  const weeks = getWeeksInYear(2024)

  return (
    <Card className="w-full bg-white shadow-sm">
      <CardBody className="p-6">
        {/* Header with dropdown */}
     <div className="flex items-center justify-between mb-4">
         <h2 className="text-xl font-bold">Activity Graph</h2>

        <div className="flex justify-end mb-4">
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="light"
                className="text-sm text-gray-600 font-normal"
                endContent={<ChevronDown size={16} />}
              >
                Monthly
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Time period">
              <DropdownItem key="monthly">Monthly</DropdownItem>
              <DropdownItem key="weekly">Weekly</DropdownItem>
              <DropdownItem key="daily">Daily</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
     </div>

        {/* Calendar container */}
        <div className="overflow-x-auto">
          <div className="min-w-[52rem]">
            {/* Month labels */}
            <div className="flex mb-2">
              <div className="w-8"></div> {/* Space for weekday labels */}
              {months.map((month) => (
                <div
                  key={month}
                  className="flex-1 text-xs text-black font-medium text-center"
                  style={{ minWidth: "4.33rem" }}
                >
                  {month}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="flex">
              {/* Weekday labels */}
              <div className="flex flex-col w-8 mr-2">
                <div className=" "></div> {/* Spacer for alignment */}
                {weekdays.map((day) => (
                  <div key={day} className="h-3 mb-4 flex items-center">
                    <span className="text-xs text-black font-medium">{day}</span>
                  </div>
                ))}
              </div>

              {/* Contribution squares */}
              <div className="flex gap-1">
                {weeks.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-1">
                    {week.map((date, dayIndex) => {
                      const dateStr = date.toISOString().split("T")[0]
                      const contributionCount = contributionData[dateStr] || 0
                      const isCurrentYear = date.getFullYear() === 2024

                      return (
                        <div
                          key={`${weekIndex}-${dayIndex}`}
                          className={`w-3 h-3 rounded-sm border border-gray-200 ${
                            isCurrentYear ? getContributionLevel(contributionCount) : "bg-gray-50"
                          }`}
                          title={`${date.toDateString()}: ${contributionCount} contributions`}
                        />
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-end mt-4 gap-2">
          <span className="text-xs text-black font-medium">Less</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-sm bg-gray-100 border border-gray-200"></div>
            <div className="w-3 h-3 rounded-sm bg-green-200 border border-gray-200"></div>
            <div className="w-3 h-3 rounded-sm bg-green-400 border border-gray-200"></div>
            <div className="w-3 h-3 rounded-sm bg-green-600 border border-gray-200"></div>
            <div className="w-3 h-3 rounded-sm bg-green-800 border border-gray-200"></div>
          </div>
          <span className="text-xs text-black font-medium">More</span>
        </div>
      </CardBody>
    </Card>
  )
}
