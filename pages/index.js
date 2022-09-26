import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGit,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faServer } from "@fortawesome/free-solid-svg-icons";

const DOMAIN = "https://terryhunt.dev";
const DEFAULT_OG_IMAGE = "https://terryhunt.dev/images/logo.png";
const skills = [
  { icon: faHtml5 },
  { icon: faCss3 },
  { icon: faJsSquare },
  { icon: faReact },
  { icon: faCode },
  { icon: faGithub },
  { icon: faGit },
  { icon: faWordpress },
  { icon: faServer },
];

export default function Home({
  title = "Terry Hunt Dev - Full Stack Developer",
  description = "Terry Hunt is a Full-Stack Developer with excellent knowledge in a variety of web development fields, including HTML/CSS/JS, WordPress, ReactJS, etc.",
  siteName = "Home",
  canonical = DOMAIN,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  twitterHandle = "@TerryHuntDev",
}) {
  return (
    <div>
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
      <main className='d-flex justify-content-center align-items-center pt-3'>
        <div className='container text-center'>
          <h1 className='display-4'>Terry Hunt</h1>
          <h2 className='display-6'>Full-Stack Developer</h2>

          <p className='text-center lead'>
            I am a full stack developer with experience understanding frontend,
            backend, and serverside. Also, with excellent knowledge of SEO
            (Search Engine Optimization), SEM (Search Engine Marketing), and SMM
            (Social Media Marketing). Along with HTML/CSS web development since
            the 1990s and over ten years of experience with WordPress,
            Prestashop, and many other CMS. Not only focus on WordPress, HTML,
            and CSS but also focus on React.js, Next.js, and Javascript. With a
            passion for web and full-stack development, I constantly thrive on
            new projects and learn more about improvements.
          </p>
          {skills.map((link, index) => (
            <FontAwesomeIcon
              key={index}
              icon={link.icon}
              style={{ height: "60px" }}
              className='mx-3 my-4'
            />
          ))}
          <p className='lead'>
            Other work that I have done was newsletter system, customer
            targeting for their eCommerce, and improving the client’s speed or
            functionality for their websites. With my excellent understanding of
            web development, I am very motivated and self-driven on new and
            existing projects or jobs.
          </p>
          <Link href='/about'>
            <a className='btn'>Learn More...</a>
          </Link>
        </div>
      </main>
    </div>
  );
}
