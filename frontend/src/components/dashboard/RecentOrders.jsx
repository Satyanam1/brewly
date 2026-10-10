import React, { useEffect, useState } from "react";

const RecentOrders = () => {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  

  useEffect(() => {
  const fetchOrders = async () => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      setError("Authentication required");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/orders/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch orders");
      }

      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error("Orders error:", error);
      setError("Unable to load orders");
    } finally {
      setLoading(false);
    }
  };

  fetchOrders();
}, []);


  


return (
  <div className="rounded-xl border border-gray-200 bg-white">

    {/* Header */}
    <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">
          Recent Orders
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Your latest café orders
        </p>
      </div>

      <button className="text-sm font-medium text-[#0F5132] hover:underline">
        View All
      </button>
    </div>

    {/* Orders */}
    <div className="overflow-x-auto">
      <table className="min-w-[700px] w-full">

        <thead>
          <tr className="border-b border-gray-200 text-left text-sm text-gray-500">
            <th className="px-5 py-4 font-medium">Order</th>
            <th className="px-5 py-4 font-medium">Customer</th>
            <th className="px-5 py-4 font-medium">Items</th>
            <th className="px-5 py-4 font-medium">Amount</th>
            <th className="px-5 py-4 font-medium">Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-b border-gray-100 last:border-none"
            >
              <td className="px-5 py-4 text-sm font-medium text-gray-900">
                {order.id}
              </td>

              <td className="px-5 py-4 text-sm text-gray-600">
                {order.customer_name}
              </td>

              <td className="px-5 py-4 text-sm text-gray-600">
                {order.items?.[0]?.menu_item_name || "No items"}
              </td>

              <td className="px-5 py-4 text-sm font-medium text-gray-900">
                {order.total_amount}
              </td>

              <td className="px-5 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${order.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : order.status === "Preparing"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  </div>
);
};

export default RecentOrders;