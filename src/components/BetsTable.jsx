import React from "react";
import trec1 from "../assets/img/trec1.png";
import trec2 from "../assets/img/trec2.png";
import trec3 from "../assets/img/trec3.png";
import trec4 from "../assets/img/trec4.png";
import trec5 from "../assets/img/trec5.png";
import trec6 from "../assets/img/trec6.png";
import trec7 from "../assets/img/trec7.png";

import c1 from "../assets/img/c1.png";
import c2 from "../assets/img/c2.png";
import c3 from "../assets/img/c3.png";
import c4 from "../assets/img/c4.png";
import c5 from "../assets/img/c5.png";
import c6 from "../assets/img/c6.png";
import c7 from "../assets/img/c7.png";

export const BetsTable = () => {
  const data = [
    {
      game: {
        img: trec1,
        text: "Jammin jars",
      },
      playerName: {
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80",
        text: "Devon Lane",
      },
      betAmount: {
        img: c2,
        text: "$ 922.93",
      },
      Multiplier: {
        text: "0.00x",
      },
      ProfileAmount: {
        img: c2,
        text: "$ 882.93",
      },
    },
    {
      game: {
        img: trec2,
        text: "The Dog House",
      },
      playerName: {
        img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
        text: "Ramao Lane",
      },
      betAmount: {
        img: c1,
        text: "$ 142.93",
      },
      Multiplier: {
        text: "0.00x",
      },
      ProfileAmount: {
        img: c1,
        text: "$ 882.93",
      },
    },
    {
      game: {
        img: trec3,
        text: "The Dog House",
      },
      playerName: {
        img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80",
        text: "Sima haoiew",
      },
      betAmount: {
        img: c3,
        text: "$ 922.93",
      },
      Multiplier: {
        text: "0.00x",
      },
      ProfileAmount: {
        img: c3,
        text: "$ 332.93",
      },
    },
    {
      game: {
        img: trec4,
        text: "Jammin jars",
      },
      playerName: {
        img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80",
        text: "Rema Skgd",
      },
      betAmount: {
        img: c4,
        text: "$ 142.93",
      },
      Multiplier: {
        text: "0.00x",
      },
      ProfileAmount: {
        img: c4,
        text: "$ 922.93",
      },
    },
    {
      game: {
        img: trec5,
        text: "Snakes and Ladders",
      },
      playerName: {
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
        text: "Devon Lane",
      },
      betAmount: {
        img: c5,
        text: "$ 987.93",
      },
      Multiplier: {
        text: "0.00x",
      },
      ProfileAmount: {
        img: c5,
        text: "$ 922.37",
      },
    },
    {
      game: {
        img: trec6,
        text: "Jammin House",
      },
      playerName: {
        img: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80",
        text: "Devon Lane",
      },
      betAmount: {
        img: c6,
        text: "$ 922.93",
      },
      Multiplier: {
        text: "0.00x",
      },
      ProfileAmount: {
        img: c6,
        text: "$ 9112.91",
      },
    },
    {
      game: {
        img: trec7,
        text: "Floatin Draggon",
      },
      playerName: {
        img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
        text: "Devon Lane",
      },
      betAmount: {
        img: c7,
        text: "$ 234,88",
      },
      Multiplier: {
        text: "0.00x",
      },
      ProfileAmount: {
        img: c7,
        text: "$ 9224.9",
      },
    },
  ];
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="rounded-tl-lg">Game</th>
          <th>Player name</th>
          <th>Bet Amount</th>
          <th>Multiplier</th>
          <th className="rounded-tr-lg">Profit Amount</th>
        </tr>
      </thead>
      <tbody>
        {data.map((EachData, key) => (
          <tr key={key}>
            <td>
              <div className="rounded-tl-lg flex items-center">
                <img
                  src={EachData.game.img}
                  alt=""
                  className="mr-2 w-7 h-7 rounded-sm"
                />
                {EachData.game.text}
              </div>
            </td>
            <td>
              <div className="rounded-tl-lg flex items-center">
                <img
                  src={EachData.playerName.img}
                  alt=""
                  className="mr-2 w-7 h-7 rounded-full"
                />
                {EachData.playerName.text}
              </div>
            </td>
            <td>
              <div className="rounded-tl-lg flex items-center">
                {EachData.betAmount.text}
                <img
                  src={EachData.betAmount.img}
                  alt=""
                  className="ml-2 w-7 h-7 rounded-sm"
                />
              </div>
            </td>
            <td>{EachData.Multiplier.text}</td>
            <td className="rounded-tr-lg">
              <div className="rounded-tl-lg flex items-center justify-end">
                {EachData.ProfileAmount.text}
                <img
                  src={EachData.ProfileAmount.img}
                  alt=""
                  className="ml-2 w-7 h-7 rounded-sm"
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
