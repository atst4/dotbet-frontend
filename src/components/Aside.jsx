import React from "react";
import menuExpander from "../assets/img/menu.svg";
import sports from "../assets/img/aside/Sports.svg";
import Roulette from "../assets/img/aside/roulette.svg";
import Live from "../assets/img/Live casino.svg";
import blackjack from "../assets/img/aside/Card.svg";
import Support from "../assets/img/aside/Support.svg";
import slots from "../assets/img/aside/Slots.svg";
import home from "../assets/img/aside/home.svg";
import blog from "../assets/img/aside/blog.svg";

export const Aside = () => {
  return (
    <aside className="px-5 py-4 flex flex-col">
      <div className="flex items-center justify-center mb-11 mt-2">
        <img src={menuExpander} alt="menuExpander" />
      </div>

      <div className="bonus-area active mb-2 rounded-lg flex items-center">
        <img src={home} alt="card" />
        <h1 className="flex-1 text-white">Home</h1>
      </div>
      <div className="bonus-area mb-2 rounded-lg flex items-center">
        <img src={sports} alt="card" />
        <h1 className="flex-1 ">Sports</h1>
      </div>
      <div className="bonus-area  mb-2 rounded-lg flex items-center">
        <img src={Roulette} alt="card" />
        <h1 className="flex-1">Roulette</h1>
      </div>
      <div className="bonus-area  mb-2   rounded-lg flex items-center ">
        <img src={Live} alt="card" />
        <h1 className="flex-1 ">Live Casino</h1>
      </div>
      <div className="bonus-area  rounded-lg flex items-center ">
        <img src={blackjack} alt="card" />
        <h1 className="flex-1 ">Blackjack</h1>
      </div>

      <div className="bonus-area  rounded-lg flex items-center ">
        <img src={slots} alt="card" />
        <h1 className="flex-1 ">Slots</h1>
      </div>

      <div className="breaker flex-1"></div>

      <div className="bonus-area  mb-2 rounded-lg flex items-center ">
        <img src={blog} alt="card" />
        <h1 className="flex-1 ">Blog</h1>
      </div>
      <div className="bonus-area  mb-4 rounded-lg flex items-center">
        <img src={Support} alt="card" />
        <h1 className="flex-1">Support</h1>
      </div>
    </aside>
  );
};
