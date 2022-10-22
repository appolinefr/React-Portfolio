import React from "react";
import FooterContainer from "../Footer";
import { useForm } from "react-hook-form";

const styles = {
  btn: {
    background: "#A64B2A",
    borderColor: "#A64B2A",
  },
  title: {
    color: "#A64B2A",
  },
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => alert("Thank you!");

  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-6 offset-3">
          <div className="container mt-5">
            <h1 className="" style={styles.title}>
              Work with me
            </h1>
            <p className="my-4">
              If you like what you see and would like to work with me, please
              fill out the form below and I will get back to you.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label for="name" className="form-label">
                  Your name
                </label>
                <input type="text" className="form-control" required />
              </div>
              <div class="mb-3">
                <label for="emailAddress" className="form-label">
                  Your email address
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  })}
                />
                {errors.email && <span>Invalid email</span>}
              </div>
              <div class="mb-3">
                <label for="comment" className="form-label">
                  Your message
                </label>
                <textarea className="form-control" required></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-secondary mb-5"
                style={styles.btn}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <FooterContainer />
    </div>
  );
}
