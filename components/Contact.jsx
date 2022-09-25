import React from "react";

const Contact = () => {
  return (
    <div className='container' id='contact'>
      <h4>Reach out to Terry Hunt </h4>
      <hr />
      <p>
        Feel free to contact Terry Hunt anytime about jobs you have available or
        projects that you need to be done for your business.
      </p>
      <div className='row'>
        <div className='col'>
          <div className='form-floating mb-3'>
            <input
              type={"email"}
              className='form-control'
              id='floatingInput'
              placeholder='name@example.com'
            />
            <label for='floatingInput'>Email Address</label>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='form-floating mb-3'>
            <input
              type={"text"}
              id='floatingInput'
              className='form-control'
              placeholder='First Name'
            />
            <label for='floatingInput'>First Name</label>
          </div>
        </div>
        <div className='col'>
          <div className='form-floating mb-3'>
            <input
              type={"text"}
              id='floatingInput'
              className='form-control'
              placeholder='Last Name'
            />
            <label for='floatingInput'>Last Name</label>
          </div>
        </div>
        <div>
          <div className='col'>
            <div className='form-floating mb-3'>
              <textarea
                className='form-control mb-3'
                placeholder='Message for Terry Hunt'
                id='floatingTextarea'
                style={{ height: "100px" }}
              />
              <label for='floatingTextarea' className='text-dark'>
                Message
              </label>
              <div className='col text-center'>
                <button type='submit' className='btn'>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
