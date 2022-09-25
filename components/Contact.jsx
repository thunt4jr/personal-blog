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
      <form method='POST' name='contact'>
        <input type='hidden' name='form-name' value='contact' />
        <div className='row'>
          <div className='col'>
            <div className='form-floating mb-3'>
              <input
                type={"email"}
                className='form-control'
                id='floatingInput'
                placeholder='name@example.com'
                name='email'
              />
              <label htmlFor='floatingInput'>Email Address</label>
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
                name='First Name'
              />
              <label htmlFor='floatingInput'>First Name</label>
            </div>
          </div>
          <div className='col'>
            <div className='form-floating mb-3'>
              <input
                type={"text"}
                id='floatingInput'
                className='form-control'
                placeholder='Last Name'
                name='Last Name'
              />
              <label htmlFor='floatingInput'>Last Name</label>
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
                  name='Message'
                />
                <label htmlFor='floatingTextarea' className='text-dark'>
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
      </form>
    </div>
  );
};

export default Contact;
