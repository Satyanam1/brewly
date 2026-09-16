import React from "react";

const CTA = () => {
  return (
    <section className="bg-[#FAF9F6] px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl bg-[#0F5132] px-6 py-16 text-center sm:px-10 lg:px-16">

          <p className="text-sm font-semibold text-green-200">
            Start your journey with Brewly
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to run your café
            <span className="text-green-200"> smarter?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-green-50/80">
            Bring your café operations together, make better decisions,
            and focus on what matters most — growing your business.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <a
              href="/register"
              className="w-full rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#0F5132] transition hover:bg-gray-100 sm:w-auto"
            >
              Get Started
            </a>

            <a
              href="/pricing"
              className="w-full rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              View Pricing
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;