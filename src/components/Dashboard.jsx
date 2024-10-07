import { useState } from "react";

import DataSiswa from "../elements/DataSiswa";
import DataKelas from "../elements/DataKelas";
import Data from "../elements/Data";
import HomePage from "../elements/HomePage";
import MainMenu from "../elements/MainMenu";
import Logo from "../elements/Logo";
import Navbar from "../elements/Navbar";
import Keluar from "../elements/Keluar";
import SearchBar from "../elements/SearchBar";

const Dashboard = () => {
  return (
    <div className="block">
      <div className="flex">
        <div className="w-[17%] h-96 bg-white border shadow-lg rounded-r-lg mr-3 mt-1">
          <Logo />
          <MainMenu />
          <div className="px-2 py-2 h-6 w-auto ml-1 mr-1 justify-center text-center">
            <HomePage />
            <div>
              <DataSiswa />
              <DataKelas />
            </div>
            <Data />
            <Keluar />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <Navbar />
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
