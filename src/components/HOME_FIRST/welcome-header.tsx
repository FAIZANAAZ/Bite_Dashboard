"use client"
import Image from "next/image"

export function WelcomeHeader() {
  // Data stays in component
  const userName = "Lisa"
  const goalCompletion = 100

  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="relative w-10 h-10">
        <Image
          src="/logo.png"
          alt="Mascot"
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <div>
        <h2 className="text-base md:text-[20px] font-medium text-gray-900">Welcome back, {userName}!</h2>
        <p className="text-sm md:text-[14px] text-blue-500"><span className="text-black">You have completed </span>{goalCompletion}% of your goal this week!</p>
      </div>
    </div>
  )
}
