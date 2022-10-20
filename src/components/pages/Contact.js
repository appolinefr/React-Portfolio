import React from "react";

export default function Contact() {
  return (
    <div className="container mt-5 bg-light">
      <div className="row">
        <div className="col-6 offset-3">
          <div className="container mt-5">
            <form>
              <div className="mb-3">
                <label for="name" className="form-label">
                  Your name
                </label>
                <input type="email" className="form-control" />
              </div>
              <div class="mb-3">
                <label for="emailAddress" className="form-label">
                  Your email address
                </label>
                <input type="text" className="form-control" />
              </div>
              <div class="mb-3">
                <label for="comment" className="form-label">
                  Your message{" "}
                </label>
                <textarea className="form-control"></textarea>
              </div>
              <button type="submit" className="btn btn-primary mb-5">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
