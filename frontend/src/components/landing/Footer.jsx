import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">☕</span>

              <a
                href="/"
                className="text-2xl font-bold text-[#0F5132]"
              >
                Brewly
              </a>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-600">
              Simple café management software built to help you
              manage, understand, and grow your business.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Product
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <a
                  href="/features"
                  className="transition hover:text-[#0F5132]"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="/pricing"
                  className="transition hover:text-[#0F5132]"
                >
                  Pricing
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="transition hover:text-[#0F5132]"
                >
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Company
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <a
                  href="/about"
                  className="transition hover:text-[#0F5132]"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="transition hover:text-[#0F5132]"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="/login"
                  className="transition hover:text-[#0F5132]"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Follow us
            </h3>

            <div className="mt-4 flex gap-4">

              <a
                href="#"
                className="text-sm text-gray-600 transition hover:text-[#0F5132]"
              >
                Instagram
              </a>

              <a
                href="#"
                className="text-sm text-gray-600 transition hover:text-[#0F5132]"
              >
                LinkedIn
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Brewly. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-[#0F5132]">
              Privacy
            </a>

            <a href="#" className="transition hover:text-[#0F5132]">
              Terms
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;