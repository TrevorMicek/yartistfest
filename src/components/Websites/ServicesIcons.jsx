import React from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { FadeIn } from "../FadeIn";

const benefits = [
  {
    num: "1.",
    icon: CalendarIcon,
    description: "tell us about yourself! Create your profile in seconds",
  },
  {
    num: "2.",
    icon: CalendarIcon,
    description: "Match with gyms and/or trainers wherever you are.",
  },
  {
    num: "3.",
    icon: CalendarIcon,
    description: "Securely book, pay, and communicate in app",
  },
  {
    num: "4.",
    icon: CalendarIcon,
    description: "Get your sweat on. Do it again!",
  },
];
export default function Example() {
  return (
    <div className="relative w-full pt-8 pb-12 text-left text-bg bg-indigo-50 flex flex-col  justify-center sm:pt-16  .5xl:py-16 .5xl:pb-20">
      <div className="max-w-[500px] md:max-w-[800px] flex flex-row justify-around flex-wrap mx-auto sm:flex-row sm:w-full .5xl:w-[800px]">
        {benefits.map((item) => {
          const Comp = item.icon;
          return (
            <FadeIn>
              <div
                key={item.num}
                className="w-44 xs:w-48 md:w-40 flex flex-col justify-center md:justify-between space-x-2 text-center mt-7 "
              >
                <Comp className="w-10 mx-auto py-2" />
                <p className="">{item.description}</p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
