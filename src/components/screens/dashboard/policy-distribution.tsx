"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/atoms/chart"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"

const data = [
  { name: "Auto", value: 400 },
  { name: "Home", value: 300 },
  { name: "Life", value: 200 },
  { name: "Health", value: 100 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

export function PolicyDistribution() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Policy Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            auto: {
              label: "Auto",
              color: COLORS[0],
            },
            home: {
              label: "Home",
              color: COLORS[1],
            },
            life: {
              label: "Life",
              color: COLORS[2],
            },
            health: {
              label: "Health",
              color: COLORS[3],
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

