"use client";
// components/CourseCards.tsx
import { Card, CardBody, Progress, Avatar, Chip } from "@heroui/react";

interface CourseData {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  weeksLeft: number;
  progress: number;
  progressColor: "warning" | "success" | "primary" | "default" | "secondary" | "danger";
  avatarSrc: string;
  description: string;
}

const CourseCards = () => {

  const courses: CourseData[] = [
    {
      id: 1,
      title: "Web Design",
      subtitle: "Design Learn Management ",
      category: "UI/UX Design",
      weeksLeft: 6,
      progress: 55,
      progressColor: "warning",
      avatarSrc: "/carddp.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ."
    },
    {
      id: 2,
      title: "Web Development",
      subtitle: "Design Learn Management ",
      category: "javascript",
      weeksLeft: 6,
      progress: 55,
      progressColor: "success",
      avatarSrc: "/carddp.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ."
    },
    {
      id: 3,
      title: "CSS & HTML",
      subtitle: "Design Learn Management ",
      category: "UI/UX Design",
      weeksLeft: 6,
      progress: 55,
      progressColor: "primary",
      avatarSrc: "/carddp.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ."
    }
  ];

  return (
    <div className="container mx-auto px-4 my-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {courses.map((course) => (
          <Card 
            key={course.id}
            className="w-full bg-white rounded-[24px] shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 "
          >
            <CardBody className="p-6">
              
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-sm sm:text-xl font-bold text-gray-900 mb-1">
                  {course.title}
                </h3>
                <p className="text-[10px] sm:text-sm text-gray-400 mb-3">
                  {course.subtitle}
                </p>
                <Chip 
                  size="sm" 
                  variant="flat"
                  className="bg-gray-100 text-gray-700 text-xs"
                >
                  {course.category}
                </Chip>
              </div>

              {/* Progress Section */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-900">
                    {course.weeksLeft} Weeks Left
                  </span>
                </div>

                <Progress 
                  value={course.progress}
                  color={course.progressColor}
                  size="md"
                  className="mb-1"
                />
                
                <span className="w-full flex justify-end text-sm font-medium text-gray-900 text-right">
                    {course.progress}% Completed
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 text-center leading-[20px] mb-6 line-clamp-4">
                {course.description}
              </p>

              {/* Footer with Avatar */}
              <div className="flex items-center">
                <Avatar
                  src={course.avatarSrc}
                  size="sm"
                  className="w-8 h-8"
                />
              </div>
            </CardBody>
          </Card>
        ))}
        
      </div>
    </div>
  );
};

export default CourseCards;