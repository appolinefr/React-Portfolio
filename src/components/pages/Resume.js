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
    fetch(AppolinesResume).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = AppolinesResume;
        alink.click();
      });
    });
  };

  return (
    <div>
      <section className="bgimage">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1 className="text-white text-center mt-5">
                🧐 Let's get serious
              </h1>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="container-fluid">
              <h1 className="my-5 text-center">My Skills</h1>
              <div className="container d-flex flex-wrap justify-content-center">
                <span className="badge text-bg-secondary p-3 m-1 fs-6">
                  HTML
                </span>
                <span className="badge text-bg-secondary p-3 m-1 fs-6">
                  CSS
                </span>
                <span className="badge text-bg-secondary p-3 m-1 fs-6">
                  Javascript
                </span>
                <span className="badge text-bg-secondary p-3 m-1 fs-6">
                  Git
                </span>
                <span className="badge text-bg-secondary p-3 m-1 fs-6">
                  GitHub
                </span>
                <span className="badge text-bg-secondary p-3 m-1 fs-6">
                  SEO
                </span>
                <span className="badge text-bg-secondary p-3 m-1 fs-6">
                  Responsive Design
                </span>
                <span className="badge text-bg-secondary p-3 m-1 fs-6">
                  JQuery
                </span>
                <span className="badge text-bg-secondary p-3 m-1 fs-6">
                  React
                </span>
                <span className="badge text-bg-secondary p-3 m-1 fs-6">
                  Heroku
                </span>
                <span className="badge text-bg-secondary p-3 m-1 fs-6">
                  Node.js
                </span>
                <span className="badge text-bg-secondary p-3 m-1 fs-6">
                  APIs
                </span>
                <span className="badge text-bg-secondary p-3 m-1 fs-6">
                  REST
                </span>
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
                  GraphQL
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="container-fluid text-center">
              <h1 className="my-5 text-center">My Resume</h1>
              <div className="btnDiv">
                <button
                  className="btn btn-secondary mb-5 mx-2 p-2 fs-5"
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
