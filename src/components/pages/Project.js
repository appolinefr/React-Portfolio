import React from "react";
import marvelProject from "../../images/marvel.png";
import codeQuiz from "../../images/code-quiz.png";
import merchantGame from "../../images/merchantGame.png";
import weatherDashboard from "../../images/weather-dashboard.png";
import workDay from "../../images/work-day.png";
import noteTaker from "../../images/note-taker.png";

export default function Project() {
  return (
    <div className="container mt-5 text-center">
      <div className="row">
        <div className="col-5 offset-1">
          <div className="card mt-4">
            <div className="card-body text-center">
              <h5 className="card-title mb-4 mt-3">Marvel Mystery Matcher</h5>
              <img src={marvelProject} className="card-img-top" alt="..." />
              <p className="card-text"></p>
              <a href="." className="btn btn-secondary m-1">
                Link to app
              </a>
              <a href="." className="btn btn-secondary m-1">
                link to repo
              </a>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="card mt-4">
            <div className="card-body text-center">
              <h5 className="card-title mb-4 mt-3">Code Quiz</h5>
              <img src={codeQuiz} className="card-img-top" alt="..." />
              <p className="card-text"></p>
              <a href="." className="btn btn-secondary m-1">
                Link to app
              </a>
              <a href="." className="btn btn-secondary m-1">
                link to repo
              </a>
            </div>
          </div>
        </div>
        <div className="col-5 offset-1">
          <div className="card mt-4">
            <div className="card-body text-center">
              <h5 className="card-title mb-4 mt-3">Merchant Game</h5>
              <img src={merchantGame} className="card-img-top" alt="..." />
              <p className="card-text"></p>
              <a href="." className="btn btn-secondary m-1">
                Link to app
              </a>
              <a href="." className="btn btn-secondary m-1">
                link to repo
              </a>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="card mt-4">
            <div className="card-body text-center">
              <h5 className="card-title mb-4 mt-3">Weather Dashboard</h5>
              <img src={weatherDashboard} className="card-img-top" alt="..." />
              <p className="card-text"></p>
              <a href="." className="btn btn-secondary m-1">
                Link to app
              </a>
              <a href="." className="btn btn-secondary m-1">
                link to repo
              </a>
            </div>
          </div>
        </div>
        <div className="col-5 offset-1">
          <div className="card mt-4">
            <div className="card-body text-center">
              <h5 className="card-title mb-4 mt-3">Work Day Scheduler</h5>
              <img src={workDay} className="card-img-top" alt="..." />
              <p className="card-text"></p>
              <a href="." className="btn btn-secondary m-1">
                Link to app
              </a>
              <a href="." className="btn btn-secondary m-1">
                link to repo
              </a>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="card mt-4">
            <div className="card-body text-center">
              <h5 className="card-title mb-4 mt-3">Note Taker</h5>
              <img src={noteTaker} className="card-img-top" alt="..." />
              <p className="card-text"></p>
              <a href="." className="btn btn-secondary m-1">
                Link to app
              </a>
              <a href="." className="btn btn-secondary m-1">
                link to repo
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}
