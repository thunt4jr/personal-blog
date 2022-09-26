import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import sbReefLightsLogo from "../../public/images/sb-reef-lights-logo.jpg";
import sbReeferLogo from "../../public/images/sb-reefer-lights-logo.png";
import sbReefs from "../../public/images/sb-reefs.png";
import wholesale from "../../public/images/sb-reef-lights-wholesale.png";
import sbWebsite from "../../public/images/sb-reef-lights-website.png";
import sbMenuOne from "../../public/images/sb-menu-1.png";
import sbMenuTwo from "../../public/images/sb-menu-2.png";

export default function sbreeflights() {
  return (
    <>
      <Navbar />
      <div className='container text-center'>
        <Image src={sbReefLightsLogo} alt='SB Reef Lights' />
      </div>
      <div className='container'>
        <h1 className='text-center'>
          SB Reef Lights
          <small className='lead'> - It's What Coral Crave!</small>
        </h1>
        <p>
          SB Reef Lights is one of the most successful clients I have worked
          with. SB Reef Lights is owned by Mike, and Collette Herman, with
          employees of friends and families in Pensacola, Florida. Mike Herman
          was working a full-time job and starting their group buy on Facebook
          in the early 2010s. With much success that Mike has done for the group
          buy, I have reached out to Mike if he wants a website. Not only was
          the group buy successful, but the owners’ leadership was beyond
          successful in ensuring that all customers were taken care of.
        </p>
        <Image src={sbWebsite} alt="SB Reef Lights' Website" />
        <p>
          SB Reef Lights is using{" "}
          <a
            href='https://www.prestashop.com/en'
            target={"_blank"}
            rel='noreferrer noopener'
          >
            Prestashop
          </a>{" "}
          – an open-source e-commerce platform. Jennifer Santolla created the
          Prestashop theme at{" "}
          <a
            href='https://eshopalot.com/templates/hardware-dark-prestashop-theme-1-7/'
            target={"_blank"}
            rel='noreferrer noopener'
          >
            eShopAlot
          </a>
          . The hardware theme is what Mike has fell in love with.
        </p>
        <p>My primary task was:</p>
        <ul>
          <li>Maintain updates</li>
          <li>Daily Backups</li>
          <li>Database Administrator - MySQL</li>
          <li>SEO - Search Engine Optimization</li>
          <li>Add & Remove Products</li>
          <li>Create Graphics</li>
          <li>
            Holiday Marketing - Anniversary Sales, Black Friday, Cyber Monday, &
            Christmas
          </li>
        </ul>
        <p>
          Why was Prestashop chosen? Prestashop is user-friendly for the owners
          and employees. The only thing purchased for Prestashop was the theme
          and mega menu. They wanted a drop-down menu with gradient backgrounds
          and something different to stand out more.
        </p>
        <div className='row'>
          <div className='col text-center'>
            <Image src={sbMenuOne} alt='SB Reef Lights Menu' />
          </div>
          <div className='col text-center'>
            <Image src={sbMenuTwo} alt='SB Reef Lights Menu' />
          </div>
        </div>
        <p>
          Since their website was up and running, their sales have tripled along
          with group buy.
        </p>
      </div>
      <hr className='container' />
      <div className='container pt-2'>
        <h3 className='text-center'>
          Other projects along with SB Reef Lights
        </h3>
        <div className='row'>
          <div className='col'>
            <Image src={sbReeferLogo} alt='SB Reefer Lights' />
          </div>
          <div className='col'>
            <Image src={sbReefs} alt='SB Reefer Lights' />
          </div>
          <div className='col'>
            <Image src={wholesale} alt='SB Reefer Lights' />
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
