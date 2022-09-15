import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Contact from "../components/Contact";

const DOMAIN = "https://terryhunt.dev";
const DEFAULT_OG_IMAGE = "";

export default function About({
  title = "Learn more about Terry Hunt",
  description = "",
  siteName = "About Page",
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
      <Navbar />
      <main>
        <div className='container py-3'>
          <h1 className='pb-3 text-center'>
            <small className='lead'>about </small>Terry Hunt
          </h1>
          <p>
            Decent information about me, my family, and my software development
            history. I&apos;m a Texan living in Florida for most of my life.
            However, I have moved to Tennessee various times on different
            occasions. I&apos;m a firm believer in God and Jesus. In 2012, the
            most incredible day, I met my future wife, a huge New Jerseyan, and
            tied the knot in 2014. We have two beautiful children together,
            Asher and Ava.{" "}
          </p>
          <p>
            The most significant trouble I have is not able to convert the New
            Jerseyan, who is a giant Philiphian Eagle, into a Dallas Cowboy fan.
            We love watching football and rooting for our opponents team against
            their favorite for enjoyment.
          </p>
          <p>
            Now serious discussion on how I get involved in web development. I
            was born profoundly deaf and could not fit in both cultures - the
            hearing and deaf world. When my father discovered I was deaf, he
            enrolled me at the University of Tennessee to learn how to sign at
            two years old. However, the doctor has suggested that I should not
            learn how to sign and become verbal after years of learning to speak
            by using speech synthesis or computer speech. As a result, I have
            always been interested in computers. By the time I was enrolled in
            elementary school, I was in the gifted program to learn how to type,
            advanced math, and learn how to make shapes and functions on a
            Commodore 64 and Apple Macintosh.{" "}
          </p>
          <p>
            In middle school, I was more interested in engineering and
            programming and often requested to fix computer issues. So when AOL
            dial-up came out and I used Netscape, I became more fascinated with
            how are these websites function. During my last year of middle
            school, I was the library&apos;s student assistant and spent most of
            my time reading about computers and technology.{" "}
          </p>
          <p>
            High school years were a flyby with fantastic years with all these
            technology classes. However, I enjoyed high school every day. My
            classmates would play Duke Nukem, and I wouldn&apos;t be allowed to
            play much time because I was over-competitive. I spent most of my
            time learning to use and write Visual Basic, QBasic, FoxPro, HTML,
            CSS, PHP, FrontPage, Adobe Flash + Photoshop, SwishZone, C++, and
            many more. During my high school year, I rented out dedicated
            servers to Half-Life mods, mainly Counter-Strike and Team Fortress
            Classic, on a Linux server. It was a great learning experience
            outside of school to learn another OS. At the same time, I would
            also host a few IRC and Eggdrop bots along with web hosting. One
            thing that the gamers were missing was the website for their clan. I
            saw an opportunity to make some little money by creating their
            websites with pre-made templates that I had.{" "}
          </p>
          <p>
            This is how my passion and motivation begin for web development.
          </p>
        </div>
      </main>
      <Contact />
      <Footer />
    </div>
  );
}
