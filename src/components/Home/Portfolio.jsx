import React from "react";

const portfolio = [
  {
    name: "Earth",

    desktop:
      "https://res.cloudinary.com/websites-by-trevor/image/upload/c_crop,w_895,h_611/v1688790605/earth_ennmja.png",

    a: "https://earthandelle.netlify.app/",
    alt: "supplement website",
  },
  {
    name: "Spotter",

    desktop:
      "https://res.cloudinary.com/websites-by-trevor/image/upload/c_crop,w_895,h_611/v1688790605/spotter_dnzeel.png",

    a: "https://spotterfitness.netlify.app/",
    alt: "fitness app website",
  },
  {
    name: "Eagle",

    desktop:
      "https://res.cloudinary.com/websites-by-trevor/image/upload/c_crop,w_895,h_611/v1688790605/eagle_et3k0a.png",
    a: "https://eagle-plumes.com/",
    alt: "native american  website",
  },
  {
    name: "UVC",

    desktop:
      "https://res.cloudinary.com/websites-by-trevor/image/upload/v1739819521/Screenshot_2025-02-16_173904_1_oiiopw.png",
    a: "https://eagle-plumes.com/",
    alt: "Cleaning Gadget",
  },
];
export default function Example() {
  return (
    <div
      id="portfolio"
      className="relative bg-[rgb(243,247,255)] pt-16 -mb-8 overflow-hidden sm:pt-24 lg:pt-32"
      style={{
        gridColumn: "span 7",
        gridRowStart: "second",
        gridRowEnd: "third",
      }}
    >
      <div className=" w-screen">
        <div>
          <h2 className="mt-2 mb-4 max-w-3xl mx-auto text-4xl font-mont font-medium tracking-tight text-default text-center .5xl:text-4.5xl">
            <a href="/portfolio">Our Portfolio</a>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap md:mb-10">
          {portfolio.map((example) => (
            <div
              key={example.name}
              className={` flex  flex-col mx-auto h-full -mb-6  ${
                example.name === "UVC" ? "hidden md:block" : ""
              } w-screen md:w-1/2 `}
            >
              <a href={example.a}>
                <img
                  className="relative w-screen h-full"
                  src={example.desktop}
                  alt={example.alt}
                  width="300px"
                  height="200px"
                  loading="lazy"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
