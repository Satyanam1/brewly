import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const navItems = [
    { name: "Overview", path: "/dashboard" },
    { name: "Orders", path: "/dashboard/orders" },
    { name: "Menu", path: "/dashboard/menu" },
    { name: "Customers", path: "/dashboard/customers" },
    { name: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-64 border-r border-gray-200 bg-white px-5 py-6 transition-transform duration-300
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }
        md:translate-x-0`}
      >
        {/* Logo */}
        <Link
          to="/dashboard"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2"
        >
          <span className="text-2xl">☕</span>

          <span className="text-2xl font-bold text-[#0F5132]">
            Brewly
          </span>
        </Link>

        {/* Navigation */}
        <nav className="mt-10 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-[#0F5132] text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
          
          {/* Logout */}
          <div className="absolute bottom-6  ">
            <button onClick={()=> {
              localStorage.removeItem("access_token");
              localStorage.removeItem("refresh_token");
              window.location.href = "/";
            }} className="w-full rounded-lg text-left text-sm  px-4 py-2 font-medium text-red-600 transition hover:bg-red-50">
              Logout
            </button>
          </div>

      </aside>
    </>
  );
};

export default Sidebar;