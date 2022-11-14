import React from "react";
import appoline from "../../images/AppolineNav.png";
import { Nav, Navbar } from "react-bootstrap";

function NavTabs() {
  return (
    <Navbar collapseOnSelect expand="lg p-3">
      <Navbar.Brand href="/">
        <img src={appoline} alt="Appoline Cogan" height="60" href="/" />
        <span className="m-4 fs-3">AC</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto fs-4 mx-2">
          <Nav.Link
            href="/">
            About
          </Nav.Link>
          <Nav.Link
            href="/projects"
          >
            Projects
          </Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/resume">Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavTabs;
