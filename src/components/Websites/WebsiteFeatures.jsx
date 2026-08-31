import React from "react";
import { FadeIn } from "../FadeIn";

export default function FeatureOne() {
  const features = [
    {
      name: "Research & Strategy",
      description: "tell us about yourself! Create your profile in seconds",
      subDescription: "tell us about yourself! Create your profile in seconds",
      icon: "chart increase, magnifying glass",
      bg: "bg-bg",
    },
    {
      name: "Messaging & Design",

      description: "Match with gyms and/or trainers wherever you are.",
      subDescription: "tell us about yourself! Create your profile in seconds",
      icon: "pic",
      bg: "bg-indigo-50",
    },
    {
      name: "Development & Optimization",
      description: "Securely book, pay, and communicate in app",
      subDescription: "tell us about yourself! Create your profile in seconds",
      icon: "pic",
      bg: "bg-bg",
    },
    {
      name: "Targeted Outreach",
      description: "Securely book, pay, and communicate in app",
      subDescription: "tell us about yourself! Create your profile in seconds",
      icon: "pic",
      bg: "bg-bg",
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
                key={item.name}
                className={` z-10  ${
                  item.bg === "bg-bg"
                    ? "text-white z-30 overflow-hidden"
                    : "text-bg"
                } pt-8 px-3 ${item.bg}`}
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
                    <div id="icon" />
                    <h1 className="text-4xl font-[450] font-">{item.name}</h1>
                    <FadeIn
                      viewport={{ once: true, margin: "0px 0px -50px" }}
                      duration={0.75}
                      x={item.name === "Messaging & Design" ? -24 : 24}
                    >
                      <h2 className="text-lg font-light my-4">
                        {item.description}
                      </h2>
                      <p className="text-lg font-medium mt-1">
                        {item.subDescription}
                      </p>
                    </FadeIn>
                    <FadeIn>
                      <div className="w-full h-full">
                        <img
                          src="https://res.cloudinary.com/websites-by-trevor/image/upload/v1734460400/iphone-spotter-overlay_oou8iz.png"
                          width="100px"
                          height="300px"
                          className="mx-auto relative object-cover h-[350px] w-full sm:w-[575px] sm:object-fit"
                        />
                      </div>
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
