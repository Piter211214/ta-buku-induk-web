import React from "react";

const InputEmail = () => {
    return (
      <div className="mb-1">
        <label htmlFor="email" className="block ml-4 mr-4">
          <span className="block font-semibold mb-1 text-slate-700 after:content-['*'] after:text-red-600 after:ml-0.5">
            Email
          </span>
          <input
            type="email"
            id="email"
            placeholder="Masukkan Email"
            className="px-3 py-2 border shadow rounded w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 invalid:text-red-500 invalid:focus:ring-red-500 invalid:focus:border-red-500 peer"
          />
          <p className="text-sm m-1 text-red-500 invisible peer-invalid:visible">
            Email tidak valid !
          </p>
        </label>
      </div>
    );
};

export default InputEmail;