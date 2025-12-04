import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!form.email.includes("@") || !form.email.includes(".")) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!validate()) return;

    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <AuthLayout title="Create Account">
      <form className="space-y-5" onSubmit={handleSignup}>
        
        {/* Email */}
        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            className="mt-1 w-full px-4 py-2 rounded-lg bg-white/60 border border-gray-300 focus:ring-2 focus:ring-purple-400"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Password */}
        <div>
          <label className="text-sm font-medium">Password</label>

          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              className="mt-1 w-full px-4 py-2 rounded-lg bg-white/60 border border-gray-300 focus:ring-2 focus:ring-purple-400"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />

            <button
              type="button"
              className="absolute right-3 top-3 text-sm text-gray-600"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? "Hide" : "Show"}
            </button>
          </div>

          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="text-sm font-medium">Confirm Password</label>
          <input
            type="password"
            className="mt-1 w-full px-4 py-2 rounded-lg bg-white/60 border border-gray-300 focus:ring-2 focus:ring-purple-400"
            value={form.confirmPassword}
            onChange={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-700 font-medium">Login</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
