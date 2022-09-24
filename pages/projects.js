import Image from "next/image";
import Link from "next/link";
import React from "react";
import TopMenu from "../components/Navbar";

const clients = [
  {
    name: "SB Reef Lights",
    url: "https://sbreeflights.com/",
    description:
      "SB Reef Lights is owned by Mike and Collette Herman who started off group buy from Facebook.",
    target: "_blank",
    href: "/sbreeflights",
    image: "/images/sb-reef-lights-logo.jpg",
  },
  {
    name: "Grand Concourse Railroad",
    url: "https://grand-concourse-railroad.netlify.app/",
    description:
      "The Grand Concourse Railroad is a nonprofit ogranization to educated about trains to public. Often time, there are free Saturdays to promote the train rides.",
    target: "_blank",
    href: "/grandconcourserailroad",
    image: "/images/grand-concourse-railroad.png",
  },
];

export default function projects() {
  return (
    <>
      <TopMenu />
      <div className='container'>
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
                  <Link href={"/projects/" + res.href}>
                    <button type='button' className='btn btn-secondary'>
                      Learn More
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
