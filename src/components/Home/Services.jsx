import React from "react";
import {
  CubeIcon,
  ComputerDesktopIcon,
  MagnifyingGlassIcon,
  UsersIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PageSpeed() {
  const features = [
    {
      name: "Web Design",
      description:
        "The style and flow of a website can make or break converting customers. We offer custom web design that fits with your businesses style and personality, focusing on a modern and mobile-friendly design.",
      href: "/services#websites",
      icon: ComputerDesktopIcon,
    },
    {
      name: "Web Development",
      description:
        "Alongside a great design,  we build faster, sleeker and more modern websites with our own code, from the ground up. Page builders like WordPress and SquareSpace have good web design but our development can't be matched.",
      href: "/services#websites",
      icon: CodeBracketIcon,
    },
    {
      name: "Search Engine Optimization (SEO)",
      description:
        "Our SEO can help drive traffic to your website and boost your ranking on Google. With our high quality content, back links, blog, landing page and newsletter campaign, we can help visitors stay on your site longer, and be converted more often.",
      href: "/services#seo",
      icon: MagnifyingGlassIcon,
    },
    {
      name: "Social Media Management",
      description:
        "Social Media can help build and elevate your brand. Just by posting helpful info a few times a week, we can help enhance brand awareness, drive traffic, and boost customer loyalty.",
      href: "/services#social-media",
      icon: UsersIcon,
    },
    {
      name: "Ad Management",
      description:
        "Boost your advertising ROI with strategic ad campaigns on Google and social media. Our analytics-based ad services ensure you connect with the ideal audience, drive higher conversions, and expand your business.",
      href: "/services#ads",
      icon: CubeIcon,
    },
  ];
  return (
    <div className="pb-10 pt-12 relative bg-[rgb(243,247,255)]">
      <div className=" mx-auto px-4 sm:px-9 lg:px-8 .5xl:w-[800px]">
        <h2 className="mt-2 mb-7 max-w-3xl mx-auto text-4xl font-mont font-medium tracking-tight text-default text-center .5xl:text-4.5xl">
          <a href="/services">Our Services</a>
        </h2>
        <dl className="  lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="mx-auto mb-3 bg-[rgb(244,249,255)] px-7 py-4 rounded-lg flex flex-col shadow-sm max-w-[550px]"
            >
              <dt className="text-base/7 font-semibold text-gray-900">
                <div className="mb-4 flex size-14 items-center justify-center rounded-lg ">
                  <feature.icon
                    aria-hidden="true"
                    className="w-full h-full text-default"
                  />
                </div>
                <a
                  href={feature.href}
                  className="text-medium font-mont font-semibold tracking-wide"
                >
                  {feature.name}
                </a>
              </dt>
              <dd className="mt-1 flex flex-auto flex-col items-end text-base/7 text-gray-600">
                <p className="flex-auto">{feature.description}</p>
                <p className="mt-6">
                  <a
                    href={feature.href}
                    className="text-sm/6 relative right-0 font-semibold text-indigo-600"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
