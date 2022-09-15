import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../images/logo.png";

const menuLinks = [
  { name: "About", to: "/about", target: "_self" },
  { name: "Blog", to: "/blog", target: "_self" },
  { name: "Resume", to: "/resume", target: "_self" },
  { name: "Projects", to: "/projects", target: "_self" },
  { name: "Contact", to: "#", target: "_self" },
];

const socialMedia = [
  {
    icon: faFacebook,
    href: "https://www.facebook.com/terryhunt4jr",
    target: "_blank",
  },
  {
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/terry-l-hunt-jr/",
    target: "_blank",
  },
  {
    icon: faDiscord,
    href: "https://discord.com/users/thunt4jr#5515",
    target: "_blank",
  },
];

const Navbar = ({ props }) => {
  return (
    <nav class='navbar navbar-expand-md navbar-dark fixed-top bg-dark sticky-top'>
      <div class='container'>
        <Link href={"/"}>
          <a class='navbar-brand'>
            <Image
              alt='Terry Hunt - Full-Stack Developer'
              src={logo}
              height={"65px"}
              width={"65px"}
              style={{ borderRadius: "50%" }}
            />
          </a>
        </Link>

        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarCollapse'
          aria-controls='navbarCollapse'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarCollapse'>
          <ul class='navbar-nav m-auto mb-2 mb-md-0 text-center'>
            {menuLinks.map((link, index) => (
              <Link href={link.to} key={index}>
                <li className='nav-item'>
                  <a className='nav-link' target={link.target} href={link.to}>
                    {link.name}
                  </a>
                </li>
              </Link>
            ))}
          </ul>
          <div className='d-flex flex-row justify-content-center'>
            {socialMedia.map((link, index) => (
              <Link key={index} href={link.href} target={link.target}>
                <a>
                  <FontAwesomeIcon
                    icon={link.icon}
                    style={{ height: "30px" }}
                    className='mx-1 mb-1'
                  />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
