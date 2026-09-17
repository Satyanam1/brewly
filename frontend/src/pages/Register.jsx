import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cafe_name: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/auth/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.email?.[0] ||
          data.password?.[0] ||
          data.name?.[0] ||
          data.cafe_name?.[0] ||
          "Registration failed."
        );
      }

      console.log("Registration successful:", data);

      navigate("/login");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] px-6 py-12">

      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-md items-center justify-center">

        <div className="w-full">

          {/* Brand */}
          <div className="mb-8 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2"
            >
              <span className="text-3xl">☕</span>

              <span className="text-2xl font-bold text-[#0F5132]">
                Brewly
              </span>
            </Link>
          </div>

          {/* Register Card */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">

            {/* Heading */}
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                Create your account
              </h1>

              <p className="mt-2 text-sm text-gray-600">
                Start managing your café with Brewly.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Full name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#0F5132] focus:ring-2 focus:ring-[#0F5132]/10"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#0F5132] focus:ring-2 focus:ring-[#0F5132]/10"
                />
              </div>

              {/* Café Name */}
              <div>
                <label
                  htmlFor="cafe_name"
                  className="text-sm font-medium text-gray-700"
                >
                  Café name
                </label>

                <input
                  id="cafe_name"
                  name="cafe_name"
                  type="text"
                  value={formData.cafe_name}
                  onChange={handleChange}
                  placeholder="Your café name"
                  className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#0F5132] focus:ring-2 focus:ring-[#0F5132]/10"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <div className="relative mt-2">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 pr-20 text-sm outline-none transition focus:border-[#0F5132] focus:ring-2 focus:ring-[#0F5132]/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-500 hover:text-[#0F5132]"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Error */}
              {error && (
                <p className="text-sm text-red-600">
                  {error}
                </p>
              )}

              {/* Terms */}
              <div className="flex items-start gap-2">
                <input
                  id="terms"
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 accent-[#0F5132]"
                />

                <label
                  htmlFor="terms"
                  className="text-sm leading-5 text-gray-600"
                >
                  I agree to the{" "}
                  <Link
                    to="/terms"
                    className="font-medium text-[#0F5132] hover:underline"
                  >
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy"
                    className="font-medium text-[#0F5132] hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-[#0F5132] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#083C2B] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>

            </form>

            {/* Login */}
            <p className="mt-8 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-[#0F5132] hover:underline"
              >
                Sign in
              </Link>
            </p>

          </div>

          {/* back to home link */}
          <div className="mt-6 text-center">
            <Link
              to="/"
              className="text-sm text-gray-500 transition hover:text-[#0F5132]"
            >
              ← Back to home
            </Link>
          </div>

        </div>

      </div>

    </main>
  );
};

export default Register;