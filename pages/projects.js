import Image from "next/image";
import React from "react";
import TopMenu from "../components/Navbar";

export default function projects() {
  return (
    <>
      <TopMenu />
      <div className='container'>
        <div className='col'>
          <div className='row pt-2'>
            <div className='card' style={{ width: "20rem" }}>
              <div className='card-body'>
                <h5 className='card-title'>Card Title</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos content.
                </p>

                <button
                  type='button'
                  className='btn btn-secondary'
                  data-toggle='modal'
                  data-target='#exampleModalCenter'
                >
                  Go somewhere
                </button>
              </div>
            </div>
            <div
              className='modal fade'
              id='exampleModalCenter'
              tabIndex='-1'
              role='dialog'
              aria-labelledby='exampleModalCenterTitle'
              aria-hidden='true'
            >
              <div
                className='modal-dialog modal-dialog-centered'
                role='document'
              >
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h5 className='modal-title' id='exampleModalLongTitle'>
                      Modal title
                    </h5>
                    <button
                      type='button'
                      className='close'
                      data-dismiss='modal'
                      aria-label='Close'
                    >
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div className='modal-body'>...</div>
                  <div className='modal-footer'>
                    <button
                      type='button'
                      className='btn btn-secondary'
                      data-dismiss='modal'
                    >
                      Close
                    </button>
                    <button type='button' className='btn btn-primary'>
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
