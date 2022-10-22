import React from "react";
import appoline from "../../images/aboutPic.jpeg";
import FooterContainer from "../Footer";

export default function About() {
  return (
    <div>
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
        </div>
      </div>
      <FooterContainer />
    </div>
  );
}
