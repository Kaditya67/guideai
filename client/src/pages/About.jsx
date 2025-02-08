import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-6xl w-full grid md:grid-cols-3 gap-6">
        
        {/* About Us Card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to our platform! We provide high-quality services in web development, app development, and SEO optimization.
          </p>
          <p className="text-gray-600 mt-4">
            Our mission is to empower businesses with cutting-edge technology and help them grow in the digital world.
          </p>
        </div>

        {/* Contact Us Card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600"><strong>Email:</strong> support@yourwebsite.com</p>
          <p className="text-gray-600 mt-2"><strong>Phone:</strong> +123 456 7890</p>
          <p className="text-gray-600 mt-2"><strong>Working Hours:</strong> Mon-Fri, 9AM - 6PM</p>
        </div>

        {/* Address Card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Address</h2>
          <p className="text-gray-600">
            123 Business Avenue, Suite 456 <br />
            Tech City, Innovation State, 56789
          </p>
          <p className="text-gray-600 mt-2"><strong>Country:</strong> YourCountry</p>
        </div>

      </div>
    </div>
  );
};

export default About;
