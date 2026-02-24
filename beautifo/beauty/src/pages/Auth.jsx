import { useState } from "react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="bg-sectionBg min-h-screen flex items-center justify-center px-6">
      <div className="bg-blushCard rounded-3xl shadow-md p-12 w-full max-w-md">

        {/* Heading */}
        <h2 className="text-3xl font-serif text-headingDark text-center mb-8">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>

        {/* Form */}
        <form className="space-y-6">

          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-5 py-3 rounded-xl bg-newsletterInput outline-none"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full px-5 py-3 rounded-xl bg-newsletterInput outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-5 py-3 rounded-xl bg-newsletterInput outline-none"
          />

          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-5 py-3 rounded-xl bg-newsletterInput outline-none"
            />
          )}

          <button
            type="submit"
            className="w-full bg-buttonPink text-white py-3 rounded-full hover:opacity-90 transition"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        {/* Toggle */}
        <div className="text-center mt-6 text-sm text-textMuted">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-buttonPink font-semibold"
              >
                Register
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-buttonPink font-semibold"
              >
                Login
              </button>
            </>
          )}
        </div>

      </div>
    </section>
  );
}