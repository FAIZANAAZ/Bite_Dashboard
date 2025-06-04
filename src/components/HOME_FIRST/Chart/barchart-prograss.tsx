"use client"

import { useState, useRef, useEffect } from "react"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts"
import { RiVipDiamondFill } from "react-icons/ri"

interface DayData {
  day: string
  value: number
  hasIcon?: boolean
  duration?: string
}

interface WeeklyBarChartProps {
  data: DayData[]
}

const defaultData: DayData[] = [
  { day: "Mon", value: 60, duration: "45 min" },
  { day: "Tue", value: 40, duration: "25 min" },
  { day: "Wed", value: 85, duration: "60 min" },
  { day: "Thu", value: 65, duration: "30 min" },
  { day: "Fri", value: 80, duration: "50 min" },
  { day: "Sat", value: 50, duration: "35 min" },
  { day: "Sun", value: 40, duration: "20 min" },
]

export function WeeklyBarChart({ data = defaultData }: WeeklyBarChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [clickedIndex, setClickedIndex] = useState<number | null>(null)
  const [barPositions, setBarPositions] = useState<{ x: number; y: number; width: number }[]>([])
  const chartRef = useRef<HTMLDivElement>(null)

  // Find the highest value to show diamond icon
  const maxValue = Math.max(...data.map((item) => item.value))
  const maxIndex = data.findIndex((item) => item.value === maxValue)

  const handleBarClick = (index: number) => {
    setClickedIndex(clickedIndex === index ? null : index)
  }

  const getBarColor = (value: number) => {
    if (value >= 80) {
      return "#58CC02" // Green-500 for high values
    } else if (value >= 60) {
      return "#58CC02" // Green-400
    } else if (value >= 40) {
      return "#58CC0238" // Green-300
    } else {
      return "#58CC0238" // Green-200 for low values
    }
  }

  // Calculate bar positions after render
  useEffect(() => {
    if (!chartRef.current) return

    const updateBarPositions = () => {
      const chartContainer = chartRef.current
      if (!chartContainer) return

      const barElements = chartContainer.querySelectorAll(".recharts-bar-rectangle")
      const newPositions = Array.from(barElements).map((bar) => {
        const rect = bar.getBoundingClientRect()
        const containerRect = chartContainer.getBoundingClientRect()

        return {
          x: rect.x - containerRect.x + rect.width / 2,
          y: rect.y - containerRect.y,
          width: rect.width,
        }
      })

      setBarPositions(newPositions)
    }

    // Initial calculation
    setTimeout(updateBarPositions, 100)

    // Update on resize
    const resizeObserver = new ResizeObserver(updateBarPositions)
    resizeObserver.observe(chartRef.current)

    return () => {
      if (chartRef.current) {
        resizeObserver.unobserve(chartRef.current)
      }
    }
  }, [data])

  return (
    <div className="relative w-full" ref={chartRef}>
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 40, right: 5, left: 5, bottom: 5 }}>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 14, fill: "#6B7280" }}
              className="text-black"
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 14, fill: "#6B7280" }}
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
            />

            <Bar
              dataKey="value"
              radius={[4, 4, 0, 0]}
              barSize={12}
              onMouseEnter={(_, index) => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={(_, index) => handleBarClick(index)}
              className="cursor-pointer"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(entry.value)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        {/* Diamond icon for highest value */}
        {maxIndex !== -1 && barPositions[maxIndex] && (
          <div
            className="absolute text-blue-500"
            style={{
              left: `${barPositions[maxIndex].x}px`,
              top: `${barPositions[maxIndex].y - 20}px`,
              transform: "translateX(-50%)",
            }}
          >
            <RiVipDiamondFill className="w-6 h-6 text-blue-500 fill-blue-500" />
          </div>
        )}

        {/* Hover tooltip */}
        {hoveredIndex !== null && barPositions[hoveredIndex] && (
          <div
            className="absolute bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium shadow-lg pointer-events-none"
            style={{
              left: `${barPositions[hoveredIndex].x}px`,
              top: `${barPositions[hoveredIndex].y - 8}px`,
              transform: "translateX(-50%)",
            }}
          >
            {data[hoveredIndex].duration || "30 min"}
          </div>
        )}

        {/* Click tooltip */}
        {clickedIndex !== null && barPositions[clickedIndex] && (
          <div
            className="absolute bg-gray-800 text-white px-2 py-1 rounded text-xs font-medium shadow-lg"
            style={{
              left: `${barPositions[clickedIndex].x}px`,
              top: `${barPositions[clickedIndex].y - 8}px`,
              transform: "translateX(-50%)",
            }}
          >
            {data[clickedIndex].duration || "30 min"}
          </div>
        )}
      </div>
    </div>
  )
}
