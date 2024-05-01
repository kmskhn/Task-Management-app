"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { tasks } from "../app/(dashboard)/tasks/data/tasks"

const data = [
    {
      name: "Jan",
      total: tasks.filter(task => task.month === "Jan").length,
    },
    {
      name: "Feb",
      total: tasks.filter(task => task.month === "Feb").length,
    },
    {
      name: "Mar",
      total: tasks.filter(task => task.month === "Mar").length,
    },
    {
      name: "Apr",
      total: tasks.filter(task => task.month === "Apr").length,
    },
    {
      name: "May",
      total: tasks.filter(task => task.month === "May").length,
    },
    {
      name: "Jun",
      total: tasks.filter(task => task.month === "Jun").length,
    },
    {
      name: "Jul",
      total: tasks.filter(task => task.month === "Jul").length,
    },
    {
      name: "Aug",
      total: tasks.filter(task => task.month === "Aug").length,
    },
    {
      name: "Sep",
      total: tasks.filter(task => task.month === "Sep").length,
    },
    {
      name: "Oct",
      total: tasks.filter(task => task.month === "Oct").length,
    },
    {
      name: "Nov",
      total: tasks.filter(task => task.month === "Nov").length,
    },
    {
      name: "Dec",
      total: tasks.filter(task => task.month === "Dec").length,
    },
  ];
  

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}