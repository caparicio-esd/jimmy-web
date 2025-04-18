import React from "react";
import ShowCaseLi from "./ShowCaseLi";

const ShowCaseUl = () => {
  return (
    <>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-12 ">
        <div className="max-w-xl mb-6">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            The quick, brown fox
          </h2>
        </div>
      </div>
      <ul className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <ShowCaseLi />
        <ShowCaseLi />
        <ShowCaseLi />
        <ShowCaseLi />
        <ShowCaseLi />
        <ShowCaseLi />
      </ul>
    </>
  );
};

export default ShowCaseUl;
