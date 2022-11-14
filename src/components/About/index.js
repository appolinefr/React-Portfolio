import React from "react";
import appoline from "../../images/aboutPic.jpeg";
import "../../About.css";

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
      <div className="container d-flex justify-content-center my-5 custom">
        <img
          src={appoline}
          className="rounded"
          alt="Appoline Cogan"
          width="300px"
        />
        <p className="fs-5 d-flex align-self-center my-5 mx-5 flex-wrap">
          I am a Full-stack Developper from Melbourne, Australia. I am currently
          finishing a Full Stack Development bootcamp with Adelaide University!
          Check out some of my work in the Projects section. I'm open to Job
          opportunities where I can contribute, learn and grow. If you have a
          good opportunity that matches my skills and experience then don't
          hesitate to contact me.
        </p>
      </div>
    </div>
  );
}
