import React from "react";
import ShowCaseLi from "./ShowCaseLi";
import Section from "./Section";
import SectionTitle from "./SectionTitle";

const ShowCaseUl = () => {
  return (
    <Section className="pt-4 mt-4">
      <SectionTitle center={true}>Bla</SectionTitle>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <ShowCaseLi />
        <ShowCaseLi />
        <ShowCaseLi />
        <ShowCaseLi />
        <ShowCaseLi />
        <ShowCaseLi />
      </ul>
      <hr className="mt-12 border-slate-400"/>
    </Section>
  );
};

export default ShowCaseUl;
