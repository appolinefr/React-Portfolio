import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


export default function FooterContainer() {
  return (
    <div>
      <footer className="text-center text-white mt-3">
        <div className="container pt-4">
          <section className="mb-4">
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.linkedin.com/in/appoline-cogan-91b777236/"
              target="blank"
              role="button"
            >
              <FontAwesomeIcon icon={faLinkedin} className="fa-xl" />
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://github.com/appolinefr"
              target="blank"
              role="button"
            >
              <FontAwesomeIcon icon={faGithub} className="fa-xl" />
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="mailto:appolinecogan@gmail.com"
              target="blank"
              role="button"
            >
              <FontAwesomeIcon icon={faEnvelope} className="fa-xl" />
            </a>
          </section>
        </div>
      </footer>
    </div>
  );
}
