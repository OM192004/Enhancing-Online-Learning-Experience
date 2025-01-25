import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user")); 
    if (loggedInUser) {
      setIsLoggedIn(true);
      setUser(loggedInUser); 
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
  };

  const getUserInitials = (name) => {
    const names = name.split(" ");
    return names.length > 1
      ? names[0].charAt(0) + names[1].charAt(0)
      : names[0].charAt(0);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-md">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">

        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-[#A435F0]">Elearning</span>
        </Link>

        <div className="flex flex-1 justify-center space-x-6">
          <div className="relative w-full max-w-xl">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <FaSearch className="text-black" />
            </div>
            <input
              type="search"
              placeholder="Search for anything"
              className="w-full bg-gray-50 pl-9 pr-4 py-2 text-sm border rounded-full focus:outline-none focus:border-[#A435F0]"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              to="/plans"
              className="text-sm font-medium hover:text-[#A435F0]"
            >
              Plans & Pricing
            </Link>
            <Link
              to="/business"
              className="text-sm font-medium hover:text-[#A435F0]"
            >
              For Business
            </Link>
            <Link
              to="/teach"
              className="text-sm font-medium hover:text-[#A435F0]"
            >
              Teach
            </Link>
            <button className="bg-transparent p-2 rounded-full hover:bg-gray-200">
              <span className="h-5 w-5 text-gray-500">🛒</span>
              <span className="sr-only">Shopping Cart</span>
            </button>
          </nav>
        </div>

        <div className="flex space-x-4">
          {isLoggedIn ? (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#A435F0] text-white flex items-center justify-center">
                {user ? getUserInitials(user.name) : "?"}
              </div>
              <button
                onClick={handleLogout}
                className="bg-transparent p-2 rounded-full hover:bg-gray-200"
              >
                Log out
              </button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-transparent p-2 rounded-full hover:bg-gray-200">
                  Log in
                </button>
              </Link>

              <Link to="/signup">
                <button className="bg-[#A435F0] text-white p-2 rounded-full hover:bg-[#8710E8]">
                  Sign up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
