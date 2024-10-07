import { useState } from "react";

import logo from "../img/logosmkdua.png";
import InputEmail from "../layout/InputEmail";
import InputPassword from "../layout/InputPassword";
import DropDownMenu from "../elements/DropdownMenu";
import EnterButton from "../elements/EnterButton";
import DropDown from "../elements/Dropdown";
import { Button } from "@headlessui/react";

function FormLogin() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen rounded-r-3xl">
      <div className="w-1/2 bg-blue-500 flex items-center justify-center rounded-r-3xl">
        <div className="text-white text-center">
          <img src={logo} alt="logo" className="mb-10 h-52 w-52" />
          <p className="text-2xl font-semibold font-sans">
            Aplikasi Buku Induk
          </p>
          <p className="text-2xl font-semibold font-sans">SMKN 2 Singosari</p>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-96 h-auto bg-white border-slate-200 border-2 rounded-lg shadow-xl">
          <h2 className="font-semibold font-sans text-lg text-black text-center mb-8 mt-4 ">
            Selamat Datang
          </h2>
          <form action="">
            <InputEmail />
            <InputPassword />
            <p className="block font-semibold mb-1 text-slate-700 ml-4">
              Dropdown
            </p>
            <DropDownMenu />
            <EnterButton />
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
