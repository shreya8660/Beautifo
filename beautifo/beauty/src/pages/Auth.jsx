import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /* ---------------- REGISTER ---------------- */
    if (!isLogin) {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      const user = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      localStorage.setItem("beautifoUser", JSON.stringify(user));

      alert("Registered successfully! Please login.");
      setIsLogin(true);
      return;
    }

    /* ---------------- LOGIN ---------------- */
    const storedUser = JSON.parse(localStorage.getItem("beautifoUser"));

    if (
      storedUser &&
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <section className="bg-sectionBg min-h-screen flex items-center justify-center px-6">
      <div className="bg-blushCard rounded-3xl shadow-md p-12 w-full max-w-md">

        <h2 className="text-3xl font-serif text-headingDark text-center mb-8">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-xl bg-newsletterInput outline-none"
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full px-5 py-3 rounded-xl bg-newsletterInput outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-5 py-3 rounded-xl bg-newsletterInput outline-none"
            required
          />

          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-xl bg-newsletterInput outline-none"
              required
            />
          )}

          <button
            type="submit"
            className="w-full bg-buttonPink text-white py-3 rounded-full hover:opacity-90 transition"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

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