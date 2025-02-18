import GlobalFooter from "@/components/GlobalFooter";
import { WhoWeAre } from "@/components/WhoWeAre";
import React from "react";

const Home = () => {
  return (
    <div className="wrapper">
      <section className="jumbo min-h-screen text-white grid grid-rows-8 bg-slate-100">
        <div className="jumboOverlay row-start-1 row-span-7 col-span-full bg-stone-800 z-0"></div>
        <article className="jumboContent col-start-1 row-start-1 row-span-4 w-11/12 max-w-[800px] mx-auto flex flex-col justify-center z-10">
          <h2 className="text-4xl mb-6 mt-4 leading-tight max-w-[30ch]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
            hic, aspernatur sint doloribus sit.
          </h2>
          <p className="text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            harum laudantium provident aliquid maxime, doloremque voluptas,
            commodi minima deserunt sit est animi sunt in blanditiis perferendis
            dolores perspiciatis ipsam et!
          </p>
        </article>
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
      </section>
      <WhoWeAre />
      <GlobalFooter />
    </div>
  );
};

export default Home;
