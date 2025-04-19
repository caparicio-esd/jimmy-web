import clsx from "clsx";
import React, { FC, ReactNode } from "react";

const Section: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const classNameOut = clsx(
    "px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-16",
    className
  );
  return <article className={classNameOut}>{children}</article>;
};

export default Section;
