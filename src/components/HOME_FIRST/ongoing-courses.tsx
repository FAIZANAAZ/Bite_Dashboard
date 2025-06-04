import { CourseCard } from "@/components/HOME_FIRST/prograsscard"

export function OngoingCourses() {
  // Data stays in component
  const courses = [
    {
      id: "1",
      title: "Android Developer",
      instructor: "Instructor Name",
      duration: "24 hrs 13 mins",
      progress: 48,
      completion: "5/8",
      students: "1K+",
      lessons: 16,
    },
    {
      id: "2",
      title: "Flutter Developer",
      instructor: "Instructor Name",
      duration: "24 hrs 13 mins",
      progress: 48,
      completion: "5/8",
      students: "1K+",
      lessons: 16,
    },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Ongoing Courses</h2>
      <div className="space-y-3">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            instructor={course.instructor}
            duration={course.duration}
            progress={course.progress}
            completion={course.completion}
            students={course.students}
            lessons={course.lessons}
          />
        ))}
      </div>
    </div>
  )
}
