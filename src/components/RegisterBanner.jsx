import React from "react";

export const RegisterBanner = () => {
  return (
    <div className="RegisterBanner h-64 px-6 py-9 rounded-xl">
      <h1>
        <span>Register</span> now to instantly redeem a <span>300%</span>
        deposit your bonus!
      </h1>
      <p className="mt-3.5 mb-7">Deposit bonus up to $20,000.</p>
      <a
        href="/"
        className="h-11 w-28 flex items-center justify-center rounded-lg"
      >
        Sign Up
      </a>
    </div>
  );
};
