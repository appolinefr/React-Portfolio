import React from "react";
import appoline from "../../images/AppolineNav.png";
import { Nav, Navbar } from "react-bootstrap";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar collapseOnSelect expand="lg p-3">
      <Navbar.Brand href="#">
        <img
          src={appoline}
          alt="Appoline Cogan"
          height="60"
          onClick={() => handlePageChange("About")}
        />
        <span className="m-4 fs-3">AC</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto fs-4 mx-2">
          <Nav.Link
            href="#"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </Nav.Link>
          <Nav.Link
            href="#projects"
            onClick={() => handlePageChange("Projects")}
            className={
              currentPage === "Projects" ? "nav-link active" : "nav-link"
            }
          >
            Projects
          </Nav.Link>
          <Nav.Link
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </Nav.Link>
          <Nav.Link
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavTabs;
