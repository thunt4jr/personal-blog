import React from "react";
import Head from "next/head";
import Image from "next/image";
import grandConcourseRailroadLogo from "../../public/images/grand-concourse-railroad.png";

const DOMAIN = "https://terryhunt.dev/";
const DEFAULT_OG_IMAGE = "https://terryhunt.dev/images/logo.png";
export default function grandconcourserailroad({
  title = "Grand Concourse Railroad project done by Terry Hunt",
  description = "One of Terry Hunt's projects working with Grand Concourse Railroad as a full-stack developer using ReactJS",
  siteName = "Grand Concourse Railroad",
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
      <div className='container text-center'>
        <Image
          src={grandConcourseRailroadLogo}
          alt='Grand Concourse Railroad'
        />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1 className='text-center'>Grand Concourse Railroad</h1>
            <p>
              Grand Concourse Railroad is a nonprofit organization at the
              Concourse in Shady Hills, Florida. The Grand Concourse Railroad
              provides entertainment on mini trains throughout the woodlike
              areas. They also host birthday parties almost every weekend and
              yearly Halloween, Christmas, and Easter events. Free train rides
              are on the first Saturday of the month except for October and
              December.
            </p>
            <p>
              Initially, the job at Grand Concourse Railroad was to do marketing
              flyers for social media posts, handouts, and posters. No website
              was established, but only heavy dependence on Facebook for their
              marketing. So I firmly recommended that a website would be helpful
              for their event promotion along with Google My Business and Google
              Ads for Nonprofit, create landing pages for their events and
              advertising.
            </p>
            <p>
              Their website is ReactJS using React-Bootstrap and Bootstrap. The
              Grand Concourse Railroad is stringent on its spending budget for
              hosting, and they are using free Netlify. I suggested not using
              WordPress if they strictly spend on web design and creating their
              entire website from scratch.
            </p>
            <p>
              Also have provided business consultation on how to receive more
              donations and create awareness of their organization by creating
              sponsorship packages.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
