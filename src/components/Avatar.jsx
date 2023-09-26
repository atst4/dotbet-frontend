import React from "react";
import arrow from "../assets/img/down-arrow.svg";
export const Avatar = ({ img }) => {
  return (
    <div className="Avatar relative rounded-full">
      <img src={img} className="w-8 h-8 rounded-full" alt="avatar" />

      <div className="arrow-icon absolute rounded-full flex items-center justify-center">
        <img src={arrow} alt="arrow" className="w-2 h-2" />
      </div>
    </div>
  );
};
