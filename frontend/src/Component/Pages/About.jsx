// AboutCompany.jsx
import React from "react";

const About = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About JobPortal
          </h2>
          <p className="text-gray-600 text-lg">
            JobPortal is a cutting-edge platform connecting talented professionals
            with top companies. Our mission is to simplify job search and recruitment,
            helping candidates and employers achieve success faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To empower job seekers and companies by creating a seamless, transparent, and efficient hiring process.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be the most trusted job portal in the region, enabling career growth
              and business success.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Why Choose Us</h3>
            <p className="text-gray-600">
              Advanced search, verified companies, personalized recommendations, and a user-friendly interface make JobPortal the smart choice for both candidates and recruiters.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/register"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Join Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
