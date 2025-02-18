import React, { FC } from "react";

const Button: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <button className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-purple-500 hover:bg-purple-700 focus:shadow-outline focus:outline-none">
      {children}
    </button>
  );
};

export default Button;
