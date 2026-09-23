import React, { useRef, Fragment, useState, useEffect } from "react";

import { Dialog, Transition } from "@headlessui/react";
import emailjs from "emailjs-com";

export default function Example(props) {
  const [open, setOpen] = useState(true);
  const [prompt, setPrompt] = useState(true);
  const completeButtonRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const form = useRef();
  const onSubmit = (e) => {
    emailjs.sendForm(
      "service_arikqvn",
      "template_ht51ufi",
      e.target,
      "user_kC0T8kmC4F1GOkt3Q06Q4",
    );
    e.preventDefault();
    setPrompt(false);
    console.log("sent");
  };
  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "name":
        setName(e.target.value);
        break;
    }
  };
  const confirm = () => {
    setOpen(false);
    return props.confirm();
  };

  return (
    <div>
      <div className="flex items-end justify-center  pt-4 px-4 pb-10 text-center sm:block sm:p-0">
        {/* This element is to trick the browser into centering the modal contents. */}
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        {prompt ? (
          <div className=" relative  inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
            <form
              ref={form}
              onSubmit={onSubmit}
              className="sm:grid-cols-2 sm:gap-x-8"
            >
              <div className="mt-6 sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                ></label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    autoComplete="name"
                    value={name}
                    onChange={handleChange}
                    key="name"
                    placeholder="Enter name..."
                    className="py-3 border-2 px-4 mb-6 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                ></label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={handleChange}
                    key="name"
                    placeholder="Enter email..."
                    className="py-3 border-2 px-4 mb-6 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="flex items-start">
                  <div className="flex-shrink-0"></div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  RSVP to Yartistfest 2027
                </button>
              </div>
              <div className="ml-3">
                <p className="mt-2 text-sm text-gray-700 sm:mt-4">
                  Start your free one page website, no credit card necessary. By
                  providing your email, you agree to our{" "}
                  <a href="#" className="font-medium text-white">
                    terms of service
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="relative  inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
            <div>
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </div>
              <div className="mt-3 text-center sm:mt-5">
                <div
                  as="h3"
                  className="text-lg leading-6 font-medium text-gray-900"
                >
                  {props.message[0]}
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{props.message[1]}</p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                onClick={props.confirm}
              >
                Go back to main page
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
