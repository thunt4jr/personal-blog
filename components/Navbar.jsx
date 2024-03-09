import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const menuLinks = [
  { name: "About", to: "/about" },
  // { name: "Blog", to: "/blog" },
  { name: "Resume", to: "/resume" },
  { name: "Projects", to: "/projects" },
  { name: "Contact", to: "#contact" },
];

const socialMedia = [
  {
    icon: faFacebook,
    href: "https://www.facebook.com/terryhunt4jr",
  },
  {
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/terry-l-hunt-jr/",
  },
  {
    icon: faDiscord,
    href: "https://discord.com/users/thunt4jr#5515",
  },
];

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark sticky-top">
      <div className="container">
        <Image
          alt="Terry Hunt - Full-Stack Developer"
          src="/images/logo.png"
          height={65} // Numeric value without 'px'
          width={65} // Numeric value without 'px'
          className="navbar-brand"
          style={{ borderRadius: "50%", cursor: "pointer" }}
          onClick={() => (window.location.href = "/")}
        />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav m-auto mb-2 mb-md-0 text-center">
            {menuLinks.map((link, index) => (
              <li
                className="nav-item"
                key={index}
                onClick={() => (window.location.href = link.to)}
              >
                <span className="nav-link" style={{ cursor: "pointer" }}>
                  {link.name}
                </span>
              </li>
            ))}
          </ul>
          <div className="d-flex flex-row justify-content-center">
            {socialMedia.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
              >
                <FontAwesomeIcon
                  icon={link.icon}
                  style={{ height: "30px" }}
                  className="mx-1 mb-1"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
