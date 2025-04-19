import React from "react";

const Jumbo = () => {
  return (
    <section className="jumbo min-h-screen text-white grid grid-rows-2 bg-slate-100">
      <div className="jumboOverlay row-start-1 row-span-7 col-span-full bg-stone-800 z-0"></div>
      <div className="py-8 lg:py-16 col-start-1 row-start-1 flex items-center px-6 z-10">
        <div className="text-center mx-auto inline-block">
          <div className="py-2 z-20 px-6 gradient-border-badge relative bg-transparent inline-flex items-center justify-center">
            <span className="z-10 text-sm lg:text-base bg-clip-text text-transparent bg-gradient-to-r from-[#9867f0] to-[#ed4e50] font-semibold relative -top-px">
              Tagline here
            </span>
          </div>
          <h1 className="text-3xl lg:text-6xl leading-tight max-w-3xl font-bold tracking-tight mt-6 mb-12 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="max-w-3xl mx-auto lg:text-xl text-gray-400 mt-3 leading-normal font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            molestias, itaque nihil eaque maxime voluptatum placeat animi autem
            tempore tenetur perferendis explicabo quidem doloremque quae
            adipisci vel officiis! Fugit, doloremque?
          </div>
        </div>
      </div>
      <article className="jumboVideo col-start-1 row-start-2 w-11/12 max-w-[1000px] mx-auto flex justify-center items-center z-10">
        <div className="jumboVideoBlock w-full h-full bg-stone-800">
          <iframe
            src="https://www.youtube-nocookie.com/embed/nB7fhyqh0IM?si=bwTXTQKB9KsdZAEz"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </div>
      </article>
    </section>
  );
};

export default Jumbo;
