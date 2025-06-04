"use client";

import { Card, CardBody } from "@heroui/react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

interface StatCardProps {
  title: string;
  value: number | string;
  type: "streak" | "projects" | "points";
}

export function StatCard({ title, value, type }: StatCardProps) {
  const getIcon = () => {
    switch (type) {
      case "streak":
        return "🔥";
      case "projects":
        return "📦";
      case "points":
        return "💎";
      default:
        return "⭐";
    }
  };

  const getWaveColor = () => {
    switch (type) {
      case "streak":
        return "#F5AC00";
      case "projects":
        return "#C11574";
      case "points":
        return "#1260CC";
      default:
        return "#F5AC00";
    }
  };

  // dummy data for mini wave
  const dummyData = [
    { x: 0, value: 0 },
    { x: 1, value: 10 },
    { x: 2, value: 6 },
    { x: 3, value: 12 },
    { x: 4, value: 8 },
    { x: 5, value: 14 },
    { x: 6, value: 10 },
  ];

  return (
    <Card
      className={`bg-white rounded-[20px] shadow-x-md hover:shadow-lg transition-shadow duration-300 hover:rounded-[15px]
    `}
      style={{ boxShadow: "2px 5px 8px rgba(0, 0, 0, 0.6)" }}
    >
      <CardBody className="p-4">
        {/* main div */}
        <div className="flex flex-col">
          <p className=" text-sm font-medium text-black sm:text-gray-700 mb-1">{title}</p>

          {/* value and icon */}
          <div className="flex  justify-between flex-row items-center">
            {/* value */}
            <div className="flex gap-1">
              <h1 className="text-2xl sm:text-3xl font-bold">{value}</h1>
              <div className="mt-1 flex flex-col items-center">
              
                <div className="w-10 h-6 -mb-1">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={dummyData}>
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke={getWaveColor()}
                        strokeWidth={2}
                        fill="none"
                        dot={false}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-500 leading-0 ">than last days</p>
              </div>
            </div>

            {/* icon */}
            <div
              className={` rounded-full p-1.5 text-xl w-10 h-10 flex items-center justify-center mt-2 sm:mt-0
              ${type === "streak" ? "bg-[#facd63]" : ""} 
              ${type === "projects" ? "bg-[#f574bb]" : ""} 
              ${type === "points" ? "bg-[#71a3eb]" : ""}`}
            >
              {getIcon()}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
