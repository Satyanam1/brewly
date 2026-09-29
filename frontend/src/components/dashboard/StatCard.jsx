import React from "react";

const StatsCard = ({ title, value, change, icon }) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h3 className="mt-2 text-2xl font-bold text-gray-900">
            {value}
          </h3>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E8F3ED] text-lg">
          {icon}
        </div>
      </div>

      <p className="mt-4 text-sm">
        <span className="font-medium text-green-600">
          {change}
        </span>{" "}
        <span className="text-gray-500">
          from last month
        </span>
      </p>
    </div>
  );
};

export default StatsCard;