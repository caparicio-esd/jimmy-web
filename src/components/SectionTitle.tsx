import clsx from "clsx";
import React, { FC, ReactNode } from "react";

const SectionTitle: FC<{ children: ReactNode; center: boolean }> = ({
  children,
  center,
}) => {
  const className = clsx(
    "font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none my-10",
    {
      "text-center": center,
    }
  );
  return <h2 className={className}>{children}</h2>;
};

export default SectionTitle;
