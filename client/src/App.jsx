<<<<<<< HEAD
import './App.css'
import Home from './pages/Home'

function App() { 
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
>>>>>>> 5b76accdc36c23e6183b2bda8d74fcd92934fe08

const App = () => {
  return (
<<<<<<< HEAD
    <>
      <h1>Testing</h1>
      <Home/>
    </>
  )
}
=======
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};
>>>>>>> 5b76accdc36c23e6183b2bda8d74fcd92934fe08

export default App;
