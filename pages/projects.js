import Image from "next/image";
import Link from "next/link";
import React from "react";
import TopMenu from "../components/Navbar";

const clients = [
  {
    name: "Reefmaker",
    url: "https://reefmaker.netlify.app/",
    description:
      "Reefmaker is a commercial website to promote its business on the internet with a passion for improving the marine life in the Gulf of Mexico. Their website is designed in WordPress and is now in the process of recreating it into NextJS.",
    target: "_blank",
    href: "reefmaker",
    image: "/images/reefmaker.png",
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
    image: "/images/annie-faceted-transparent.png",
    platform: "WordPress",
  },
];

export default function projects() {
  return (
    <>
      <TopMenu />
      <div className='container'>
        <div className='col'>
          <h1 className='text-center'>
            Terry Hunt&apos;s <small className='lead'>projects</small>
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
        <div className='col'>
          <div className='row justify-content-center'>
            {clients.map((res, req) => (
              <div
                className='card mx-2 my-2'
                style={{ width: "20rem" }}
                key={req}
              >
                <Image
                  className='card-img-top'
                  src={res.image}
                  alt={res.name}
                  width={"280px"}
                  height={"180px"}
                />
                <div className='card-body'>
                  <h5 className='card-title'>{res.name}</h5>
                  <p className='card-text'>{res.description}</p>
                  <p className='lead'>Platform: {res.platform}</p>
                  <Link href={"#"}>
                    <button type='button' className='btn btn-secondary'>
                      Coming Soon
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
