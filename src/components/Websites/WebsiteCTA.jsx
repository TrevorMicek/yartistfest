import React from "react";

const features = [
  [
    {
      name: "Web Design & Development",
      description:
        "Websites are built with over 100 hours of design, development, and testing",
    },
    {
      name: "Full Customer Support",
      description:
        "NoCo Web Designs takes pride in our quality of website, as well as facilitating a nurturing customer support system.",
    },
    {
      name: "Fully Maintained Site",
      description:
        "We do monthly maintenance, so you don't have to worry about an outdated site",
    },
  ],
  [
    {
      name: "Free Hosting",
      description: "All hosting is completely free for all clients",
    },
    {
      name: "Google Analytics",
      description:
        "We use metrics such as Google Analytics to keep track of website growth",
    },
    {
      name: "Fully Customized Site",
      description:
        "Since every website is hand coded, we can customize every aspect of your website",
    },
  ],
];

export default function ProductBenefit() {
  return (
    <div
      className="bg-indigo-50 pt-16"
      style={{
        gridColumn: "span 7",
        gridRowStart: "first",
        gridRowEnd: "second",
      }}
    >
      <div className="max-w-7xl bg-indigo-50 mx-auto -mt-20 py-8 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div className="">
          <div className="mx-auto px-6 py-24 sm:px-6 sm:py-32 .5xl:max-w-[800px] lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-mont font-[450]">
                Ad Management and Social Media Marketing{" "}
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-600">
                Not everyone needs a nice, new website, but everyone needs a
                marketing campaign.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/ads"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Ad Management
                </a>
                <a
                  href="/socialmedia"
                  className="text-sm/6 font-semibold text-gray-900"
                >
                  Social Media Marketing <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
