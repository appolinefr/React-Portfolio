import React from "react";
import marvelProject from "../../images/marvel.png";
import codeQuiz from "../../images/code-quiz.png";
import merchantGame from "../../images/merchantGame.png";
import weatherDashboard from "../../images/weather-dashboard.png";
import workDay from "../../images/work-day.png";
import noteTaker from "../../images/note-taker.png";
import FooterContainer from "../Footer";
import "../../Project.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Project() {
  return (
    <div>
      <section className="bgimage">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1 className="text-white text-center mt-5">👩🏼‍💻 My Projects</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="container mt-5 text-center">
        <p className="heading">
          Here you will find some of the personal projects that I have created
          with each project containing links to the deployed application and the
          GitHub repo
        </p>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div
              className="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div className="mainflip">
                <div className="frontside">
                  <div className="card">
                    <h4 className="card-title mt-5">Marvel Mystery Matcher</h4>
                    <div className="card-body text-center">
                      <p className="card-text mt-4">
                        Your personality may meld with many superheroes out
                        there in the Marvel universe. This "mystery matcher"
                        quiz will match you with the Marvel superhero that best
                        suits your personality.
                      </p>
                      <span className="badge text-bg-secondary p-3 my-4 fs-6">
                        This way for the links 👉
                      </span>
                    </div>
                  </div>
                </div>
                <div className="backside">
                  <div className="card">
                    <div className="card-body text-center">
                      <a
                        className="card-title"
                        href="https://rfox01.github.io/Group-4-Project-1/index.html"
                        role="button"
                        target="blank"
                      >
                        <img
                          className="img-fluid rounded"
                          src={marvelProject}
                          alt="Marvel Mystery Matcher"
                        />
                      </a>
                      <hr />
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a
                            className="text-dark"
                            href="https://github.com/appolinefr"
                            target="blank"
                            role="button"
                          >
                            <FontAwesomeIcon
                              icon={faGithub}
                              className="fa-xl"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div
              className="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div className="mainflip">
                <div className="frontside">
                  <div className="card">
                    <h4 className="card-title mt-5">Merchant Game</h4>
                    <div className="card-body text-center">
                      <p className="card-text mt-4">
                        The Merchant Game is a medieval themed trading game
                        where players can travel around a world map via icons on
                        a map image to buy and sell goods at different locations
                        on the map.
                      </p>
                      <span className="badge text-bg-secondary p-3 my-4 fs-6">
                        This way for the links 👉
                      </span>
                    </div>
                  </div>
                </div>
                <div className="backside">
                  <div className="card">
                    <div className="card-body text-center">
                      <a
                        className="card-title"
                        href="https://ascrivener-merchant-game.herokuapp.com/"
                        role="button"
                        target="blank"
                      >
                        <img
                          className="img-fluid rounded"
                          src={merchantGame}
                          alt="Merchant Game"
                        />
                      </a>
                      <hr />
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a
                            className="text-dark"
                            href="https://github.com/Wombattree/MerchantGame"
                            target="blank"
                            role="button"
                          >
                            <FontAwesomeIcon
                              icon={faGithub}
                              className="fa-xl"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div
              className="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div className="mainflip">
                <div className="frontside">
                  <div className="card">
                    <h4 className="card-title mt-5">Work Day Scheduler</h4>
                    <div className="card-body text-center">
                      <p className="card-text mt-4">
                        Simple calendar application that allows a user to save
                        events for each hour of the day. This app is running in
                        the browser and feature dynamically updated HTML and CSS
                        powered by jQuery.
                      </p>
                      <span className="badge text-bg-secondary p-3 my-4 fs-6">
                        This way for the links 👉
                      </span>
                    </div>
                  </div>
                </div>
                <div className="backside">
                  <div className="card">
                    <div className="card-body text-center">
                      <a
                        className="card-title"
                        href="https://appolinefr.github.io/Work-Day-Scheduler/"
                        role="button"
                        target="blank"
                      >
                        <img
                          className="img-fluid rounded"
                          src={workDay}
                          alt="Work Day Scheduler"
                        />
                      </a>
                      <hr />
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a
                            className="text-dark"
                            href="https://github.com/appolinefr/Work-Day-Scheduler"
                            target="blank"
                            role="button"
                          >
                            <FontAwesomeIcon
                              icon={faGithub}
                              className="fa-xl"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div
              className="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div className="mainflip">
                <div className="frontside">
                  <div className="card">
                    <h4 className="card-title mt-5">Note Taker</h4>
                    <div className="card-body text-center">
                      <p className="card-text mt-4">
                        This Heroku deployed application called Note Taker can
                        be used to write and save notes. This application uses
                        an Express.js back end and saves and retrieves note data
                        from a JSON file.
                      </p>
                      <span className="badge text-bg-secondary p-3 my-4 fs-6">
                        This way for the links 👉
                      </span>
                    </div>
                  </div>
                </div>
                <div className="backside">
                  <div className="card">
                    <div className="card-body text-center">
                      <a
                        className="card-title"
                        href="https://dry-wildwood-71539.herokuapp.com/"
                        role="button"
                        target="blank"
                      >
                        <img
                          className="img-fluid rounded"
                          src={noteTaker}
                          alt="Note Taker"
                        />
                      </a>
                      <hr />
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a
                            className="text-dark"
                            href="https://github.com/appolinefr/Note-Taker"
                            target="blank"
                            role="button"
                          >
                            <FontAwesomeIcon
                              icon={faGithub}
                              className="fa-xl"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div
              className="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div className="mainflip">
                <div className="frontside">
                  <div className="card">
                    <h4 className="card-title mt-5">Weather Dashboard</h4>
                    <div className="card-body text-center">
                      <p className="card-text mt-4">
                        This weather dashboard runs in the browser and feature
                        dynamically updated HTML and CSS. It uses OpenWeather
                        One Call API to retrieve weather data for cities and
                        store persistent data to localStorage.
                      </p>
                      <span className="badge text-bg-secondary p-3 my-4 fs-6">
                        This way for the links 👉
                      </span>
                    </div>
                  </div>
                </div>
                <div className="backside">
                  <div className="card">
                    <div className="card-body text-center">
                      <a
                        className="card-title"
                        href="https://appolinefr.github.io/Weather-Dashboard/"
                        role="button"
                        target="blank"
                      >
                        <img
                          className="img-fluid rounded"
                          src={weatherDashboard}
                          alt="Weather Dashboard"
                        />
                      </a>
                      <hr />
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a
                            className="text-dark"
                            href="https://github.com/appolinefr/Weather-Dashboard"
                            target="blank"
                            role="button"
                          >
                            <FontAwesomeIcon
                              icon={faGithub}
                              className="fa-xl"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div
              className="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div className="mainflip">
                <div className="frontside">
                  <div className="card">
                    <h4 className="card-title mt-5">Code Quiz</h4>
                    <div className="card-body text-center">
                      <p className="card-text mt-4">
                        A timed coding quiz with multiple-choice questions. This
                        app with a clean and responsive user interface runs in
                        the browser and features dynamically updated HTML and
                        CSS powered by JS code.
                      </p>
                      <span className="badge text-bg-secondary p-3 my-4 fs-6">
                        This way for the links 👉
                      </span>
                    </div>
                  </div>
                </div>
                <div className="backside">
                  <div className="card">
                    <div className="card-body text-center">
                      <a
                        className="card-title"
                        href="https://appolinefr.github.io/Code-quiz/"
                        role="button"
                        target="blank"
                      >
                        <img
                          className="img-fluid rounded"
                          src={codeQuiz}
                          alt="Code Quiz"
                        />
                      </a>
                      <hr />
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a
                            className="text-dark"
                            href="https://github.com/appolinefr/Code-quiz"
                            target="blank"
                            role="button"
                          >
                            <FontAwesomeIcon
                              icon={faGithub}
                              className="fa-xl"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterContainer />
      </div>
    </div>
  );
}
