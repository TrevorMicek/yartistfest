import React from "react";
import { FadeIn } from "../FadeIn";
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
  return (
    <div className="relative overflow-hidden ">
      <div class="absolute bottom-0 w-full overflow-hidden leading-3">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
            style={{ fill: "rgb(243,247,255)" }}
          ></path>
        </svg>
      </div>
      <Popover
        as="header"
        className="relative z-10 border-solid border-indigo-200 border-b"
      >
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

      <main>
        <div className=" pt-10 pb-32 text-left bg-bg sm:pt-16  .5xl:py-20 md:pb-52 .5xl:pb-52 ">
          <div className="relative mx-auto max-w-7xl lg:px-8 .5xl:w-[800px] .5xl:z-10">
            <div className=" ">
              <div className=" max-w-md px-2 sm:max-w-2xl sm:px-9  lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="">
                  <FadeIn>
                    <span className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                      <a
                        href="/portfolio"
                        className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-default rounded-full"
                      >
                        View Our Work
                      </a>
                      <a href="/portfolio" className="ml-4 text-sm">
                        Visit our portfolio
                      </a>
                      <ChevronRightIcon
                        className="ml-2 w-5 h-5 text-gray-500"
                        aria-hidden="true"
                      />
                    </span>
                  </FadeIn>
                  <h1 className="mt-4 tiny:text-[1.9rem] xs:text-4xl text-3.5xl font-mont font-[425]  text-white sm:mt-5 sm:text-5xl .5xl:text-5.5xl .5xl:py-1 lg:mt-6 xl:text-6xl">
                    <span className="block">Affordable, Custom </span>
                    <span className="text-[#6a61fa] block xs:mt-0 -mt-3">
                      Website Design
                    </span>
                  </h1>
                  <FadeIn>
                    <p className="mt-3 text-[15.85px] text-gray-300 sm:mt-5 sm:text-xl .5xl:pt-4 .5xl:-mb-4 .5xl:text-1.5xl xl:text-xl min-w-full ">
                      High-quality websites in Northern Colorado.
                      <br /> Attract new customers with a modern solution.
                    </p>
                    <div className="mt-10 sm:mt-12">
                      <div className="sm:col-span-2">
                        <div className="inline-flex rounded-md shadow">
                          <a
                            href="/services"
                            className=" inline-flex items-center justify-center px-20 tiny:px-16  xs:px-24 py-3 border border-transparent text-base font-medium rounded-md text-white bg-default  hover:bg-blue .5xl:text-lg .5xl:px-7"
                          >
                            Browse Our Services
                          </a>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  );
}
