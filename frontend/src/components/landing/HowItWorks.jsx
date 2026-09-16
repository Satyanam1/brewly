
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
    const container = useRef(null);

   useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container.current,
      start: "top 70%",
      end: "+=500",
      scrub: 1,
    },
  });

  tl.from(".step-card", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
  })
  .to(".step-line", {
    scaleX: 1,
    duration: 1,
    ease: "none",
  });
}, { scope: container });

    return (
        <section ref={container} className="bg-[#FAF9F6] px-6 py-20 lg:py-24">
            <div className="mx-auto max-w-7xl">

                {/* Section Header */}
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold text-[#0F5132]">
                        How Brewly works
                    </p>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        From setup to
                        <span className="text-[#0F5132]"> success.</span>
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-gray-600">
                        Get your café organized, manage your daily operations,
                        and make better decisions with Brewly.
                    </p>
                </div>

                {/* Steps */}
                {/* Steps */}
                <div className="relative mt-16 grid gap-8 md:grid-cols-3">

                    {/* Connecting line */}
                    <div className="absolute left-[16.66%] right-[16.66%] top-7 hidden h-0.5 bg-gray-200 md:block">
                        <div className="step-line h-full origin-left scale-x-0 bg-[#0F5132]" />
                    </div>

                    {/* Step 1 */}
                    <div className="step-card relative rounded-3xl border border-gray-200 bg-white p-8">
                        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F5132] text-xl font-bold text-white">
                            01
                        </div>

                        <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                            Set up your café
                        </h3>

                        <p className="mt-3 leading-7 text-gray-600">
                            Add your café details, create your menu, and set up
                            your staff in just a few simple steps.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="step-card relative rounded-3xl border border-gray-200 bg-white p-8">
                        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F5132] text-xl font-bold text-white">
                            02
                        </div>

                        <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                            Manage your operations
                        </h3>

                        <p className="mt-3 leading-7 text-gray-600">
                            Manage orders, inventory, billing, and your team
                            from one simple dashboard.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="step-card relative rounded-3xl border border-gray-200 bg-white p-8">
                        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F5132] text-xl font-bold text-white">
                            03
                        </div>

                        <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                            Track and grow
                        </h3>

                        <p className="mt-3 leading-7 text-gray-600">
                            Use sales insights and reports to understand your
                            business and make smarter decisions.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowItWorks;