import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
} from "recharts";

const Areachart = () => {
  const Data = [
    {
      name: "Page-A",
      uv: 4000,
      pv: 1000,
    },
    {
      name: "Page-B",
      uv: 3000,
      pv: 980,
    },
    {
      name: "Page-C",
      uv: 1000,
      pv: 1500,
    },
    {
      name: "Page-D",
      uv: 500,
      pv: 2500,
    },
    {
      name: "Page-E",
      uv: 1000,
      pv: 3400,
    },
    {
      name: "Page-F",
      uv: 1500,
      pv: 2200,
    },
    {
      name: "Page-G",
      uv: 2500,
      pv: 1700,
    },
    {
      name: "Page-H",
      uv: 3000,
      pv: 1350,
    },
  ];
  return (
    <>
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart
          width={730}
          height={250}
          data={Data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="red"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default Areachart;
