"use client"
import { StatCard } from "@/components/stat-card"

export function StatsSection() {
  // Data stays in component
  const stats = {
    streak: 25,
    projects: 25,
    points: 25,
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      <StatCard title="Highest Streak" value={stats.streak} type="streak" />
      <StatCard title="Projects Completed" value={stats.projects} type="projects" />
      <StatCard title="Total Points" value={stats.points} type="points" />
      <StatCard title="Highest Streak" value={stats.streak} type="streak" />
    </div>
  )
}
