import React from "react";

const PopularItems = () => {
  const items = [
    {
      name: "Cappuccino",
      orders: 48,
      percentage: 32,
      icon: "☕",
    },
    {
      name: "Cold Coffee",
      orders: 36,
      percentage: 24,
      icon: "🥤",
    },
    {
      name: "Cheesecake",
      orders: 27,
      percentage: 18,
      icon: "🍰",
    },
    {
      name: "Sandwich",
      orders: 22,
      percentage: 15,
      icon: "🥪",
    },
  ];

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">

      {/* Header */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900">
          Popular Items
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Best selling items this week
        </p>
      </div>

      {/* Items */}
      <div className="mt-6 space-y-5">
        {items.map((item) => (
          <div key={item.name}>

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E8F3ED] text-lg">
                  {item.icon}
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {item.name}
                  </p>

                  <p className="text-xs text-gray-500">
                    {item.orders} orders
                  </p>
                </div>
              </div>

              <span className="text-sm font-semibold text-gray-700">
                {item.percentage}%
              </span>

            </div>

            {/* Progress Bar */}
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-[#0F5132]"
                style={{ width: `${item.percentage}%` }}
              />
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default PopularItems;