import React, { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import StatsCard from "../components/dashboard/StatCard";
import RecentOrders from "../components/dashboard/RecentOrders";
import RevenueChart from "../components/dashboard/RevenueChart";
import PopularItem from "../components/dashboard/PopularItem";


const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF9F6]">

      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <div className="md:ml-64">

        <Topbar
          setIsOpen={setIsOpen}
        />

        <main className="p-5 md:p-8">

          {/* Welcome */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Welcome back, Satyam 👋
            </h2>

            <p className="mt-2 text-sm text-gray-600 md:text-base">
              Here's what's happening with your café today.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

            <StatsCard
              title="Total Revenue"
              value="₹24,580"
              change="+12.5%"
              icon="💵"
            />

            <StatsCard
              title="Total Orders"
              value="128"
              change="+8.2%"
              icon="🛍️"
            />

            <StatsCard
              title="Customers"
              value="342"
              change="+5.4%"
              icon="👥"
            />

            <StatsCard
              title="Avg. Order Value"
              value="₹192"
              change="+3.8%"
              icon="📊"
            />

          </div>

          <div className="mt-8">
           <RecentOrders/>
          </div>

          <div className="mt-8 grid grid-cols gap-6 xl:grid-cols-3">
            <div className="xl:col-span-2">
              <RevenueChart/>
            </div>

            <PopularItem/>
          </div>

        </main>

      </div>

    </div>
  );
};

export default Dashboard;