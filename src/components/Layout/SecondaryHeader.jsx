import React, { useState } from "react";
import { FadeIn } from "../FadeIn";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

//[#c740ac]

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Bands", href: "/bands" },

  { name: "Contact", href: "/contact" },
];

export default function Header(props) {
  //https://myfreelogomaker.com/s/195111791
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(true);
  };
  const Title = () => {
    switch (props.title) {
      case "Bands":
        return ["Check out the bands", "from 2026"];

      case "About":
        return ["Learn about Scott", "and his vision"];
      case "Contact":
        return ["Contact", "Yartistfest directly"];
    }
  };
  return (
    <div
      className="relative pt-5 pb-12 bg-gradient-to-bl from-[#97278b] to-[#e70103]  overflow-hidden "
      style={{
        gridColumn: "span 5",
        gridRowStart: "header",
        gridRowEnd: "main",
      }}
    >
      <div className={`  relative  pb-16 sm:pb-24`}>
        <Popover
          as="header"
          className="relative z-10 border-solid border-indigo-200 border-b"
        >
          <div className="">
            <nav
              className="relative max-w-7xl mx-auto flex items-center justify-between pr-4 sm:px-6 .5xl:w-[800px]"
              aria-label="Global"
            >
              <div className="flex items-center flex-1 ">
                <div className="h-12 w-auto flex items-start justify-between w-full md:w-auto">
                  <FadeIn x={-24}>
                    <a href="/" className="">
                      <span className="sr-only">Workflow</span>
                      <img
                        src="https://res.cloudinary.com/websites-by-trevor/image/upload/v1788545365/yartistfest_vetfzs.png"
                        alt="artsy yartisfest logo"
                        height="50px"
                        width="150px"
                      />
                    </a>
                  </FadeIn>
                  <div className="flex items-center md:hidden">
                    <Popover.Button className="relative  bg-bg rounded-md p-2 inline-flex items-center justify-center text-gray-100 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon className="h-7 w-7" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="hidden space-x-8 md:flex md:absolute md:right-10">
                  {navigation.map((item) => (
                    <a
                      href={`${item.href}`}
                      key={item.name}
                      className="text-base font-medium text-white hover:text-indigo-500"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white  overflow-hidden">
                <div className="h-20 w-auto pt-4 flex items-center justify-between">
                  <a
                    href="/"
                    className="rounded-md bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  >
                    <span className="sr-only">Workflow</span>
                    <img
                      src="src\images\Yartistfest.png"
                      alt="artsy noco web designs logo"
                      height="50px"
                      width="250px"
                    />
                  </a>
                  <div className="px-4 pt-4 -mr-2">
                    <Popover.Button className="relative bottom-3 bg-white rounded-md p-2 inline-flex items-center justify-center text-indigo-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="pt-5 pb-6">
                  <div className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-100 hover:bg-indigo-500"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <main
          className={` ${
            isOpen ? "mb-44" : "mb-2"
          } relative  mt-5 h-24  flex justify-center items-center mx-auto max-w-7xl  sm:mt-24`}
        >
          <div className="text-center relative mt-10">
            <h1 className="text-3xl xs:text-4xl font-mont tracking-tight text-white sm:text-5xl lg:text-6xl">
              <FadeIn
                viewport={{ once: true, margin: "0px 0px -100px" }}
                duration={0.5}
                x={-20}
              >
                <span className="relative top-6 xl:inline">
                  {props.title ? Title()[0] : ""}
                </span>
              </FadeIn>{" "}
              <br />
              <FadeIn
                viewport={{ once: true, margin: "0px 0px -100px" }}
                duration={0.5}
                x={20}
              >
                <span className={`relative -top-2  xl:inline`}>
                  {props.title ? Title()[1] : ""}
                </span>
              </FadeIn>
            </h1>
            <p className="px-4 mt-3 max-w-sm  mx-auto text-lg text-gray-300 sm:text-lg md:mt-5 md:text-xl ">
              {props.text}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
