import React, { useState } from "react";
import CourseCard from "../components/CourseCard";

// Sample data with categories containing different topics
const categories = [
  {
    category: "Data Science",
    topics: [
      { name: "ChatGPT", learners: "4M+" },
      { name: "Python", learners: "477M+" },
      { name: "Machine Learning", learners: "8M+" },
      { name: "Deep Learning", learners: "2M+" },
    ],
  },
  {
    category: "IT Certifications",
    topics: [
      { name: "CompTIA A+", learners: "1M+" },
      { name: "Cisco Certified", learners: "2M+" },
      { name: "AWS Certified", learners: "1.5M+" },
    ],
  },
  {
    category: "Leadership",
    topics: [
      { name: "Leadership Skills", learners: "500K+" },
      { name: "Team Management", learners: "350K+" },
    ],
  },
  {
    category: "Web Development",
    topics: [
      { name: "JavaScript", learners: "1B+" },
      { name: "React", learners: "800M+" },
      { name: "Node.js", learners: "600M+" },
    ],
  },
  {
    category: "Communication",
    topics: [
      { name: "Public Speaking", learners: "200K+" },
      { name: "Negotiation Skills", learners: "150K+" },
    ],
  },
  {
    category: "Business Analytics & Intelligence",
    topics: [
      { name: "Power BI", learners: "400K+" },
      { name: "Tableau", learners: "350K+" },
      { name: "SQL for Analytics", learners: "300K+" },
    ],
  },
];

const courses = [
  {
    id: 1,
    title: "ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More",
    instructor: "Julian Melanson, Benza Maman",
    rating: 4.5,
    reviews: 43462,
    price: 2699,
    image: "/placeholder.svg?height=400&width=600",
    badge: "Bestseller",
  },
  {
    id: 2,
    title: "The Complete AI-Powered Copywriting Course & ChatGPT Mastery",
    instructor: "Ing. Tomas Moravek",
    rating: 4.4,
    reviews: 1724,
    price: 3099,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "ChatGPT & Midjourney & Gemini: Digital Marketing Assistants",
    instructor: "Anton Voroniuk",
    rating: 4.5,
    reviews: 460,
    price: 799,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "ChatGPT Masterclass: Navigating AI and Prompt Engineering",
    instructor: "Chetan Pujari",
    rating: 4.4,
    reviews: 280,
    price: 799,
    image: "/placeholder.svg?height=400&width=600",
  },
];

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Data Science");
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((categoryObj) => (
              <button
                key={categoryObj.category}
                onClick={() => setSelectedCategory(categoryObj.category)}
                className={`whitespace-nowrap text-sm font-semibold px-6 py-2 rounded-lg transition-all duration-300 ease-in-out ${
                  selectedCategory === categoryObj.category
                    ? "bg-select-color text-white shadow-lg"
                    : "text-gray-600 hover:bg-hover-color hover:text-gray-900"
                }`}
              >
                {categoryObj.category}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <main className="container mx-auto px-4 ">
        <div className="relative">
          {selectedCategory && (
            <div className="pt-2">
              <div className="flex space-x-4 overflow-x-auto py-4 scrollbar-hide">
                {categories
                  .find((category) => category.category === selectedCategory)
                  .topics.map((topic) => (
                    <div
                      key={topic.name}
                      onClick={() => setSelectedTopic(topic.name)}
                      className={`flex-shrink-0 rounded-full px-6 py-3 shadow-md transition-all duration-300 ease-in-out ${
                        selectedTopic === topic.name
                          ? "bg-select-color text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-hover-color hover:text-white"
                      }`}
                    >
                      <div className="text-sm font-medium">{topic.name}</div>
                      <div className="text-xs">{topic.learners} learners</div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* Course Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        {/* Show All Button */}
        <div className="mt-8 text-center">
          <button className="rounded-full border-2 border-[#A435F0] px-8 py-4 font-bold text-[#A435F0] hover:bg-[#A435F0] hover:text-white transition-all duration-300 ease-in-out">
            Show all courses
          </button>
        </div>
      </main>
    </div>
  );
};

export default CoursesPage;
