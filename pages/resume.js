import React from "react";
import Head from "next/head";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import TopMenu from "../components/Navbar";

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
  { language: "Next.JS - Pages", percentage: "80", skillStyle: "80%" },
  { language: "Next.JS - Apps", percentage: "60", skillStyle: "60%" },
  { language: "React.JS", percentage: "80", skillStyle: "80%" },
  { language: "Node.JS", percentage: "70", skillStyle: "70%" },
  { language: "Express.JS", percentage: "70", skillStyle: "70%" },
  { language: "Strapi.IO", percentage: "70", skillStyle: "70%" },
  { language: "WordPress", percentage: "90", skillStyle: "90%" },
  { language: "Prestashop", percentage: "90", skillStyle: "90%" },
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
    company: "SOFWERX",
    year: "October 2022 - Present",
    description: [
      "Spearheaded the end-to-end redesign and development of the website, utilizing the open-source Headless CMS Strapi and leveraging advanced features of NextJS 13 and NextJS 14 to boost performance and user experience.",
      "Integrated React Hook Form to enhance form management, significantly improving performance and user experience through efficient validation and error handling.",
      "Demonstrated expertise in Next.js, optimizing page and app directory structures for efficient routing, SEO, and streamlined development processes.",
      "Managed deployments in Microsoft Azure, AWS, and Linux environments, ensuring high availability and scalability. Implemented NextAuth and Azure AD for robust authentication and Single Sign-On (SSO), enhancing security and user experience.",
      "Acted as a mentor, offering comprehensive guidance through the project lifecycle and fostering a supportive environment for the professional growth of interns.",
      "Led bi-weekly design collaboration sessions with the team, using Figma to iteratively create and refine website mockups, aligning closely with project objectives.",
      "Worked with serverless and event-driven architecture in AWS, utilizing services like Lambda, DynamoDB, API Gateway, CloudFront, Amplify, and S3 to build scalable, high-performance applications.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Freelance",
    year: "January 2021 - Present",
    description: [
      "Mastered a suite of technologies, including JavaScript, NodeJS, ReactJS, and Express, demonstrating advanced skills in both front-end and back-end development.",
      "Excelled in database administration, ensuring efficient data storage, retrieval, and security across multiple projects.",
      "Specialized in website design, creating visually appealing and user-friendly interfaces for a diverse range of clients.",
      "Developed and deployed blogs and eCommerce solutions utilizing headless CMS technologies like Strapi and Sanity, tailoring each solution to meet specific client needs.",
    ],
  },
  {
    title: "Web  Developer",
    company: "Whoa Website, LLC.",
    year: "August 2013 - December 2020",
    description: [
      "Administered shared hosting on self-managed dedicated servers, supporting WordPress/WooCommerce, Prestashop, and various CMS platforms. Each server catered to over 200 clients, achieving an exceptional 99.999% uptime performance.",
      "Spearheaded transformative initiatives that tripled clients' sales through comprehensive enhancements in front-end design, marketing strategies, and SEO optimization.",
      "Demonstrated expertise in optimizing business outcomes, delivering a nearly 60% increase in annual sales for clients, with revenues ranging from $300,000 to $2 million.",
      "Orchestrated the design and launch of an impressive portfolio of 60 websites annually, ensuring seamless functionality and aesthetic appeal.",
      "Managed a dynamic portfolio of over 20 eCommerce websites monthly, including meticulous product management, SEO refinement, and effective newsletter campaigns.",
      "Utilized a diverse array of email marketing platforms, such as MailChimp, Sendy, SendinBlue, and the WordPress Newsletter plugin, to achieve an outstanding 96% success rate in email delivery.",
    ],
  },
];
const DOMAIN = "https://terryhunt.dev";
const DEFAULT_OG_IMAGE = "https://terryhunt.dev/images/logo.png";
export default function resume({
  title = "Terry Hunt's Resume for Full-Stack Developer Position",
  description = "Resume of Terry Hunt for a Full-Stack Developer position along with WordPress, Prestashop, Email HTML, Newsletter, and ReactJS experience.",
  siteName = "Resume Page",
  canonical = DOMAIN,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  twitterHandle = "@TerryHuntDev",
}) {
  return (
    <>
      <Head>
        <title key="title">{`${title} – ${siteName}`}</title>
        <meta name="description" content={description} />
        <meta key="og_type" property="og:type" content={ogType} />
        <meta key="og_title" property="og:title" content={title} />
        <meta
          key="og_description"
          property="og:description"
          content={description}
        />
        <meta key="og_locale" property="og:locale" content="en_IE" />
        <meta key="og_site_name" property="og:site_name" content={siteName} />
        <meta key="og_url" property="og:url" content={canonical ?? DOMAIN} />
        <meta key="og_site_name" property="og:site_name" content={siteName} />
        <meta
          key="og_image"
          property="og:image"
          content={ogImage ?? DEFAULT_OG_IMAGE}
        />
        <meta
          key="og_image:alt"
          property="og:image:alt"
          content={`${title} | ${siteName}`}
        />
        <meta key="og_image:width" property="og:image:width" content="1200" />
        <meta key="og_image:height" property="og:image:height" content="630" />

        <meta name="robots" content="index,follow" />

        <meta
          key="twitter:card"
          name="twitter:card"
          content="summary_large_image"
        />
        <meta key="twitter:site" name="twitter:site" content={twitterHandle} />
        <meta
          key="twitter:creator"
          name="twitter:creator"
          content={twitterHandle}
        />
        <meta key="twitter:title" property="twitter:title" content={title} />
        <meta
          key="twitter:description"
          property="twitter:description"
          content={description}
        />

        <link rel="canonical" href={canonical ?? DOMAIN} />

        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="row px-3">
          <div className="col">
            <h1 className="text-center">
              Terry Hunt&apos;s <small className="lead">resume</small>
            </h1>
            <h3 className="text-center">Full-Stack Developer</h3>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-2">
            {contactInfo.map((link, index) => (
              <div className="d-flex mb-2" key={index}>
                <Link href={link.href} target={link.target} rel={link.rel}>
                  <FontAwesomeIcon icon={link.icon} height={"15px"} />{" "}
                  {link.word}
                </Link>
              </div>
            ))}
          </div>
          <div className="col-10">
            <p className="display-6">Profile</p>
            {profile.map((link, index) => (
              <p key={index}>{link.introduction}</p>
            ))}
          </div>
          <hr />
        </div>

        <div className="row">
          <p className="display-6 text-center">Education</p>
          {education.map((link, index) => (
            <div className="col mb-3" key={index}>
              <p className="mb-1">{link.degree}</p>
              <p className="mb-1">{link.major}</p>
              <p className="lead mb-1">{link.college}</p>
              <p className="mb-1">{link.year}</p>
              <Link href={link.collegeLink} target={link.target} rel={link.rel}>
                {link.information}
              </Link>
            </div>
          ))}
          <hr />
        </div>
        <div className="row">
          <div className="col-2">
            <p className="display-6 text-center">Skills</p>
            {skills.map((link, index) => (
              <>
                <div className="progress" key={index}>
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
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
          <div className="col-10">
            <p className="display-6 text-center">Experience</p>
            {experience.map((link, index) => (
              <div key={index}>
                <p className="mb-1 lead">{link.title}</p>
                <p className="mb-1">{link.company}</p>
                <p className="mb-1">{link.year}</p>
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
        <div className="row">
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
          <a
            className="text-center"
            href="https://terryhunt.dev/files/Terry-Hunt-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="btn btn-secondary btn-lg">
              Download Resume
            </button>
          </a>
        </div>
        <hr />
      </div>
    </>
  );
}
