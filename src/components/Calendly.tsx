"use client";

import React from "react";
import { InlineWidget } from "react-calendly";
import SectionTitle from "./SectionTitle";
import Section from "./Section";

const Calendly = () => {
  return (
    <Section className="bg-slate-100 pt-4 mt-4">
      <SectionTitle center={true}>Bla</SectionTitle>

      <div className="calendlyContentBlock h-auto">
        <InlineWidget
          url="https://calendly.com/carlosapariciodes/30min?hide_gdpr_banner=1"
          styles={{
            height: "700px",
          }}
        />
      </div>
    </Section>
  );
};

export default Calendly;
