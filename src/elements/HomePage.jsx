import React from "react";

import ButtonDashboard from "../assets/buttonDashboard.svg";

const HomePage = () => {
  return (
    <div className="flex justify-start h-auto w-auto mb-3 px-1 py-2 bg-slate-100 hover:bg-slate-200 active:bg-[#E2E8F0] rounded-lg">
      <a
        href="#"
        className="font-sans text-[16px] flex gap-2 ml-2 mr-2 focus:font-black"
      >
        <img src={ButtonDashboard} alt="buttonDashboard" />
        Home Page
      </a>
    </div>
  );
};

export default HomePage;