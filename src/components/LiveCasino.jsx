import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import gameg1 from "../assets/img/l1.png";
import gameg2 from "../assets/img/l2.png";
import gameg3 from "../assets/img/l3.png";
import gameg4 from "../assets/img/l4.png";
import gameg5 from "../assets/img/l5.png";
import livecasino from "../assets/img/live-casino.svg";

export const LiveCasino = () => {
  const ImagesArray = [
    {
      img: gameg1,
      text: "Roulette",
    },
    {
      img: gameg2,
      text: "SicBo",
    },
    {
      img: gameg3,
      text: "Baccarat",
    },
    {
      img: gameg4,
      text: "Game Shows",
    },
    {
      img: gameg5,
      text: "Craps",
    },
    {
      img: gameg1,
      text: "Roulette",
    },
    {
      img: gameg2,
      text: "SicBo",
    },
    {
      img: gameg3,
      text: "Baccarat",
    },
    {
      img: gameg4,
      text: "Game Shows",
    },
    {
      img: gameg5,
      text: "Craps",
    },
  ];
  return (
    <div className="RecentWin arrowareaslider">
      <div className="top flex items-center justify-between mb-4">
        <h1 className="flex items-center">
          <img src={livecasino} alt="livecasino" className="mr-2" />
          Live Casino
        </h1>
      </div>

      <div className="slider-wrapper-recent">
        <Splide
          className="mt-8 mb-8 SliderAreaFirst"
          options={{
            gap: 10,
            arrows: true,
            pagination: false,
            perPage: 5,
          }}
        >
          {ImagesArray.map((EachImage, key) => (
            <SplideSlide key={key}>
              <div className="card cursor-pointer">
                <img
                  src={EachImage.img}
                  alt={`slider ${key + 1}`}
                  className="rounded-tr-lg rounded-tl-lg"
                />
                <div className="presentation p-3 justify-between flex items-center rounded-bl-lg rounded-br-lg">
                  <h1>{EachImage.text}</h1>
                  <button>Pragmatic Play</button>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};
