import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!form.email.includes("@")) {
      newErrors.email = "Enter a valid email.";
    }
    if (form.password.length < 1) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validate()) return;

    alert("Login Successful!");
    navigate("/");
  };

  return (
    <AuthLayout title="Welcome Back!">
      <form className="space-y-5" onSubmit={handleLogin}>

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

          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-700">
          Don't have an account?{" "}
          <Link to="/signup" className="text-purple-700 font-medium">Sign up</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
