"use client"
import { Card, CardBody, Progress } from "@heroui/react"
import { LiaBookSolid } from "react-icons/lia"
import { MdPlayCircle } from "react-icons/md"
import { PiUsersThreeFill } from "react-icons/pi"

interface CourseCardProps {
  title: string
  instructor: string
  duration: string
  progress: number
  completion: string
  students: string
  lessons: number
}

export function CourseCard({ title, instructor, duration, progress, completion, students, lessons }: CourseCardProps) {
  return (
    <Card className="mb-3 bg-gray-100 shadow-none">
      <CardBody className="p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
          {/* 1 div */}
          <div className="w-full sm:w-auto">
            <h3 className="font-bold text-gray-900 text-sm sm:text-base">{title}</h3>
            <p className="text-xs sm:text-sm text-gray-600">By {instructor}</p>
          </div>

          {/* 2 div */}
          <div className="text-left mt-1 sm:mt-0">
            <p className="text-xs text-gray-500">Duration</p>
            <p className="text-xs sm:text-sm text-black font-bold">{duration}</p>
          </div>

          {/* 3 div */}
          <div className="mt-2 sm:mt-4 w-full sm:w-auto flex items-center gap-2 sm:gap-3">
            <div className="font-bold text-xs sm:text-sm w-8 sm:w-10">{progress}%</div>
            <div className="flex-1 bg-gray-200 rounded-full h-2 w-full sm:w-[129px]">
              <Progress aria-label="Loading..." color="success" value={progress} />
            </div>
            <div className="font-bold text-xs sm:text-sm">{completion}</div>
          </div>

          {/* 4 div */}
          <div className="mt-2 sm:mt-4 flex gap-3 sm:gap-4 w-full sm:w-auto justify-start">
            <div className="flex items-center gap-1">
              <span className="text-gray-400">
                <PiUsersThreeFill />
              </span>
              <span className="text-xs sm:text-sm text-blue-700 font-medium">{students}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-gray-400">
                <LiaBookSolid />
              </span>
              <span className="text-xs sm:text-sm font-medium">{lessons}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-gray-400 rounded-full">
                <MdPlayCircle />
              </span>
              <span className="text-xs sm:text-sm font-medium">50</span>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
