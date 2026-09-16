import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {

  return (
    <section
     
      id="pricing"
      className="bg-white px-6 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold text-[#0F5132]">
            Simple pricing
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Plans that grow with your
            <span className="text-[#0F5132]"> café.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Start with the essentials and upgrade when your
            café needs more powerful tools.
          </p>

        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {/* Starter */}
         <div className="pricing-card rounded-3xl border border-gray-200 bg-[#FAF9F6] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <h3 className="text-xl font-semibold text-gray-900">
              Starter
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Everything you need to get started.
            </p>

            <div className="mt-6">
              <span className="text-4xl font-bold text-gray-900">
                ₹0
              </span>

              <span className="text-gray-500">
                /month
              </span>
            </div>

            <button className="mt-8 w-full rounded-full border border-[#0F5132] px-5 py-3 text-sm font-semibold text-[#0F5132] transition hover:bg-[#0F5132] hover:text-white">
              Start Free
            </button>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <p className="text-sm font-semibold text-gray-900">
                Includes:
              </p>

              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li>✓ 1 café outlet</li>
                <li>✓ Menu management</li>
                <li>✓ Order management</li>
                <li>✓ Basic billing</li>
              </ul>
            </div>

          </div>


          {/* Pro */}
          <div className="pricing-card relative rounded-3xl border-2 border-[#0F5132] bg-[#FAF9F6] p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#0F5132] px-4 py-1.5 text-xs font-semibold text-white">
              Most Popular
            </div>

            <h3 className="text-xl font-semibold text-gray-900">
              Pro
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              For cafés ready to grow.
            </p>

            <div className="mt-6">
              <span className="text-4xl font-bold text-gray-900">
                ₹999
              </span>

              <span className="text-gray-500">
                /month
              </span>
            </div>

            <button className="mt-8 w-full rounded-full bg-[#0F5132] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#083C2B]">
              Start Free Trial
            </button>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <p className="text-sm font-semibold text-gray-900">
                Everything in Starter, plus:
              </p>

              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li>✓ Up to 3 outlets</li>
                <li>✓ Sales analytics</li>
                <li>✓ Inventory tracking</li>
                <li>✓ Staff management</li>
                <li>✓ Advanced reports</li>
              </ul>
            </div>

          </div>


          {/* Business */}
          <div className="pricing-card rounded-3xl border border-gray-200 bg-[#FAF9F6] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <h3 className="text-xl font-semibold text-gray-900">
              Business
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Built for growing café businesses.
            </p>

            <div className="mt-6">
              <span className="text-4xl font-bold text-gray-900">
                ₹1,999
              </span>

              <span className="text-gray-500">
                /month
              </span>
            </div>

            <button className="mt-8 w-full rounded-full border border-[#0F5132] px-5 py-3 text-sm font-semibold text-[#0F5132] transition hover:bg-[#0F5132] hover:text-white">
              Contact Us
            </button>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <p className="text-sm font-semibold text-gray-900">
                Everything in Pro, plus:
              </p>

              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li>✓ Unlimited outlets</li>
                <li>✓ Advanced analytics</li>
                <li>✓ Unlimited staff</li>
                <li>✓ Priority support</li>
                <li>✓ Multi-outlet management</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;