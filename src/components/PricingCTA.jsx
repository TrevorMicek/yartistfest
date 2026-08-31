export default function Example() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-0 py-12 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="tiny:text-[1.75rem] text-3xl xxs:text-3xl font-mont font-medium tracking-tight text-gray-900 md:text-4xl .5xl:text-4xl">
          Ready for something better than WordPress? <br />
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
          <a
            href="/services"
            className="rounded-md bg-indigo-600  px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            View Our Services
          </a>
          <a href="/pricing" className="text-sm/6 font-semibold text-gray-900">
            view pricing <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
