import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function Example(props) {
  const info = props.info.filter((info) => info.title === props.title)[0];

  const BlogComp = () => {
    switch (info.title) {
      case "How you can use a landing page to increase sales.":
        return (
          <div>
            <p>{info.firstParagraph}</p>
            <br />
            <p>{info.secondParagraph}</p>
            <br />
            <p>{info.thirdParagraph}</p>
            <br />
          </div>
        );
      case "Website Performance and Optimization":
        return (
          <div>
            <p>{info.firstParagraph}</p>
            <br />
            <p>{info.secondParagraph}</p>
            <br />
            <p>{info.thirdParagraph}</p>
            <br />
            <ul role="list" className="mt-8 space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <CloudArrowUpIcon
                  aria-hidden="true"
                  className="mt-1 size-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Less code and scripts.
                  </strong>{" "}
                  Websites like our clients, have less code and less scripts
                  which greaty increases performance, while still allowing us to
                  add any integrations you need.
                </span>
              </li>
              <li className="flex gap-x-3">
                <LockClosedIcon
                  aria-hidden="true"
                  className="mt-1 size-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Total control.
                  </strong>{" "}
                  Since we hand code the entire website, we can control and
                  enhance every aspect of your website, which isn't possible
                  with page builders.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ServerIcon
                  aria-hidden="true"
                  className="mt-1 size-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Performance-optimized.
                  </strong>{" "}
                  We also spend a lot of time on each project to ensure we
                  optimize the performance to google's liking, which helps you
                  rank higher and retain visitors.
                </span>
              </li>
            </ul>
          </div>
        );

      case "Does a slow website lose sales?":
        return (
          <div>
            <p>{info.firstParagraph}</p>
            <br />
            <p>{info.secondParagraph}</p>
            <br />
            <p>{info.thirdParagraph}</p>
            <br />
          </div>
        );
    }
  };
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              alt=""
              src={info.imageUrl}
              className="absolute inset-0 size-full bg-gray-50 object-cover"
            />
          </div>
        </div>
        <a
          href="/blog"
          className=" px-1 py-1.5 rounded-md mx-5 relative top-7 text-sm/6 font-semibold text-gray-900 hover:border-2 hover:border-indigo-300"
        >
          <span aria-hidden="true">←</span> back to blog
        </a>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base/7 font-mont font-semibold text-indigo-600">
              {info.subTitle}
            </p>
            <h1 className="mt-2 text-pretty text-4xl font-mont font-medium tracking-tight text-gray-900 sm:text-5xl">
              {props.title}
            </h1>

            <div className="mt-6 text-xl/8 text-gray-700">
              <BlogComp />

              <h2 className="mt-16 text-2xl font-mont font-[450] tracking-tight text-gray-900">
                No developer? No problem.
              </h2>
              <p className="mt-6">
                Hopefully this helps you see why our websites will outperform
                most of your competitors, and how that is better for business.
                If you found this helpful, make sure to check out our other
                posts like SEO, Accessability, and more!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
