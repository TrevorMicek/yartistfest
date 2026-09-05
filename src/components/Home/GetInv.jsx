import React from "react";
import { FadeIn } from "../FadeIn";

export default function Example() {
  return (
    <div
      className="bg-indigo-50"
      style={{
        gridColumn: "span 7",
        gridRowStart: "third",
        gridRowEnd: "span 7",
      }}
    >
      <div className="pt-4 mt-10 max-w-7xl mx-auto py-12 px-4 sm:px-6 .5xl:py-24 .5xl:px-8 .5xl:flex .5xl:items-center .5xl:justify-between .5xl:w-[800px]">
        <FadeIn x={-24}>
          <h2 className="text-3xl font-mont font-medium tracking-tight text-gray-900 md:text-4xl .5xl:text-4xl">
            <span className="block">Ready to get involved?</span>
            <span className="block text-[#97278b]">
              Help bring people together.
            </span>
          </h2>
        </FadeIn>
        <FadeIn
          viewport={{ once: true, margin: "0px 0px -50px" }}
          duration={0.75}
          x={-24}
        >
          <div className="mt-8 flex justify-evenly lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/portfolio"
                className=" inline-flex items-center justify-center px-10 xs:px-24 py-3.5 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-tl from-[#97278b] to-[#e70103] hover:bg-blue .5xl:text-lg .5xl:px-7"
              >
                RSVP for 2027
              </a>
            </div>
            <div className="inline-flex rounded-md shadow">
              <a
                href="/portfolio"
                className=" inline-flex items-center justify-center px-10 xs:px-24 py-3.5 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-tr from-[#97278b] to-[#e70103] hover:bg-blue .5xl:text-lg .5xl:px-7"
              >
                Band Signup{" "}
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
