import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CoursesPage from "./CoursesPages";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="py-10 px-4 mx-10">
        <div className="relative flex items-center justify-center pb-4">
          <img
            src="/image1.png"
            alt="Landscape"
            className="w-full h-auto rounded-lg shadow-lg"
          />

          <div className="absolute top-1/2 left-16 transform -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-10 w-3/4 sm:w-1/2 md:w-1/3">
            <h2 className="text-3xl font-bold mb-4">
              Skills that drive you forward
            </h2>
            <p className="text-gray-700 mb-6">
              Technology and the world of work change fast — with us, you’re
              faster. Get the skills to achieve goals and stay competitive.
            </p>
            <button className="bg-[#A435F0] text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
              View Plans
            </button>
          </div>
        </div>

        <CoursesPage />
      </main>

      <Footer />
    </div>
  );
}
