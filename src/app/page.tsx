import Calendly from "@/components/Calendly";
import GlobalFooter from "@/components/GlobalFooter";
import Jumbo from "@/components/Jumbo";
import ShowCaseUl from "@/components/ShowCaseUl";
import { WhoWeAre } from "@/components/WhoWeAre";
import React from "react";

const Home = async () => {
  return (
    <div className="wrapper">
      <Jumbo />
      <Calendly />
      <ShowCaseUl />
      <WhoWeAre />
      <GlobalFooter />
    </div>
  );
};

export default Home;
