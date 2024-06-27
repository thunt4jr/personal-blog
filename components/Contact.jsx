import React from "react";

const Contact = () => {
  return (
    <div
      className="container-fluid mt-5"
      id="contact"
      style={{ background: "rgba(165, 201, 202, 0.3)" }}
    >
      <div className="container py-3">
        <h4 className="text-center">
          <small className="lead">Reach out to</small> Terry Hunt
        </h4>
        <hr />
        <p>
          Feel free to contact Terry Hunt anytime about jobs you have available
          or projects that you need to be done for your business.
        </p>
        <form method="POST" name="contact" action="/" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <div className="row">
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  name="email"
                  required
                />
                <label htmlFor="email">Email Address</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="(888)888-8888"
                  name="phone"
                  required
                />
                <label htmlFor="phone">Phone Number</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  id="first-name"
                  className="form-control"
                  placeholder="First Name"
                  name="first-name"
                  required
                />
                <label htmlFor="first-name">First Name</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  id="last-name"
                  className="form-control"
                  placeholder="Last Name"
                  name="last-name"
                  required
                />
                <label htmlFor="last-name">Last Name</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-3">
                <textarea
                  className="form-control mb-3"
                  placeholder="Message for Terry Hunt"
                  id="message"
                  style={{ height: "100px" }}
                  name="message"
                  required
                />
                <label htmlFor="message" className="text-dark">
                  Message
                </label>
              </div>
              <div className="col text-center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
