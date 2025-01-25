import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa"; // Import icons
import Navbar from "../components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        { email, password },
        { withCredentials: true }
      );

      if (response.status === 200) {
        alert("Login successful!");
        navigate("/home");
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Login failed.");
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar/>
      <div className="flex h-fit">
        <div className="hidden md:flex w-1/2 items-center justify-center">
          <img
            src="/image2.png"
            alt="Login Illustration"
            className="h-5/6 w-auto rounded-lg"
          />
        </div>

        <div className="flex w-full md:w-1/2 items-center justify-center ">
          <div className="w-full max-w-md bg-white p-8 rounded-md shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Welcome Back!
            </h2>

            {error && (
              <div className="mb-4 p-2 bg-red-100 text-red-600 rounded-md text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-teal-500 text-white py-3 rounded-md font-semibold hover:bg-teal-600"
              >
                {loading ? "Logging in..." : "Login with Email"}
              </button>
            </form>

            <div className="flex items-center justify-center my-6">
              <span className="w-1/3 border-b border-gray-300"></span>
              <span className="text-sm text-gray-500 mx-2">OR</span>
              <span className="w-1/3 border-b border-gray-300"></span>
            </div>

            <div className="flex justify-center space-x-4">
              <button className="p-3 bg-gray-100 border rounded-full hover:bg-gray-200">
                <FaGoogle className="w-6 h-6 text-red-500" />
              </button>
              <button className="p-3 bg-gray-100 border rounded-full hover:bg-gray-200">
                <FaFacebookF className="w-6 h-6 text-blue-600" />
              </button>
              <button className="p-3 bg-gray-100 border rounded-full hover:bg-gray-200">
                <FaApple className="w-6 h-6 text-gray-800" />
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don’t have an account?{" "}
                <a
                  href="/signup"
                  className="text-teal-500 hover:underline font-medium"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
