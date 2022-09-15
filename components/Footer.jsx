import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className='footer text-center py-3'>
      <div>
        <p className='lead'>
          @ 1982 - {new Date().getFullYear()} Terry Hunt Dev All Rights Reserved
        </p>
        <p className='lead'>
          Designed with{" "}
          <FontAwesomeIcon
            icon={faHeart}
            beat
            style={{ color: "red", height: "20px" }}
          />{" "}
          using{" "}
          <a
            href='https://nextjs.org/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white-50'
          >
            Next.js
          </a>{" "}
          by{" "}
          <a
            href='https://terryhunt.dev'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white-50'
          >
            Terry Hunt
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
