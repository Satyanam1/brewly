import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {

  const container = useRef(null);

 useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container.current,
      start: "top 30%",
      end: "+=500",
      scrub: 1,
      
    },
  });

  tl.from(".feature-card", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });
}, { scope: container });

  const features = [
    {
      icon: "📦",
      title: "Order Management",
      description:
        "Manage dine-in, takeaway and online orders from one simple interface.",
    },
    {
      icon: "📋",
      title: "Menu Management",
      description:
        "Create, update and organize your café menu with ease.",
    },
    {
      icon: "📊",
      title: "Sales Analytics",
      description:
        "Track revenue, orders and business performance with clear insights.",
    },
    {
      icon: "📦",
      title: "Inventory Tracking",
      description:
        "Keep track of ingredients and stock before you run out.",
    },
    {
      icon: "👥",
      title: "Staff Management",
      description:
        "Manage your café team, roles and daily operations efficiently.",
    },
    {
      icon: "💳",
      title: "Payments & Billing",
      description:
        "Handle bills and payments while keeping your transactions organized.",
    },
  ];

  return (
    <section ref={container} id="features" className="bg-white px-6 py-20 lg:py-24" >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold text-[#0F5132]">
            Everything you need
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Run your café
            <span className="text-[#0F5132]"> smarter.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Brewly brings your café's daily operations together
            in one powerful and easy-to-use platform.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div            
            key={feature.title}
              className="feature-card rounded-3xl border border-gray-200 bg-[#FAF9F6] p-6 transition-colors duration-300 hover:border-[#0F5132]/30 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;