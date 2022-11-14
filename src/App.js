import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar/index";
import Footer from "./components/Footer/index";
import Resume from "./components/Resume/index";
import Contact from "./components/Contact/index";
import ProjectList from "./components/Project/ProjectList";
import About from "./components/About/index";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<ProjectList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
