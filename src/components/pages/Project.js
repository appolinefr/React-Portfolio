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
    <div className="container mt-5 text-center">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div
            className="image-flip"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className="mainflip">
              <div className="frontside">
                <div className="card">
                  <h4 className="card-title mt-4">Marvel Mystery Matcher</h4>
                  <div className="card-body text-center">
                    <img
                      className="img-fluid rounded mb-4"
                      src={marvelProject}
                      alt="Marvel Mystery Matcher"
                    />
                  </div>
                </div>
              </div>
              <div className="backside">
                <div className="card">
                  <div className="card-body text-center mt-4">
                    <a
                      className="card-title"
                      href="https://rfox01.github.io/Group-4-Project-1/index.html"
                      role="button"
                      target="blank"
                    >
                      Marvel Mystery Matcher
                    </a>
                    <p className="card-text mt-4">
                      Your personality may meld with many superheroes out there
                      in the Marvel universe. This "mystery matcher" quiz will
                      match you with the Marvel superhero that best suits your
                      personality.
                    </p>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a
                          className="btn btn-link btn-floating btn-lg text-dark m-1"
                          href="https://github.com/RFox01/Group-4-Project-1"
                          target="blank"
                          role="button"
                          data-mdb-ripple-color="dark"
                        >
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div
            className="image-flip"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className="mainflip">
              <div className="frontside">
                <div className="card">
                  <h4 className="card-title mt-4">Merchant Game</h4>
                  <div className="card-body text-center">
                    <img
                      className="img-fluid rounded mb-4"
                      src={merchantGame}
                      alt="Merchant Game"
                    />
                  </div>
                </div>
              </div>
              <div className="backside">
                <div className="card">
                  <div className="card-body text-center mt-4">
                    <a
                      className="card-title"
                      href="https://ascrivener-merchant-game.herokuapp.com/"
                      role="button"
                      target="blank"
                    >
                      Merchant Game
                    </a>
                    <p className="card-text mt-4">
                      Your personality may meld with many superheroes out there
                      in the Marvel universe. This "mystery matcher" quiz will
                      match you with the Marvel superhero that best suits your
                      personality.
                    </p>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a
                          className="btn btn-link btn-floating btn-lg text-dark m-1"
                          href="https://github.com/Wombattree/MerchantGame"
                          target="blank"
                          role="button"
                          data-mdb-ripple-color="dark"
                        >
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div
            className="image-flip"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className="mainflip">
              <div className="frontside">
                <div className="card">
                  <h4 className="card-title mt-4">Code Quiz</h4>
                  <div className="card-body text-center">
                    <img
                      className="img-fluid rounded mb-4"
                      src={codeQuiz}
                      alt="Code Quiz"
                    />
                  </div>
                </div>
              </div>
              <div className="backside">
                <div className="card">
                  <div className="card-body text-center mt-4">
                    <a
                      className="card-title"
                      href="https://appolinefr.github.io/Code-quiz/"
                      role="button"
                      target="blank"
                    >
                      Code Quiz
                    </a>
                    <p className="card-text mt-4">
                      Your personality may meld with many superheroes out there
                      in the Marvel universe. This "mystery matcher" quiz will
                      match you with the Marvel superhero that best suits your
                      personality.
                    </p>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a
                          className="btn btn-link btn-floating btn-lg text-dark m-1"
                          href="https://github.com/appolinefr/Code-quiz"
                          target="blank"
                          role="button"
                          data-mdb-ripple-color="dark"
                        >
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div
            className="image-flip"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className="mainflip">
              <div className="frontside">
                <div className="card">
                  <h4 className="card-title mt-4">Note Taker</h4>
                  <div className="card-body text-center">
                    <img
                      className="img-fluid rounded mb-4"
                      src={noteTaker}
                      alt="Note Taker"
                    />
                  </div>
                </div>
              </div>
              <div className="backside">
                <div className="card">
                  <div className="card-body text-center mt-4">
                    <a
                      className="card-title"
                      href="https://dry-wildwood-71539.herokuapp.com/"
                      role="button"
                      target="blank"
                    >
                      Note Taker
                    </a>
                    <p className="card-text mt-4">
                      Your personality may meld with many superheroes out there
                      in the Marvel universe. This "mystery matcher" quiz will
                      match you with the Marvel superhero that best suits your
                      personality.
                    </p>

                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a
                          className="btn btn-link btn-floating btn-lg text-dark m-1"
                          href="https://github.com/appolinefr/Note-Taker"
                          target="blank"
                          role="button"
                          data-mdb-ripple-color="dark"
                        >
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div
            className="image-flip"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className="mainflip">
              <div className="frontside">
                <div className="card">
                  <h4 className="card-title mt-4">Weather Dashboard</h4>
                  <div className="card-body text-center">
                    <img
                      className="img-fluid rounded mb-4"
                      src={weatherDashboard}
                      alt="Weather Dashboard"
                    />
                  </div>
                </div>
              </div>
              <div className="backside">
                <div className="card">
                  <div className="card-body text-center mt-4">
                    <a
                      className="card-title"
                      href="https://appolinefr.github.io/Weather-Dashboard/"
                      role="button"
                      target="blank"
                    >
                      Weather Dashboard
                    </a>
                    <p className="card-text mt-4">
                      Your personality may meld with many superheroes out there
                      in the Marvel universe. This "mystery matcher" quiz will
                      match you with the Marvel superhero that best suits your
                      personality.
                    </p>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a
                          className="btn btn-link btn-floating btn-lg text-dark m-1"
                          href="https://github.com/appolinefr/Weather-Dashboard"
                          target="blank"
                          role="button"
                          data-mdb-ripple-color="dark"
                        >
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div
            className="image-flip"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className="mainflip">
              <div className="frontside">
                <div className="card">
                  <h4 className="card-title mt-4">Work Day Scheduler</h4>
                  <div className="card-body text-center">
                    <img
                      className="img-fluid rounded mb-4"
                      src={workDay}
                      alt="Work Day Scheduler"
                    />
                  </div>
                </div>
              </div>
              <div className="backside">
                <div className="card">
                  <div className="card-body text-center mt-4">
                    <a
                      className="card-title"
                      href="https://appolinefr.github.io/Work-Day-Scheduler/"
                      role="button"
                      target="blank"
                    >
                      Work Day Scheduler
                    </a>
                    <p className="card-text mt-4">
                      Your personality may meld with many superheroes out there
                      in the Marvel universe. This "mystery matcher" quiz will
                      match you with the Marvel superhero that best suits your
                      personality.
                    </p>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a
                          className="btn btn-link btn-floating btn-lg text-dark m-1"
                          href="https://github.com/appolinefr/Work-Day-Scheduler"
                          target="blank"
                          role="button"
                          data-mdb-ripple-color="dark"
                        >
                          <FontAwesomeIcon icon={faGithub} />
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
  );
}
