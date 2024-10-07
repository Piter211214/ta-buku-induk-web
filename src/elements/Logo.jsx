import React from "react";

import logo from "../img/logosmkdua.png";

const Logo = () => {
  return (
    <div className="flex h-auto w-full rounded-tr-lg bg-[#5775BA]">
      <div className="content-center w-2/4">
        <img src={logo} alt="logo" className="h-10 w-10 ml-5" />
      </div>
      <p className="font-sans font-semibold text-lg mt-6 mb-5 w-2/4">Admint</p>
    </div>
  );
};

export default Logo;