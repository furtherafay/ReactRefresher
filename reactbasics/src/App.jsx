import React, { useState, useEffect } from "react";
import HeroBgImage from "./assets/background.jpg";
import Options from "./components/Options";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${HeroBgImage})` }}
        className="h-100 bg-cover flex flex-col justify-center items-center"
      >
        <div className="text-white font-bold text-2xl flex select-none">
          Search Properties For Sale In Pakistan
        </div>

        <div className="flex flex-row m-2">
          <Options name="Buy"></Options>
          <Options name="Sell"></Options>
          <Options name="Projects"></Options>
        </div>

        <div>
          <SearchBar></SearchBar>
        </div>
      </div>
    </>
  );
};

export default App;
