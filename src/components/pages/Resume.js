import React from "react";
import FooterContainer from "../Footer";

const styles = {
  badge: {
    background: "#A64B2A",
  },
  body: {
    background: "#FCF1F1",
  },
};

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="container-fluid my-5">
            <h1 className="p-4 text-center">My Skills</h1>
            <h3 className=" my-5">Front End Proficiencies</h3>
            <span className="badge p-3 m-1 fs-6 " style={styles.badge}>
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
            <span className="badge p-3 m-1 fs-6" style={styles.badge}>
              GitHub
            </span>
            <span className="badge p-3 m-1 fs-6" style={styles.badge}>
              Responsive Design
            </span>
            <span className="badge p-3 m-1 fs-6" style={styles.badge}>
              SEO
            </span>
            <span className="badge p-3 m-1 fs-6" style={styles.badge}>
              JQuery
            </span>
            <span className="badge p-3 m-1 fs-6" style={styles.badge}>
              React
            </span>
            <h3 className=" my-5">Back End Proficiencies</h3>

            <span className="badge text-bg-secondary p-3 m-1 fs-6">Heroku</span>
            <span className="badge text-bg-secondary p-3 m-1 fs-6">
              Node.js
            </span>
            <span className="badge text-bg-secondary p-3 m-1 fs-6">APIs</span>
            <span className="badge text-bg-secondary p-3 m-1 fs-6">REST</span>
            <span className="badge text-bg-secondary p-3 m-1 fs-6">
              SQL
            </span>
            <span className="badge text-bg-secondary p-3 m-1 fs-6">
              NoSQL
            </span>
            <span className="badge text-bg-secondary p-3 m-1 fs-6">
              Express.js
            </span>
            <span className="badge text-bg-secondary p-3 m-1 fs-6">
              Sequelize
            </span>
            <span className="badge text-bg-secondary p-3 m-1 fs-6">
              GraphQL
            </span>
          </div>
        </div>
        <div className="col-6">
          <div className="container-fluid my-5">
            <h1 className="p-4 text-center ">My Resume</h1>
            
          </div>
        </div>
      </div>
      <FooterContainer />
    </div>
  );
}
