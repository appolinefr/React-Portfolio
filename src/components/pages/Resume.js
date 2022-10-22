import React from "react";
import FooterContainer from "../Footer";
import AppolinesResume from "../../images/AppolinesResume.pdf";

const styles = {
  badge: {
    background: "#A64B2A",
    borderColor: "#A64B2A",
  },
  body: {
    background: "#FCF1F1",
  },
};

export default function Home() {
 const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch(AppolinesResume).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = AppolinesResume;
                alink.click();
            })
        })}
  return (
    <div>
      <section className="bgimage">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="container-fluid my-5 text-center">
              <h1 className="p-4 text-center my-5">My Skills</h1>
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
              <span className="badge text-bg-secondary p-3 m-1 fs-6">
                Heroku
              </span>
              <span className="badge text-bg-secondary p-3 m-1 fs-6">
                Node.js
              </span>
              <span className="badge text-bg-secondary p-3 m-1 fs-6">APIs</span>
              <span className="badge text-bg-secondary p-3 m-1 fs-6">REST</span>
              <span className="badge text-bg-secondary p-3 m-1 fs-6">SQL</span>
              <span className="badge text-bg-secondary p-3 m-1 fs-6">
                NoSQL
              </span>
              <span className="badge text-bg-secondary p-3 m-1 fs-6">
                Express.js
              </span>
              <span className="badge text-bg-secondary p-3 m-1 fs-6">
                GraphQL
              </span>
            </div>
          </div>
          <div className="col-6">
            <div className="container-fluid my-5">
              <h1 className="text-center my-5 ">My Resume</h1>
              <div className="btnDiv text-center">
                <button
                  className="btn btn-secondary mb-5 p-2 fs-5"
                  style={styles.badge}
                  id="downloadBtn"
                  value="download"
                  onClick={onButtonClick}
                >
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
        <FooterContainer />
      </div>
    </div>
  );
}
