"use client";

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { tasks } from '../app/(dashboard)/tasks/data/tasks';

const data = [
    { name: 'todo', value: tasks.filter(task => task.status === 'todo').length },
    { name: 'done', value: tasks.filter(task => task.status === 'done').length },
    { name: 'in progress', value: tasks.filter(task => task.status === 'in progress').length },
    { name: 'backlog', value: tasks.filter(task => task.status === 'backlog').length },
    { name: 'canceled', value: tasks.filter(task => task.status === 'canceled').length },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#ff0000'];


  
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function CustomPieChart () {
    return (
        <>

        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={500} height={500}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>

      </ResponsiveContainer>
      
            
      </>

    )
}