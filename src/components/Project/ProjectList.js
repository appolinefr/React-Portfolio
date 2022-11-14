import React from "react";
import marvelProject from "../../images/marvel.png";
import codeQuiz from "../../images/code-quiz.png";
import merchantGame from "../../images/merchantGame.png";
import weatherDashboard from "../../images/weather-dashboard.png";
import workDay from "../../images/work-day.png";
import noteTaker from "../../images/note-taker.png";
import "../../Project.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const projects = [
  {
    name: "Marvel Mystery Matcher",
    description:
      "Your personality may meld with many superheroes out there in the Marvel universe. This mystery matcher quiz will match you with the Marvel superhero that best suits your personality.",
    image: marvelProject,
    link: "https://rfox01.github.io/Group-4-Project-1/index.html",
  },
  {
    name: "Merchant Game",
    description:
      "The Merchant Game is a medieval themed trading game where players can travel around a world map via icons on a map image to buy and sell goods at different locations on the map..",
    image: merchantGame,
    link: "https://rfox01.github.io/Group-4-Project-1/index.html",
  },
  {
    name: "Work Day Scheduler",
    description:
      "  Simple calendar application that allows a user to save events for each hour of the day. This app is running in the browser and feature dynamically updated HTML and CSS powered by jQuery.",
    image: workDay,
    link: "https://github.com/appolinefr/Work-Day-Scheduler",
  },
  {
    name: "Note Taker",
    description:
      "This Heroku deployed application called Note Taker can be used to write and save notes. This application uses an Express.js back end and saves and retrieves note data from a JSON file.",
    image: noteTaker,
    link: "https://github.com/appolinefr/Note-Taker",
  },
  {
    name: "Weather Dashboard",
    description:
      "This weather dashboard runs in the browser and feature dynamically updated HTML and CSS. It uses OpenWeather One Call API to retrieve weather data for cities and store persistent data to localStorage.",
    image: weatherDashboard,
    link: "https://github.com/appolinefr/Weather-Dashboard",
  },
  {
    name: "Code Quiz",
    description:
      "A timed coding quiz with multiple-choice questions. This app with a clean and responsive user interface runs in the browser and features dynamically updated HTML and CSS powered by JS code.",
    image: codeQuiz,
    link: "https://github.com/appolinefr/Code-quiz",
  },
];

const ProjectList = () => {
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
          {projects.map((project) => (
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div
                className="image-flip"
                ontouchstart="this.classList.toggle('hover');"
              >
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <h4 className="card-title mt-5">{project.name}</h4>
                      <div className="card-body text-center">
                        <p className="card-text mt-4">
                          {project.description}
                          {/* Your personality may meld with many superheroes out
                        there in the Marvel universe. This "mystery matcher"
                        quiz will match you with the Marvel superhero that best
                        suits your personality. */}
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
                          href={project.link}
                          role="button"
                          target="blank"
                        >
                          <img
                            className="img-fluid rounded"
                            src={project.image}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
