import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import "./graph.css";

function Graph({ width, height, data, xKey, yKey }) {
  return (
    <div className="bguest__graph">
      <LineChart
        width={width}
        height={height}
        data={data}
      >
        <Line type="monotone" dataKey={yKey} stroke="#E04648" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey={xKey} />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
}

export default Graph;
