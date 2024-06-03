import React from "react";
import Navigation from "./Navigation.jsx";

const Header = () => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="font-bold text-blue-500">Art Management Company</div>
        <Navigation />
      </div>
    </>
  );
};

export default Header;
