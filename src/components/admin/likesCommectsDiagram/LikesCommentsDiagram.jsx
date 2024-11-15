"use client";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Meat",
    likes: 430000,
    comments: 600000,
  },
  {
    name: "Fish",
    likes: 320000,
    comments: 345000,
  },
  {
    name: "Poultry",
    likes: 735000,
    comments: 900000,
  },
  {
    name: "Sweets",
    likes: 620000,
    comments: 821300,
  },
  {
    name: "Pastry",
    likes: 450000,
    comments: 645000,
  },
  {
    name: "Soup",
    likes: 421875,
    comments: 984321,
  },
  {
    name: "Rice",
    likes: 651213,
    comments: 145213,
  },
  {
    name: "Sandwichs",
    likes: 875432,
    comments: 965412,
  },
];

const LikesCommentsDiagram = () => {
  return (
    <div className="p-4 rounded-lg bg-white h-[400px] w-full">
      {/* title */}
      <h1 className="text-lg text-dark-gray font-semibold mb-4">
        Likes and comments per category
      </h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
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
          <Bar dataKey="likes" stackId="a" fill="#FB9300" />
          <Bar dataKey="comments" stackId="a" fill="#0D1047" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LikesCommentsDiagram;
