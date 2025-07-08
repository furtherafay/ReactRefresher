import React from "react";

const Options = ({ name }) => {
  return (
    <>
      <div
        className="bg-transparent border border-white font-semibold text-white px-5 py-2 w-30 flex justify-center items-center
      cursor-pointer m-2 hover:bg-white hover:text-gray-800 select-none"
      >
        <h2>{name}</h2>
      </div>
    </>
  );
};

export default Options;
