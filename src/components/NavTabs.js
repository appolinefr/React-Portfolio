import React from "react";
import appoline from "../../src/images/AppolineNav.png";

const styles = {
  nav: {
    background: "",
  },
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg p-3" style={styles.nav}>
      <div className="container">
        <a
          className="navbar-brand"
          href="#home"
          onClick={() => handlePageChange("Home")}
        >
          <img src={appoline} alt="Appoline Cogan" height="60" />
          <span className="m-4 fs-4">Appoline Cogan</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item fs-5 mx-2">
              <a
                href="#home"
                onClick={() => handlePageChange("Home")}
                className={
                  currentPage === "Home" ? "nav-link active" : "nav-link"
                }
              >
                Home
              </a>
            </li>
            <li className="nav-item fs-5 mx-2">
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                About
              </a>
            </li>
            <li className="nav-item fs-5 mx-2">
              <a
                href="#blog"
                onClick={() => handlePageChange("Project")}
                className={
                  currentPage === "Blog" ? "nav-link active" : "nav-link"
                }
              >
                Projects
              </a>
            </li>
            <li className="nav-item fs-5 mx-2">
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
