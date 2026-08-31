import React, { useState } from "react";
import { FadeIn } from "./FadeIn";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function HeroComp() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`${isOpen ? " h-96" : "h-20 "} relative overflow-hidden`}>
      <Popover
        as="header"
        className="relative h-20 z-10 border-solid border-indigo-200 border-b"
      >
        <img
          src="https://res.cloudinary.com/websites-by-trevor/image/upload/v1733346229/pattern_1_asbhf7.svg"
          width="300px"
          height="500px"
          className={`${
            isOpen ? " h-screen" : "h-20 mb-2"
          }     object-cover h-full w-full absolute top-0 z-0`}
        />
        <div className="bg-bg pt-6">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between pr-4 sm:px-6 .5xl:w-[800px]"
            aria-label="Global"
          >
            <div className="flex items-center flex-1 ">
              <div className="h-16 w-auto flex items-start justify-between w-full md:w-auto">
                <FadeIn x={-24}>
                  <a href="/" className="">
                    <span className="sr-only">Workflow</span>
                    <img
                      src="https://res.cloudinary.com/websites-by-trevor/image/upload/v1725229743/NocoLogo_g8cj54.png"
                      alt="artsy noco web designs logo"
                      height="50px"
                      width="250px"
                    />
                  </a>
                </FadeIn>
                <div className="flex items-center md:hidden">
                  <Popover.Button
                    onClick={openMenu}
                    className="relative  bg-bg rounded-md p-2 inline-flex items-center justify-center text-gray-100 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                  >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-7 w-7" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden  pb-5 space-x-8 md:flex md:absolute md:right-10">
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
                  className="rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                >
                  <span className="sr-only">Workflow</span>
                  <img
                    src="https://res.cloudinary.com/websites-by-trevor/image/upload/v1725229743/NocoLogo_g8cj54.png"
                    alt="artsy noco web designs logo"
                    height="50px"
                    width="250px"
                  />
                </a>
                <div className="px-4 pt-4 -mr-2">
                  <Popover.Button
                    onClick={openMenu}
                    className="relative bottom-3 bg-white rounded-md p-2 inline-flex items-center justify-center text-indigo-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  >
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
    </div>
  );
}
