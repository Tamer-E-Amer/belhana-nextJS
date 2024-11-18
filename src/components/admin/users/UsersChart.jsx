"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    men: 4000,
    women: 2400,
    amt: 2400,
  },
  {
    name: "February",
    men: 3000,
    women: 1398,
    amt: 2210,
  },
  {
    name: "Mars",
    men: 2000,
    women: 9800,
    amt: 2290,
  },
  {
    name: "April",
    men: 2780,
    women: 3908,
    amt: 2000,
  },
  {
    name: "May",
    men: 1890,
    women: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    men: 2390,
    women: 3800,
    amt: 2500,
  },
  {
    name: "July",
    men: 3490,
    women: 4300,
    amt: 2100,
  },
  {
    name: "August",
    men: 6540,
    women: 7420,
    amt: 2100,
  },
  {
    name: "September",
    men: 2142,
    women: 7420,
    amt: 2100,
  },
  {
    name: "October",
    men: 2450,
    women: 4300,
    amt: 2100,
  },
  {
    name: "November",
    men: 4620,
    women: 8230,
    amt: 2100,
  },
  {
    name: "December",
    men: 4420,
    women: 6430,
    amt: 2100,
  },
];
const UserChart = () => {
  return (
    <div className="w-full bg-white p-4 h-[630px] rounded-md">
      <ResponsiveContainer width="100%" height={580}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="women"
            stroke="#FB9300"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="men" stroke="#0D1047" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserChart;
