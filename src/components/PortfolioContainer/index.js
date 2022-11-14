import React, { useState } from "react";
import Navbar from "../../components/NavBar";
import Resume from "../../pages/Resume";
import Contact from "../../pages/Contact";
import ProjectList from "../../pages/Projects";
import About from "../../pages/About";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <ProjectList/>;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
