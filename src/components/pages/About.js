import React from "react";
import appoline from "../../images/aboutPic.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const styles = {
  badge: {
    background: "#A64B2A",
  },
  body: {
    background: "#FCF1F1",
  },
};

export default function About() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="container-fluid ">
            <h1 className="p-4 text-center">About Me </h1>
            <div className="container">
              <div className="row">
                <div className="col">
                  <img
                    src={appoline}
                    className="card-img-top rounded"
                    alt="Appoline Cogan"
                  />
                </div>
                <div className="col">
                  <p className="fs-5">
                    I am a Full-stack Developper from Melbourne, Australia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="container-fluid">
            <h1 className="p-4 text-center ">My Skills</h1>
            <div className="container  text-center ">
              <span className="badge p-3 m-1 fs-6" style={styles.badge}>
                HTML
              </span>
              <span className="badge p-3 m-1 fs-6" style={styles.badge}>
                CSS
              </span>
              <span className="badge p-3 m-1 fs-6" style={styles.badge}>
                Javascript
              </span>
              <span className="badge p-3 m-1 fs-6" style={styles.badge}>
                Git
              </span>
              <span className="badge text-bg-secondary p-3 m-1 fs-6">
                GitHub
              </span>
              <span className="badge text-bg-secondary p-3 m-1 fs-6">
                Heroku
              </span>
              <span className="badge text-bg-secondary p-3 m-1 fs-6">
                React
              </span>
              <span className="badge text-bg-secondary p-3 m-1 fs-6">
                Node.js
              </span>
              <span className="badge text-bg-secondary p-3 m-1 fs-6">
                Express.js
              </span>
              <span className="badge text-bg-secondary p-3 m-1 fs-6">
                MongoDB
              </span>
              <span className="badge text-bg-secondary p-3 m-1 fs-6">SQL</span>
              <span className="badge text-bg-secondary p-3 m-1 fs-6">
                Sequelize
              </span>
              <span className="badge text-bg-secondary p-3 m-1 fs-6"></span>
            </div>
          </div>
        </div>
      </div>
      <footer class="text-center text-white mt-3">
        <div class="container pt-4">
          <section class="mb-4">
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.linkedin.com/in/appoline-cogan-91b777236/"
              target="blank"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://github.com/appolinefr"
              target="blank"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="mailto:appolinecogan@gmail.com"
              target="blank"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </section>
        </div>
      </footer>
    </div>
  );
}
