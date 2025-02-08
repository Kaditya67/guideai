import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 leading-relaxed">
          Welcome to our platform! We are dedicated to providing high-quality services in 
          web development, app development, and SEO optimization. Our team is passionate about 
          innovation and delivering top-notch solutions.
        </p>
        <p className="text-gray-600 mt-4">
          Our mission is to empower businesses with cutting-edge technology and help them grow 
          in the digital world. We focus on quality, efficiency, and customer satisfaction.
        </p>
      </div>
    </div>
  );
};

export default About;
