import Link from "next/link"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigationItems = [
  {
    name: "HOME",
    image: "/sidebar/side_icon1.png",
    href: "/",
    color: "text-green-500",
    active: true,
  },
  {
    name: "MY COURSES",
    image: "/sidebar/side_icon2.png",
    href: "#",
    color: "text-blue-400",
    active: false,
  },
  {
    name: "PROJECTS",
    image: "/sidebar/side_icon3.png",
    href: "#",
    color: "text-yellow-400",
    active: false,
  },
  {
    name: "EXERCISES",
    image: "/sidebar/side_icon8.png",
    href: "#",
    color: "text-purple-400",
    active: false,
  },
  {
    name: "PROGRAMMING LABS",
    image: "/sidebar/side_icon4.png",
    href: "#",
    color: "text-indigo-400",
    active: false,
  },
  {
    name: "SCHEDULE",
    image: "/sidebar/side_icon5.png",
    href: "#",
    color: "text-blue-500",
    active: false,
  },
  {
    name: "COMMUNITY",
    image: "/sidebar/side_icon6.png",
    href: "#",
    color: "text-amber-500",
    active: false,
  },
  {
    name: "COLLAB",
    image: "/sidebar/side_icon7.png",
    href: "#",
    color: "text-red-500",
    active: false,
  },
]

interface SidebarProps {
  activeItem?: string
}

export default function Sidebar({ activeItem = "HOME" }: SidebarProps) {
  return (
    <div className="flex flex-col h-full w-full max-w-[20rem] bg-white rounded-3xl p-4 shadow-lg relative">
      {/* Mobile close button */}
      <Link
        href="?leftSidebar=false&rightSidebar=false"
        className="md:hidden absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
        aria-label="Close sidebar"
      >
        <X className="h-6 w-6 text-gray-500" />
      </Link>

      <div className="mb-6 px-2">
        <h1 className="text-2xl font-bold text-blue-400">codebite</h1>
      </div>

      <nav className="flex flex-col space-y-3">
        {navigationItems.map((item) => {
          const isActive = activeItem === item.name

          return (
            <Link
              key={item.name}
              href={`${item.href}${item.href === "/" ? "?activeItem=" + item.name : "&activeItem=" + item.name}`}
              className="block"
            >
              <Button
                variant={isActive ? "default" : "ghost"}
                className={`w-full justify-start h-14 rounded-xl font-bold
                     ${
                       isActive
                         ? "text-green-600 border-2 border-green-600 bg-gray-50"
                         : "text-gray-600  border-0 hover:bg-gray-100"
                     }
                `}
              >
                <Image alt="icon" src={item.image || "/placeholder.svg"} width={24} height={24} className="mr-2" />
                <span className={`font-medium ${isActive ? "text-green-600" : ""}`}>{item.name}</span>
              </Button>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
