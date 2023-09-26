import React from "react";
import search from "../assets/img/search.svg";

import signIn from "../assets/img/sign-in.svg";
import signUp from "../assets/img/sign-up.svg";
import logo from "../assets/img/logo.svg";
import Login from "./Login";
export const Header = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <header className="px-6 h-16 flex items-center">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <div className="input-wrapper ml-6 flex items-center w-48 h-8">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 outline-none border-none"
          />
          <img src={search} alt="search" />
        </div>
        <div className="right-header-area items-center flex flex-1 justify-end">
          <button className="flex rounded-lg justify-center  login-btn deposit-button items-center  h-8" onClick={() => setOpen(true)}>
            <img src={signIn} alt="sign In" className="mr-2" />
            Log in
          </button>
          <button className="flex rounded-lg ml-3 justify-center deposit-button items-center h-8">
            <img src={signUp} alt="sign Up" className="mr-2" />
            Sign UP
          </button>
        </div>
      </header>
      <Login open={open} setOpen={setOpen}/>
    </>
  );
};
