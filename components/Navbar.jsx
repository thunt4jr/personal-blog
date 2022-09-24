import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

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
    <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark sticky-top'>
      <div className='container'>
        <Link href={"/"}>
          <a className='navbar-brand'>
            <Image
              alt='Terry Hunt - Full-Stack Developer'
              src={"/images/logo.png"}
              height={"65px"}
              width={"65px"}
              style={{ borderRadius: "50%" }}
            />
          </a>
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarCollapse'
          aria-controls='navbarCollapse'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarCollapse'>
          <ul className='navbar-nav m-auto mb-2 mb-md-0 text-center'>
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
