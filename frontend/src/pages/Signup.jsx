import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"; // Assuming the Navbar is used here too

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/auth/signup", // Ensure correct endpoint
        { username, email, password }
      );

      if (response.status === 201) {
        alert("Signup successful! You can now log in.");
        navigate("/login"); // Redirect to login page
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Signup failed.");
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex h-fit">
        <div className="hidden md:flex w-1/2 items-center justify-center">
          <img
            src="/image2.png"
            alt="Login Illustration"
            className="h-5/6 w-auto rounded-lg"
          />
        </div>

        <div className="flex w-full md:w-1/2 items-center justify-center">
          <div className="w-full max-w-md bg-white p-8 rounded-md shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Create an Account
            </h2>

            {error && (
              <div className="mb-4 p-2 bg-red-100 text-red-600 rounded-md text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSignup} className="space-y-4">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="offers"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <label
                  htmlFor="offers"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Send me special offers, personalized recommendations, and
                  learning tips.
                </label>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-teal-500 text-white py-3 rounded-md font-semibold hover:bg-teal-600"
              >
                {loading ? "Signing up..." : "Sign Up"}
              </button>
            </form>

            <p className="mt-6 text-sm text-gray-500">
              By signing up, you agree to our{" "}
              <a href="#" className="text-indigo-600 hover:underline">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="text-indigo-600 hover:underline">
                Privacy Policy
              </a>
              .
            </p>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-teal-500 hover:underline font-medium"
                >
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
