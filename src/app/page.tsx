import GlobalFooter from "@/components/GlobalFooter";
import ShowCaseUl from "@/components/ShowCaseUl";
import { WhoWeAre } from "@/components/WhoWeAre";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="wrapper">
      <section className="jumbo min-h-screen text-white grid grid-rows-8 bg-slate-100">
        <div className="jumboOverlay row-start-1 row-span-7 col-span-full bg-stone-800 z-0"></div>
        <div className="py-8 lg:py-16 flex items-center px-6">
          <div className="text-center mx-auto inline-block">
            <div className="py-2 z-1 px-6 gradient-border-badge relative bg-transparent inline-flex items-center justify-center">
              <span className="z-10 text-sm lg:text-base bg-clip-text text-transparent bg-gradient-to-r from-[#9867f0] to-[#ed4e50] font-semibold relative -top-px">
                GitHub Next
              </span>
            </div>
            <h1 className="text-3xl lg:text-6xl leading-tight max-w-3xl font-bold tracking-tight mt-6 mx-auto">
              GitHub Next investigates the future of software development.
            </h1>
            <div className="max-w-3xl mx-auto lg:text-xl text-gray-600 mt-3 leading-normal font-light">
              We are a team of researchers and engineers at{" "}
              <a href="https://github.com" className="jsx-482093d89a00ffe3">
                GitHub
              </a>
              , exploring things beyond the adjacent possible. We prototype
              tools and technologies that will change our craft. We identify new
              approaches to building healthy, productive software engineering
              teams.
            </div>
          </div>
        </div>
        <article className="jumboVideo col-start-1 row-start-5 row-span-4 w-11/12 max-w-[1000px] mx-auto flex justify-center items-center z-10">
          <div className="jumboVideoBlock w-full h-full bg-slate-400">
            video
          </div>
        </article>
      </section>
      <section className="calendlyBlock min-h-screen py-12 bg-slate-100">
        <article className="calendlyTitle w-11/12 max-w-[800px] mx-auto">
          <h2 className="text-4xl mb-12 mt-4 leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
            hic, aspernatur sint doloribus sit.
          </h2>
        </article>
        <article className="calendlyContent w-11/12 max-w-[1000px] mx-auto">
          <div className="calendlyContentBlock bg-slate-200 h-[600px]">
            Calendly widget here...
          </div>
        </article>
        <ShowCaseUl />
      </section>

      <WhoWeAre />
      <GlobalFooter />
    </div>
  );
};

export default Home;
