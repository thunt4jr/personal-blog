import React from "react";
import Head from "next/head";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const contactInfo = [
  { icon: faPhone, href: "tel:+18133591477", word: "Call" },
  { icon: faEnvelope, href: "mailto:hello@terryhunt.dev", word: "Email" },
  {
    icon: faGithub,
    href: "https://github.com/thunt4jr",
    word: "Github",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/terry-l-hunt-jr/",
    word: "Linkedin",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

const profile = [
  {
    introduction:
      "Detail-oriented HTML, and CSS developer with 10+ years of experience developing, testing, debugging, and maintaining WordPress. Investigating new technologies such as ReactJS, NodeJS, and Express to expand my knowledge.",
  },
];

const education = [
  {
    degree: "Bachelor of Applied Science",
    major: "Technology Development & Management Software Development",
    college: "St. Petersburg College",
    year: "2020-2021",
    information: "Degree Information",
    collegeLink:
      "https://www.spcollege.edu/future-students/degrees-training/technology/technology-development-and-management/technology-development-and-management-bas-degree",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    degree: "Associate of Arts",
    major: "General Studies",
    college: "St. Petersburg College",
    year: "2019-2020",
    information: "Degree Information",
    collegeLink:
      "https://www.spcollege.edu/future-students/degree-options/associate-in-arts-degrees-and-transfer-plans",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    degree: "Associate of Science",
    major: "Software Application Development",
    college: "Rasmussen College",
    year: "2015-2017",
    information: "Degree Information",
    collegeLink:
      "https://www.rasmussen.edu/degrees/technology/software-application-development/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    degree: "Certification",
    major: "Software Application Dev Certification",
    college: "Rasmussen College",
    year: "2017",
    information: "Certification Information",
    collegeLink: "https://www.rasmussen.edu/degrees/technology/certifications/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];
const skills = [
  { language: "React JS", percentage: "60", skillStyle: "60%" },
  { language: "JavaScript", percentage: "50", skillStyle: "50%" },
  { language: "HTML", percentage: "90", skillStyle: "90%" },
  { language: "Frontend", percentage: "80", skillStyle: "80%" },
  { language: "Database", percentage: "70", skillStyle: "70%" },
  { language: "SEO", percentage: "90", skillStyle: "90%" },
  { language: "Newsletter", percentage: "90", skillStyle: "90%" },
  { language: "eCommerce", percentage: "80", skillStyle: "80%" },
  { language: "Cloud Hosting", percentage: "40", skillStyle: "40%" },
];
const experience = [
  {
    title: "Full-Stack Developer",
    company: "Freelance",
    year: "2021 - Present",
    description: [
      "Learning JavaScript, NodeJS, ReactJS, and Express.",
      "Database administration and website design.",
      "Create blogs using Strapi and Sanity.",
      "Consulting clients on improving online presence for their businesses. Including appearance, grammar, speed performance, backup system, and uptime.",
    ],
  },
  {
    title: "Web  Developer",
    company: "Whoa Website, LLC.",
    year: "2013 - 2020",
    description: [
      "Provide shared hosting on a self-managed dedicated server for WordPress – WooCommerce, Prestashop, and various CMS with over 200 clients per server with 99.999% uptime.",
      "Help triple clients’ sales by revamping their front-end, marketing, and SEO websites.",
      "Designed and launch 60 websites per year.",
      "Maintained over 20 eCommerce websites per month, including products, SEO, and newsletters.",
      "Worked with MailChimp, Sendy, SendinBlue, and WordPress - Newsletter 96% success delivery rate.",
    ],
  },
];
const DOMAIN = "https://terryhunt.dev";
const DEFAULT_OG_IMAGE = "";
export default function resume({
  title = "Terry Hunt's Resume for Full-Stack Developer Position",
  description = "Resume of Terry Hunt for a Full-Stack Developer position along with WordPress, Prestashop, Email HTML, Newsletter, and ReactJS experience. ",
  siteName = "Resume Page",
  canonical = DOMAIN,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  twitterHandle = "@TerryHuntDev",
}) {
  return (
    <>
      <Head>
        <title key='title'>{`${title} – ${siteName}`}</title>
        <meta name='description' content={description} />
        <meta key='og_type' property='og:type' content={ogType} />
        <meta key='og_title' property='og:title' content={title} />
        <meta
          key='og_description'
          property='og:description'
          content={description}
        />
        <meta key='og_locale' property='og:locale' content='en_IE' />
        <meta key='og_site_name' property='og:site_name' content={siteName} />
        <meta key='og_url' property='og:url' content={canonical ?? DOMAIN} />
        <meta key='og_site_name' property='og:site_name' content={siteName} />
        <meta
          key='og_image'
          property='og:image'
          content={ogImage ?? DEFAULT_OG_IMAGE}
        />
        <meta
          key='og_image:alt'
          property='og:image:alt'
          content={`${title} | ${siteName}`}
        />
        <meta key='og_image:width' property='og:image:width' content='1200' />
        <meta key='og_image:height' property='og:image:height' content='630' />

        <meta name='robots' content='index,follow' />

        <meta
          key='twitter:card'
          name='twitter:card'
          content='summary_large_image'
        />
        <meta key='twitter:site' name='twitter:site' content={twitterHandle} />
        <meta
          key='twitter:creator'
          name='twitter:creator'
          content={twitterHandle}
        />
        <meta key='twitter:title' property='twitter:title' content={title} />
        <meta
          key='twitter:description'
          property='twitter:description'
          content={description}
        />

        <link rel='canonical' href={canonical ?? DOMAIN} />

        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <div className='container'>
        <div className='row px-3'>
          <div className='col'>
            <h1 className='text-center'>
              Terry Hunt&apos;s <small className='lead'>resume</small>
            </h1>
            <h3 className='text-center'>Full-Stack Developer</h3>
          </div>
          <hr />
        </div>
        <div className='row'>
          <div className='col-2'>
            {contactInfo.map((link, index) => (
              <div className='d-flex mb-2' key={index}>
                <Link href={link.href} target={link.target} rel={link.rel}>
                  <a>
                    <FontAwesomeIcon icon={link.icon} height={"15px"} />{" "}
                    {link.word}
                  </a>
                </Link>
              </div>
            ))}
          </div>
          <div className='col-10'>
            <p className='display-6'>Profile</p>
            {profile.map((link, index) => (
              <p key={index}>{link.introduction}</p>
            ))}
          </div>
          <hr />
        </div>

        <div className='row'>
          <p className='display-6 text-center'>Education</p>
          {education.map((link, index) => (
            <div className='col mb-3' key={index}>
              <p className='mb-1'>{link.degree}</p>
              <p className='mb-1'>{link.major}</p>
              <p className='lead mb-1'>{link.college}</p>
              <p className='mb-1'>{link.year}</p>
              <Link href={link.collegeLink} target={link.target} rel={link.rel}>
                <a>{link.information}</a>
              </Link>
            </div>
          ))}
          <hr />
        </div>
        <div className='row'>
          <div className='col-2'>
            <p className='display-6 text-center'>Skills</p>
            {skills.map((link, index) => (
              <>
                <div className='progress' key={index}>
                  <div
                    className='progress-bar progress-bar-striped progress-bar-animated'
                    role='progressbar'
                    style={{ width: `${link.skillStyle}` }}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    key={index}
                  >
                    {link.percentage}%
                  </div>
                </div>
                <p>{link.language}</p>
              </>
            ))}
          </div>
          <div className='col-10'>
            <p className='display-6 text-center'>Experience</p>
            {experience.map((link, index) => (
              <div key={index}>
                <p className='mb-1 lead'>{link.title}</p>
                <p className='mb-1'>{link.company}</p>
                <p className='mb-1'>{link.year}</p>
                <ul>
                  {link.description.map((list, index) => (
                    <li key={index}>{list}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className='row'>
          {" "}
          <p>
            Why are my skills not 100%? Because technology changes every day and
            it is always a great experience to learn something new, whether it
            is enjoyable or not.{" "}
          </p>
          <p>
            If you are interested in having a copy of my resume for your file or
            for the next available position as a full-stack or front-end
            developer. Please, feel free to download a copy of my resume. You
            can always reach out to me for any questions about software
            development.
          </p>
          <button
            type='button'
            className='btn btn-secondary btn-lg'
            href='files/Terry-Hunt-Resume.pdf'
            target='_blank'
          >
            Download Resume
          </button>
        </div>
        <hr />
      </div>
      <Contact />
      <Footer />
    </>
  );
}
