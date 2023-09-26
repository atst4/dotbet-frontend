import React from "react";
import glowdot from "../assets/img/glow-dot.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import gameg1 from "../assets/img/jetx.png";
import gameg2 from "../assets/img/wild-spin.png";
import gameg3 from "../assets/img/throne.png";
import gameg4 from "../assets/img/bufalo.png";
import gameg5 from "../assets/img/bufalo2.png";

export const Hits = () => {
  const ImagesArray = [
    {
      img: gameg1,
      text: "JatX",
    },
    {
      img: gameg2,
      text: "Wild Spin",
    },
    {
      img: gameg3,
      text: "Throne fo camelot",
    },
    {
      img: gameg4,
      text: "Buffalo Goes",
    },
    {
      img: gameg5,
      text: "Savage buffalo",
    },
  ];
  return (
    <div className="RecentWin mt-10">
      <div className="top flex items-center justify-between mb-4">
        <h1 className="flex items-center">
          <img src={glowdot} alt="glowdot" className="mr-2" />
          Hits
        </h1>
        <a href="/">See all</a>
      </div>

      <div className="slider-wrapper-recent">
        <Splide
          className="mt-8 mb-8 SliderAreaFirst"
          options={{
            gap: 10,
            arrows: false,
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
                  <button>Original</button>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};
