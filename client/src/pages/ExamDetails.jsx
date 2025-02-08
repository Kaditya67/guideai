import React, { useState } from "react";

// Sample Exam Data (Replace with API Data if Needed)
const examData = {
  jee: {
    name: "JEE (Joint Entrance Examination)",
    description: "JEE is an engineering entrance exam for admission to IITs, NITs, and other top engineering colleges in India.",
    registration: "Online through the official JEE website.",
    syllabus: "Physics, Chemistry, and Mathematics based on the NCERT syllabus.",
    timeline: "Exam is conducted in two phases: JEE Main (January & April) and JEE Advanced (May).",
    eligibility: "Students who have passed 12th grade with PCM and meet the required percentage criteria.",
    fees: "₹650 for General, ₹325 for SC/ST/PwD (JEE Main).",
    importantDates: [
      { event: "Registration Starts", date: "November 1, 2024" },
      { event: "Last Date to Apply", date: "December 31, 2024" },
      { event: "Exam Date", date: "January 15, 2025" },
    ],
  },
  neet: {
    name: "NEET (National Eligibility cum Entrance Test)",
    description: "NEET is the medical entrance exam in India for admission to MBBS, BDS, and other medical courses.",
    registration: "Apply through NTA's official NEET website.",
    syllabus: "Physics, Chemistry, and Biology (Zoology & Botany).",
    timeline: "NEET is conducted once a year, usually in May.",
    eligibility: "Students must have completed 12th grade with PCB and at least 50% aggregate.",
    fees: "₹1600 for General, ₹900 for SC/ST/PwD.",
    importantDates: [
      { event: "Registration Starts", date: "December 10, 2024" },
      { event: "Last Date to Apply", date: "February 28, 2025" },
      { event: "Exam Date", date: "May 5, 2025" },
    ],
  },
};

const ExamDetails = () => {
  const [search, setSearch] = useState("");
  const [exam, setExam] = useState(null);
  const [filter, setFilter] = useState("all");

  const handleSearch = () => {
    const key = search.toLowerCase();
    if (examData[key]) {
      setExam(examData[key]);
    } else {
      setExam(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Exam Information</h1>

      {/* Search Bar */}
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search exam (e.g., JEE, NEET)"
          className="px-4 py-2 border border-gray-400 rounded-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch} className="px-4 py-2 bg-blue-600 text-white rounded-md">
          Search
        </button>
      </div>

      {/* Filter Dropdown */}
      <div className="mb-6">
        <label className="font-semibold mr-2">Filter by:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-3 py-2 border border-gray-400 rounded-md"
        >
          <option value="all">All</option>
          <option value="description">Description</option>
          <option value="registration">Registration</option>
          <option value="syllabus">Syllabus</option>
          <option value="timeline">Timeline</option>
          <option value="eligibility">Eligibility</option>
          <option value="fees">Fees</option>
          <option value="importantDates">Important Dates</option>
        </select>
      </div>

      {/* Exam Details */}
      {exam ? (
        <div className="max-w-4xl bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800">{exam.name}</h2>

          {(filter === "all" || filter === "description") && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-700">Description</h3>
              <p className="text-gray-600">{exam.description}</p>
            </div>
          )}

          {(filter === "all" || filter === "registration") && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-700">Registration</h3>
              <p className="text-gray-600">{exam.registration}</p>
            </div>
          )}

          {(filter === "all" || filter === "syllabus") && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-700">Syllabus</h3>
              <p className="text-gray-600">{exam.syllabus}</p>
            </div>
          )}

          {(filter === "all" || filter === "timeline") && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-700">Timeline</h3>
              <p className="text-gray-600">{exam.timeline}</p>
            </div>
          )}

          {(filter === "all" || filter === "eligibility") && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-700">Eligibility</h3>
              <p className="text-gray-600">{exam.eligibility}</p>
            </div>
          )}

          {(filter === "all" || filter === "fees") && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-700">Fees</h3>
              <p className="text-gray-600">{exam.fees}</p>
            </div>
          )}

          {(filter === "all" || filter === "importantDates") && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-700">Important Dates</h3>
              <ul className="text-gray-600">
                {exam.importantDates.map((item, index) => (
                  <li key={index} className="mt-1">
                    <strong>{item.event}:</strong> {item.date}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        search && <p className="text-red-600 mt-4">Exam not found. Try searching for JEE or NEET.</p>
      )}
    </div>
  );
};

export default ExamDetails;
