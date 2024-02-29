"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroFooter from "./HeroFooter";

const Hero = () => {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden">
        {/* Gradients */}
        <div aria-hidden="true" className="flex  absolute top-24">
          <img
            loading="lazy"
            src="assets/img/bg_stars.svg"
            className="z-10  self-end w-[1980px] max-w-full max-lg:hidden"
          />
          {/* <div className="bg-gradient-to-r from-lime-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900" />
          <div className="bg-gradient-to-tl from-lime-50 via-lime-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70" /> */}
        </div>
        {/* End Gradients */}
        <div className="relative z-10">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-8">
            <div className="flex flex-col max-md:max-w-full text-center mx-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/73a4533dc1b5adf18943630007b6d4116200f79b8102995a648fd4646437e14e?"
                className="self-end w-16 mr-24 aspect-square max-md:mr-2.5"
              />
              {/* Title */}
              <div className="block ">
                <h1 className=" text-gray-800 text-4xl font-bold max md:text-5xl lg:text-7xl dark:text-gray-200">
                  Goodbye To Boring Job Resume
                </h1>
                <h1 className="pt-8 text-gray-800 text-4xl font-bold max md:text-5xl lg:text-7xl dark:text-gray-200">
                  & Hello To Quick, Accurate ATS.
                </h1>
              </div>
              {/* End Title */}
              <div className="self-center mt-12  max-w-3xl text-center mx-auto">
                <p className="text-lg text-slate-600 dark:text-gray-400">
                  With <span className="text-lime-400">Kazifi</span>, your
                  support agents have the information they need to
                  <br />
                  provide fast, effective support to your job needs
                </p>
              </div>
              {/* Buttons */}
              <div className="mt-10 flex justify-center">
                <a
                  href="#"
                  className="flex gap-3 self-center px-12 py-4 text-lg text-center whitespace-nowrap bg-lime-200 border border-black border-solid rounded-full text-neutral-900 max-md:px-5 hover:bg-violet-400 dark:text-gray-400 dark:hover:bg-violet-400 "
                >
                  <div className="grow my-auto">Join The Wishlist</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/60802bd358de4a283f971c3c0dd59ef5717dc3cfb7572889b610037d51e5c19f?"
                    className="w-6 aspect-square"
                  />
                </a>
              </div>
              {/* End Buttons */}

              {/* cards */}
              <HeroFooter />
              {/* Cards End */}
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
};

export default Hero;
