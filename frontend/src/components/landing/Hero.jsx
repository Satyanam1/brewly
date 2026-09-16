import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

const Hero = () => {

  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".hero-badge", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    })
    .from(".hero-title", {
      y: 40,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
    }, "-=0.3")
    .from(".hero-description", {
      y: 25,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.3")
    .from(".hero-buttons", {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.3")
    .from(".hero-dashboard", {
      x: 60,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.5");

  }, { scope: container });

  return (
    <section
      ref={container}
      className="min-h-[calc(100vh-73px)] bg-[#FAF9F6]"
    >

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-24">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <div className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full border border-[#0F5132]/20 bg-white px-4 py-2 text-sm font-medium text-[#0F5132]">
            <span className="h-2 w-2 rounded-full bg-[#0F5132]"></span>
            Built for modern cafés
          </div>

          {/* Heading */}
          <h1 className="hero-title max-w-xl text-5xl font-bold leading-tight tracking-tight text-[#1F2933] sm:text-6xl">
            Your café,
            <span className="block text-[#0F5132]">
              simplified.
            </span>
          </h1>

          {/* Description */}
          <p className="hero-description mt-6 max-w-lg text-lg leading-8 text-gray-600">
            Manage orders, menus, inventory, staff and business
            insights from one simple and powerful platform.
          </p>

          {/* Buttons */}
          <div className="hero-buttons mt-8 flex flex-col gap-4 sm:flex-row">

            <Link
              to="/register"
              className="rounded-full bg-[#0F5132] px-6 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:bg-[#083C2B]"
            >
              Get Started
            </Link>

            <Link
              to="/features"
              className="rounded-full border border-gray-300 bg-white px-6 py-3 text-center text-sm font-semibold text-[#1F2933] transition duration-300 hover:border-[#0F5132] hover:text-[#0F5132]"
            >
              Explore Brewly
            </Link>

          </div>

        </div>


        {/* RIGHT DASHBOARD PREVIEW */}
        <div className="hero-dashboard">

          <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-2xl shadow-black/10">

            {/* Dashboard Header */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">

              <div>
                <p className="text-xs text-gray-500">
                  Welcome back
                </p>

                <h2 className="mt-1 text-lg font-semibold text-[#1F2933]">
                  Café Overview
                </h2>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FAF9F6]">
                ☕
              </div>

            </div>


            {/* Stats */}
            <div className="mt-4 grid grid-cols-2 gap-3">

              <div className="rounded-2xl bg-[#FAF9F6] p-4">
                <p className="text-xs text-gray-500">
                  Today's Revenue
                </p>

                <p className="mt-2 text-xl font-bold text-[#0F5132]">
                  ₹48,250
                </p>

                <p className="mt-1 text-xs text-green-600">
                  +12.5%
                </p>
              </div>


              <div className="rounded-2xl bg-[#FAF9F6] p-4">
                <p className="text-xs text-gray-500">
                  Orders
                </p>

                <p className="mt-2 text-xl font-bold text-[#1F2933]">
                  128
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Today
                </p>
              </div>

            </div>


            {/* Orders */}
            <div className="mt-4 rounded-2xl border border-gray-100 p-4">

              <div className="mb-4 flex items-center justify-between">

                <h3 className="text-sm font-semibold text-[#1F2933]">
                  Recent Orders
                </h3>

                <span className="text-xs text-[#0F5132]">
                  View all
                </span>

              </div>


              <div className="space-y-3">

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FAF9F6]">
                      ☕
                    </span>

                    <div>
                      <p className="text-sm font-medium">
                        Cappuccino
                      </p>

                      <p className="text-xs text-gray-500">
                        Order #1024
                      </p>
                    </div>
                  </div>

                  <span className="text-sm font-semibold">
                    ₹240
                  </span>
                </div>


                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FAF9F6]">
                      🥐
                    </span>

                    <div>
                      <p className="text-sm font-medium">
                        Croissant
                      </p>

                      <p className="text-xs text-gray-500">
                        Order #1023
                      </p>
                    </div>
                  </div>

                  <span className="text-sm font-semibold">
                    ₹180
                  </span>
                </div>


                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FAF9F6]">
                      🧋
                    </span>

                    <div>
                      <p className="text-sm font-medium">
                        Cold Coffee
                      </p>

                      <p className="text-xs text-gray-500">
                        Order #1022
                      </p>
                    </div>
                  </div>

                  <span className="text-sm font-semibold">
                    ₹210
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;