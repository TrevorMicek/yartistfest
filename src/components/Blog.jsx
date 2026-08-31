import React, { useState } from "react";
export default function Example(props) {
  const posts = Object.values(
    import.meta.glob("../content/blog/*.md", { eager: true })
  );
  const [blogType, setBlogType] = useState("websites");
  const infoData = posts.map((post) => {
    return post.frontmatter;
  });

  const sortedPosts = () => {
    return infoData.sort((a, b) => a.featured - b.featured);
  };
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        {/* Toggle */}
        <div className="relative mt-12 flex  justify-center sm:mt-16">
          <div className=" p-0.5 rounded-lg flex flex-col space-y-3">
            <button
              type="button"
              onClick={() => setBlogType("websites")}
              className={`${
                blogType === "websites"
                  ? "border-2 relative bg-white py-2 px-6 border-indigo-700 rounded-md shadow-sm text-sm font-medium text-indigo-700 whitespace-nowrap hover:bg-indigo-50 focus:outline-none "
                  : "bg-indigo-700 ml-0.5 relative py-2 px-6 border border-transparent rounded-md text-sm font-medium text-indigo-200 whitespace-nowrap hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:z-10"
              }`}
            >
              Websites
            </button>
            <button
              type="button"
              onClick={() => setBlogType("SEO")}
              className={`${
                blogType === "SEO"
                  ? "border-2 relative bg-white py-2 px-6 border-indigo-700 rounded-md shadow-sm text-sm font-medium text-indigo-700 whitespace-nowrap hover:bg-indigo-50 focus:outline-none "
                  : "bg-indigo-700 ml-0.5 relative py-2 px-6 border border-transparent rounded-md text-sm font-medium text-indigo-200 whitespace-nowrap hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:z-10"
              }`}
            >
              SEO
            </button>
            <button
              type="button"
              onClick={() => setBlogType("market")}
              className={`${
                blogType === "market"
                  ? "border-2 relative bg-white py-2 px-6 border-indigo-700 rounded-md shadow-sm text-sm font-medium text-indigo-700 whitespace-nowrap hover:bg-indigo-50 focus:outline-none "
                  : "bg-indigo-700 border-2 ml-0.5 relative py-2 px-6 border border-transparent rounded-md text-sm font-medium text-indigo-200 whitespace-nowrap hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:z-10"
              }`}
            >
              Marketing
            </button>
            <button
              type="button"
              onClick={() => setBlogType("access")}
              className={`${
                blogType === "access"
                  ? "border-2 relative bg-white py-2 px-6 border-indigo-700 rounded-md shadow-sm text-sm font-medium text-indigo-700 whitespace-nowrap hover:bg-indigo-50 focus:outline-none "
                  : "bg-indigo-700 ml-0.5 relative py-2 px-6 border border-transparent rounded-md text-sm font-medium text-indigo-200 whitespace-nowrap hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:z-10"
              }`}
            >
              Accessibility
            </button>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {sortedPosts().map((post, i) => {
            return (
              <article
                key={post.id}
                className="flex flex-col items-start justify-between"
              >
                {" "}
                {infoData[i].topic === blogType && (
                  <div>
                    <a href={`/blog/${post.id}/`} className="relative w-full">
                      <img
                        alt=""
                        src={infoData[i].imageUrl}
                        className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    </a>
                    <div className="max-w-xl">
                      <div className="group relative pt-3">
                        <h3 className="max-w-lg mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                          <a href={`/blog/${infoData[i].id}/`}>
                            <span className="absolute inset-0" />
                            {infoData[i].title}
                          </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                          {infoData[i].description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
