import React, { useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

// Data Lists
const enrolledExams = [
  { 
    id: 1, 
    title: "Upcoming Exams", 
    value: "5", 
    description: "You have 5 exams scheduled in the coming weeks. Be prepared!", 
    color: "#6366f1",
    details: [
      { date: "Feb 20, 2025", name: "Mathematics Exam" },
      { date: "Mar 5, 2025", name: "Physics Exam" },
      { date: "Mar 12, 2025", name: "Computer Science Exam" },
    ]
  },
  { 
    id: 2, 
    title: "Completed Exams", 
    value: "3", 
    description: "You've successfully completed 3 exams. Great job!", 
    color: "#16a34a",
    details: [
      { date: "Jan 10, 2025", name: "Chemistry Exam" },
      { date: "Jan 25, 2025", name: "Biology Exam" },
    ]
  },
  { 
    id: 3, 
    title: "Past Exams", 
    value: "7", 
    description: "7 exams have been taken previously. You can review the results.", 
    color: "#dc2626",
    details: [
      { date: "Dec 15, 2024", name: "English Exam" },
      { date: "Nov 30, 2024", name: "History Exam" },
    ]
  },
];

const topInternships = [
  { 
    id: 7, 
    title: "Machine Learning", 
    value: "12 Applications", 
    description: "Hands-on AI model experience.", 
    color: "#2563eb",
    details: [
      { date: "Feb 25, 2025", name: "AI Research Internship" },
      { date: "Mar 10, 2025", name: "Data Science Internship" },
    ]
  },
  { 
    id: 8, 
    title: "Web Development", 
    value: "17 Applications", 
    description: "Learn full-stack development.", 
    color: "#9333ea",
    details: [
      { date: "Apr 1, 2025", name: "React Developer Internship" },
      { date: "Apr 15, 2025", name: "Node.js Internship" },
    ]
  },
];

const Dashboard = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className=""><Navbar/>
    <main className="p-6 grid grid-cols-1 gap-10">
      
      {/* Enrolled Exams Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Enrolled Exams</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledExams.map((exam) => (
            <div key={exam.id} className="w-full">
              <div onClick={() => toggleExpand(exam.id)}>
                <Card {...exam} />
              </div>
              {expandedId === exam.id && (
                <div className="bg-gray-100 p-4 mt-2 rounded-lg shadow-inner">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Exam Details</h3>
                  {exam.details.map((detail, index) => (
                    <div key={index} className="flex justify-between items-center bg-white p-2 mb-2 rounded-md shadow">
                      <p className="text-gray-700">{detail.date} - {detail.name}</p>
                      <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">View</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Top Internships Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Top Internship Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topInternships.map((internship) => (
            <div key={internship.id} className="w-full">
              <div onClick={() => toggleExpand(internship.id)}>
                <Card {...internship} />
              </div>
              {expandedId === internship.id && (
                <div className="bg-gray-100 p-4 mt-2 rounded-lg shadow-inner">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Internship Details</h3>
                  {internship.details.map((detail, index) => (
                    <div key={index} className="flex justify-between items-center bg-white p-2 mb-2 rounded-md shadow">
                      <p className="text-gray-700">{detail.date} - {detail.name}</p>
                      <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">View</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </main>
    </div>
  );
};

export default Dashboard;

