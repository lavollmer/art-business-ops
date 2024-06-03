import React from "react";
import DefaultSidebar from "./DefaultSidebar.jsx";

const Header = () => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="font-bold text-blue-500">Art Management Company</div>
        <DefaultSidebar />
      </div>
    </>
  );
};

export default Header;
