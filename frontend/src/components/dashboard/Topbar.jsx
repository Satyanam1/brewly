import React, { useEffect, useState } from "react";

const Topbar = ({ setIsOpen }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("access_token");

      if (!token) return;

      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/auth/profile/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch profile");
        }

        const data = await response.json();

        setUser(data);
      } catch (error) {
        console.error("Profile error:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 md:px-8">

      {/* Left Side */}
      <div className="flex items-center gap-3">

        <button
          onClick={() => setIsOpen(true)}
          className="text-2xl text-gray-700 md:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>

        <h1 className="text-lg font-semibold text-gray-900">
          Overview
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4 md:gap-5">

        {/* Notification */}
        <button className="relative text-gray-600 hover:text-gray-900">
          <span className="text-xl">🔔</span>

          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
            2
          </span>
        </button>

        {/* User */}
        <div className="flex items-center gap-3 border-l border-gray-200 pl-4 md:pl-5">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0F5132] text-sm font-semibold text-white">
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-900">
              {user?.name || "Loading..."}
            </p>

            <p className="text-xs text-gray-500">
              {user?.cafe_name || "Your Cafe"}
            </p>
          </div>

        </div>

      </div>
    </header>
  );
};

export default Topbar;