import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#A435F0] text-white py-6 mt-10">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        <div>
          <p className="text-lg font-bold">Elearning</p>
          <p className="text-sm mt-2">
            Empowering people through learning. © 2025 Elearning. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <a href="/about" className="text-sm hover:text-gray-200">
            About Us
          </a>
          <a href="/contact" className="text-sm hover:text-gray-200">
            Contact
          </a>
          <a href="/privacy" className="text-sm hover:text-gray-200">
            Privacy Policy
          </a>
          <a href="/terms" className="text-sm hover:text-gray-200">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
