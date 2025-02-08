import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import ExamDetails from "./pages/ExamDetails";

const App = () => {
  return (
    
    <Router>
      <div className="flex flex-col min-h-screen">
      <Navbar/>
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/home/" element={<Home/>} />
            <Route path="/about/" element={<About/>} />
            <Route path="/examss/" element={<ExamDetails/>}/>
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
