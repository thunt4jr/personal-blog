import Image from "next/image";
import Link from "next/link";
import React from "react";
import Head from "next/head";

const clients = [
  {
    name: "Grand Concourse Railroad",
    url: "https://grand-concourse-railroad.netlify.app/",
    description:
      "The Grand Concourse Railroad is a nonprofit ogranization to educated about trains to public. Often time, there are free Saturdays to promote the train rides.",
    target: "_blank",
    href: "grand-concourse-railroad",
    image: "/images/grand-concourse-railroad.png",
    platform: "ReactJS",
  },
  {
    name: "Reefmaker",
    url: "https://reefmaker.netlify.app/",
    description:
      "Reefmaker is a commercial website to promote its business on the internet with a passion for improving the marine life in the Gulf of Mexico. Their website is designed in WordPress and is now in the process of recreating it into NextJS.",
    target: "_blank",
    href: "reefmaker",
    image: "/images/reefmaker-logo.png",
    platform: "NextJS",
  },
  {
    name: "SB Reef Lights",
    url: "https://sbreeflights.com/",
    description:
      "SB Reef Lights is owned by Mike and Collette Herman, who started a group buy from Facebook and is still in business today. This is the most successful business in the saltwater hobby.",
    target: "_blank",
    href: "sb-reef-lights",
    image: "/images/sb-reef-lights-logo.jpg",
    platform: "Prestashop",
  },
  {
    name: "New Life Dog Rescue",
    url: "https://grand-concourse-railroad.netlify.app/",
    description:
      "New Life Dog Rescue was one of my favorite clients to work with. Not only to do web design for New Life Dog Rescue but get to see updates daily on dogs from the worst condition to the perfect fur-ever home.",
    target: "_blank",
    href: "new-life-dog-rescue",
    image: "/images/new-life-dog-rescue.png",
    platform: "WordPress",
  },
  {
    name: "Billy's Reef Connection",
    url: "https://web.archive.org/web/20160409054156/https://billysreefconnection.com/",
    description:
      "Billy’s Reef Connection was a legendary brand for marine hobbyists with the niche of reef rocks. Billy's Reef Connection first started with WordPress and switched to Prestashop.",
    target: "_blank",
    href: "billys-reef-connection",
    image: "/images/billy-s-reef-connection-logo.jpg",
    platform: "Prestashop",
  },
  {
    name: "Annie Faceted",
    url: "https://anniefaceted.com/",
    description:
      "Annie Faceted is a blogging website by Annie based on delicious food that she enjoys sharing. This platform is WordPress. ",
    target: "_blank",
    href: "annie-faceted",
    image: "/images/annie-faceted.png",
    platform: "WordPress",
  },
];

const DOMAIN = "https://terryhunt.dev/";
const DEFAULT_OG_IMAGE = "https://terryhunt.dev/images/logo.png";

export default function projects({
  title = "Projects that Terry Hunt has done as a full-stack developer",
  description = "Projects that Terry Hunt has done previously as a full-stack developer and always looking forward to new projects.",
  siteName = "Projects",
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
        <div className="col">
          <h1 className="text-center pt-3">
            Terry Hunt&apos;s <small className="lead">projects</small>
          </h1>
          <p>
            I have worked with various projects from vanilla HTML – CSS –
            Javascript, Prestashop, WordPress, Magento, Drupal, Joomla, Shopify,
            BigCommerce, ReactJS, and NextJS. I have given free business
            consultation on improving websites, increasing newsletter signup,
            targeting the right audience for ads, and increasing their sales by
            triple. I have been a web developer since the 1990s, and it has been
            my biggest passion.
          </p>
          <p>Below are the projects that I have done.</p>
          <hr />
        </div>
        <div className="col">
          <div className="row justify-content-center">
            {clients.map((res, req) => (
              <div
                className="card mx-2 my-2"
                style={{ width: "20rem" }}
                key={req}
              >
                <Image
                  className="card-img-top"
                  src={res.image}
                  alt={res.name}
                  width={280}
                  height={180}
                />
                <div className="card-body">
                  <h5 className="card-title">{res.name}</h5>
                  <p className="card-text">{res.description}</p>
                  <p className="lead">Platform: {res.platform}</p>
                  <Link href={"/projects/" + `${res.href}`}>
                    <button type="button" className="btn btn-secondary">
                      {res.name}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
