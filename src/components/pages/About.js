import React from "react";
import appoline from "../../images/aboutPic.jpeg";
import FooterContainer from "../Footer";

export default function About() {
  return (
    <div>
      <section className="bgimage">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1 className="text-white text-center mt-5">
                👋 Hey, I am Appoline !
              </h1>
            </div>
          </div>
        </div>
      </section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-8 offset-2">
            <div className="container-fluid">
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
