import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar /> {/* Navbar will take full width if coded correctly */}
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Total Users" value="1,250" color="#3b82f6" />
        <Card title="Sales Today" value="$4,500" color="#10b981" />
        <Card title="Active Sessions" value="350" color="#f59e0b" />
      </main>
    </div>
  );
};

export default Dashboard;

