import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import gameg1 from "../assets/img/bt1.png";
import gameg2 from "../assets/img/bt2.png";
import gameg3 from "../assets/img/bt3.png";
import gameg4 from "../assets/img/bt4.png";
import gameg5 from "../assets/img/bt5.png";

export const BtcGames = () => {
  const ImagesArray = [
    {
      img: gameg1,
      text: "Dream Catcher",
    },
    {
      img: gameg2,
      text: "Game Shows",
    },
    {
      img: gameg3,
      text: "Crazy time",
    },
    {
      img: gameg4,
      text: "Monopoly Big Baller",
    },
    {
      img: gameg5,
      text: "Sweet Bonanza",
    },
    {
      img: gameg1,
      text: "Dream Catcher",
    },
    {
      img: gameg2,
      text: "Game Shows",
    },
    {
      img: gameg3,
      text: "Crazy time",
    },
    {
      img: gameg4,
      text: "Monopoly Big Baller",
    },
    {
      img: gameg5,
      text: "Sweet Bonanza",
    },
  ];
  return (
    <div className="RecentWin arrowareaslider">
      <div className="top flex items-center justify-between mb-4">
        <h1 className="flex items-center">Btc Games</h1>
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
                  <button>Evolution</button>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};
