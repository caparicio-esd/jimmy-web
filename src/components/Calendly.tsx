"use client"

import React from "react";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <article className="calendlyContent w-11/12 max-w-[1000px] mx-auto">
      <div className="calendlyContentBlock bg-slate-200 h-[600px]">
        <InlineWidget url="https://calendly.com/carlosapariciodes/30min?hide_gdpr_banner=1" styles={{
            height: "600px"
        }} />
      </div>
    </article>
  );
};

export default Calendly;
