import React from "react";
import { Link } from "react-router-dom";
import { FiLogOut, FiCompass } from "react-icons/fi";
import { PiChefHatFill } from "react-icons/pi";

const ExplorePage = () => {
  const eatingLifestyles = [
    { title: "Losing Fat", description: "Find meals to help you burn fat efficiently." },
    { title: "Gaining Muscle", description: "Discover high-protein meals for muscle growth." },
    { title: "Eating Healthy", description: "Explore balanced and nutritious meal options." },
    { title: "Maintaining Weight", description: "Maintain your weight with these delicious meals." },
  ];

  return (
    <div className="bg-gray-50 flex flex-col items-center">
      {/* Header */}
      <header className="bg-white shadow-md w-full py-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-red-600">
            Welcome to <span className="text-red-700">MealMate</span>
          </h1>
          <p className="text-gray-600 mt-2">
            Explore our features below!
          </p>
        </div>
      </header>


      {/* Explore Lifestyle Cards */}
      <section className="max-w-4xl w-full mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {eatingLifestyles.map((lifestyle, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-red-600">{lifestyle.title}</h3>
              <p className="text-gray-600 mt-2">{lifestyle.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Buttons */}
      <footer className="flex justify-around mt-8 space-x-4 mb-4">
            <Link
                to="/home"
                className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-indigo-700 shadow-lg transform hover:scale-105 transition duration-300"
            >
                <FiLogOut className="mr-2" /> Home
            </Link>
            <Link
                to="/"
                className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-indigo-700 shadow-lg transform hover:scale-105 transition duration-300"
            >
                <FiLogOut className="mr-2" /> Logout
            </Link>
      </footer>
    </div>
  );
};

export default ExplorePage;
