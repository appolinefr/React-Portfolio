import React from "react";
import appoline from "../../images/aboutPic.jpeg";
import FooterContainer from "../Footer";

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
    <div>
      <div className="jumbotron text-center my-5">
        <h1 className="display-5">Hi, my name is Appoline!</h1>
      </div>
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
                <span className="badge text-bg-secondary p-3 m-1 fs-6">
                  SQL
                </span>
                <span className="badge text-bg-secondary p-3 m-1 fs-6">
                  Sequelize
                </span>
                <span className="badge text-bg-secondary p-3 m-1 fs-6"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterContainer />
    </div>
  );
}
