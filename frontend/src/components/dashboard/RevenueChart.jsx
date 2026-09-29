import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RevenueChart = () => {
  const data = [
    { day: "Mon", revenue: 3200 },
    { day: "Tue", revenue: 4100 },
    { day: "Wed", revenue: 3600 },
    { day: "Thu", revenue: 5200 },
    { day: "Fri", revenue: 4800 },
    { day: "Sat", revenue: 6200 },
    { day: "Sun", revenue: 5700 },
  ];

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      
      {/* Header */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900">
          Revenue Overview
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Revenue generated this week
        </p>
      </div>

      {/* Chart */}
      <div className="mt-6 h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip
              formatter={(value) => [`₹${value}`, "Revenue"]}
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#0F5132"
              strokeWidth={3}
              dot={{ r: 4 }}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default RevenueChart;