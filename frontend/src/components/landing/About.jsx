import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#FAF9F6] px-6 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold text-[#0F5132]">
            About Brewly
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Built for cafés that want to
            <span className="text-[#0F5132]"> grow smarter.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Brewly brings the essential tools of café management into one
            simple platform, helping owners spend less time managing
            operations and more time growing their business.
          </p>

        </div>

        {/* Content */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Left Card */}
          <div className="rounded-3xl bg-[#0F5132] p-8 text-white sm:p-10">

            <p className="text-sm font-semibold text-green-200">
              Our mission
            </p>

            <h3 className="mt-4 text-3xl font-bold">
              Make café management simpler.
            </h3>

            <p className="mt-5 leading-7 text-green-50/80">
              Running a café involves much more than serving great coffee.
              Orders, inventory, staff, payments and business decisions all
              need attention. Brewly brings these everyday operations together
              in one organized workspace.
            </p>

          </div>

          {/* Right Card */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 sm:p-10">

            <p className="text-sm font-semibold text-[#0F5132]">
              Why Brewly?
            </p>

            <div className="mt-6 space-y-6">

              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Simple by design
                </h4>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Powerful tools without unnecessary complexity.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Built for real cafés
                </h4>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Designed around the daily operations of modern café
                  businesses.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Ready to scale
                </h4>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Start with one outlet and grow your business with the
                  tools you need.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;