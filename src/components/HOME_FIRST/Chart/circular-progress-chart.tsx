"use client"

import { useState, useEffect } from "react"

interface CircularProgressChartProps {
  progress: number
}

export function CircularProgressChart({ progress }: CircularProgressChartProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0)

  const radius = 80
  const strokeWidth = 8
  const normalizedRadius = radius - strokeWidth * 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDasharray = `${circumference} ${circumference}`
  const strokeDashoffset = circumference - (animatedProgress / 100) * circumference

  // Animate progress changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress)
    }, 100)

    return () => clearTimeout(timer)
  }, [progress])

  return (
    <div className="relative inline-block w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
      {/* Background decorative dots */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full relative">
          <div className="absolute top-[8%] right-[17%] w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
          <div className="absolute top-[25%] right-[8%] w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-300 rounded-full"></div>
          <div className="absolute bottom-[17%] left-[8%] w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
          <div className="absolute bottom-[33%] left-[17%] w-0.5 h-0.5 sm:w-1 sm:h-1 bg-green-300 rounded-full"></div>
          <div className="absolute top-[17%] left-[25%] w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-300 rounded-full"></div>
          <div className="absolute bottom-[8%] right-[25%] w-0.5 h-0.5 sm:w-1 sm:h-1 bg-green-300 rounded-full"></div>
        </div>
      </div>

      <svg
        className="w-full h-full transform -rotate-90"
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Background circle */}
        <circle
          stroke="#E5E7EB"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* Progress circle */}
        <circle
          stroke="#22C55E"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          style={{
            strokeDashoffset,
            transition: "stroke-dashoffset 0.8s ease-in-out",
          }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            {Math.round(animatedProgress)}%
          </div>
          <div className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">of 100</div>
        </div>
      </div>
    </div>
  )
}

// Demo component to show the responsive chart
export default function Component() {
  const [progress, setProgress] = useState(75)

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-12">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">Progress Chart</h2>
          <p className="text-sm sm:text-base text-gray-600">Fully responsive circular progress indicator</p>
        </div>

        <div className="flex justify-center mb-6 sm:mb-8">
          <CircularProgressChart progress={progress} />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">Progress: {progress}%</label>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
