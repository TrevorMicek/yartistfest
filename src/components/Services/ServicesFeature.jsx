"use client";
import React from "react";
import { FadeIn } from "../FadeIn";

export default function FeatureOne() {
  const features = [
    {
      name: "Website Design",
      id: "websites",
      description: "Building Modern Solutions For Modern Businesses",
      subDescription:
        "Your business deserves a website that stands out. We create stunning, fully customized websites designed to help local businesses grow, attract more customers, and establish a strong online presence.",
      img: "https://res.cloudinary.com/websites-by-trevor/image/upload/v1742498304/pexels-designecologist-1779487_viyffe.jpg",
      icon: "chart increase, magnifying glass",
      bg: "bg-bg",
      border: "border-l-4 border-default",
      included: [
        "Custom Web Design",
        "Website Development",
        "Outperforms Page Builders",
        "Google & SEO-Optimized",
        "Free Hosting, Maintainence & Landing Page",
        "Developer On Your Team",
      ],
    },
    {
      name: "Search Engine Optimization (SEO)",
      id: "seo",
      description: "Increase Inquiries, Conversions, & Leads",
      subDescription:
        "Get found by the right customers at the right time. Our SEO services help local businesses rank higher on Google, attract more traffic, and grow their customer base.",
      img: "https://res.cloudinary.com/websites-by-trevor/image/upload/v1742498304/pexels-cottonbro-5083397_nxngkq.jpg",
      icon: "pic",
      bg: "bg-indigo-50",
      border: "border-l-4 border-darkergn",
      included: [
        "Keyword & Market Research",
        "On-Page, Off-Page & Technical SEO",
        "Local SEO Optimization",
        "High-Quality, Content Driven Campaigns",
        "Ongoing Tracking & Updates",
      ],
    },
    {
      name: "Social Media Marketing",
      id: "social-media",
      description: "Grow a loyal following online",
      subDescription:
        "Engage your audience, build brand loyalty, and drive real results with expert social media management. We help local businesses stand out on the platforms that matter most.",
      img: "https://res.cloudinary.com/websites-by-trevor/image/upload/v1742498304/pexels-pixabay-267350_wy3bph.jpg",
      icon: "pic",
      bg: "bg-bg",
      border: "border-l-4 border-grn",
      included: [
        "Custom Strategy",
        "High-Quality Content Posted Weekly",
        "Respond To Inquiries",
        "Audience Growth",
        "Push into sales funnel",
      ],
    },
    {
      name: "Google Ads Marketing",
      id: "ads",
      description: "Maximize Your ROI with Google Ads",
      subDescription:
        "Get in front of the right customers at the right time with high-performing Google Ads campaigns. We create, manage, and optimize ads that drive real results for local businesses.",
      img: "https://res.cloudinary.com/websites-by-trevor/image/upload/v1742498304/pexels-caio-67112_rnb0df.jpg",
      icon: "pic",
      bg: "bg-bg",
      border: "border-l-4 border-orange-400",
      included: [
        "Targeted Campaigns",
        "Keyword & Market Research",
        "Ad Copy & Design",
        "Multiple Ads With High-Quality Content and strong CTA",
        "Performance Tracking",
      ],
    },
  ];
  const getBG = (bg) => {
    switch (true) {
      case bg === "cream":
        return "bg-bg, text-white";
      case bg === "bg":
        return "bg-default";
      default:
        return "bg-indigo-50";
    }
  };
  return (
    <div className="relative ">
      <main>
        <div className="  text-left  ">
          <div className="flex flex-col ">
            {features.map((item) => (
              <div
                id={item.id}
                key={item.name}
                className={` z-10  ${
                  item.bg === "bg-"
                    ? "text-white z-30 overflow-hidden"
                    : "text-bg"
                } px-3 bg-white text-black border-b-2 py-28 overflow-hidden`}
              >
                <div
                  className={`${
                    item.name === "Messaging & Design"
                      ? ".5lx:flex-row-reverse z-10"
                      : ""
                  } mx-auto flex items-start space-x-3 sm:w-[600px] .5xl:w-[800px] .5xl:h-full`}
                >
                  <div className="">
                    {" "}
                    <div className="w-full h-full mb-5">
                      <img
                        src={item.img}
                        width="100px"
                        height="300px"
                        className="mx-auto relative object-cover h-[350px] w-full sm:w-[575px] sm:object-fit"
                      />
                    </div>
                    <div id="icon" />
                    <h1 className="text-3xl font-[450] font-">{item.name}</h1>
                    <FadeIn
                      viewport={{ once: true, margin: "0px 0px -100px" }}
                      duration={0.75}
                    >
                      <h2 className="text-lg font-base my-4">
                        {item.description}
                      </h2>
                      <p className="text-md font-base mt-1">
                        {item.subDescription}
                      </p>
                    </FadeIn>
                    <FadeIn x={-24}>
                      <ul className={`${item.border} mt-10 font-[475]`}>
                        <FadeIn
                          x={-24}
                          viewport={{ once: true, margin: "0px 0px -100px" }}
                          duration={0.6}
                        >
                          {" "}
                          <li className="pl-5 my-2">{item.included[0]}</li>
                        </FadeIn>
                        <FadeIn
                          x={-24}
                          viewport={{ once: true, margin: "0px 0px -100px" }}
                          duration={0.75}
                        >
                          <li className="pl-5 my-2">{item.included[1]}</li>
                        </FadeIn>
                        <FadeIn
                          x={-24}
                          viewport={{ once: true, margin: "0px 0px -100px" }}
                          duration={0.85}
                        >
                          <li className="pl-5 my-2">{item.included[2]}</li>
                        </FadeIn>
                        <FadeIn
                          x={-24}
                          viewport={{ once: true, margin: "0px 0px -100px" }}
                          duration={0.85}
                        >
                          <li className="pl-5 my-2">{item.included[3]}</li>
                        </FadeIn>
                        <FadeIn
                          x={-24}
                          viewport={{ once: true, margin: "0px 0px -100px" }}
                          duration={0.85}
                        >
                          <li className="pl-5 my-2">{item.included[4]}</li>
                        </FadeIn>{" "}
                      </ul>
                    </FadeIn>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
