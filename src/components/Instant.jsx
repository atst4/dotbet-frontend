import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import gameg1 from "../assets/img/i1.png";
import gameg2 from "../assets/img/i2.png";
import gameg3 from "../assets/img/i3.png";
import gameg4 from "../assets/img/i4.png";
import gameg5 from "../assets/img/i5.png";
import gameg6 from "../assets/img/i6.png";
import b from "../assets/img/b.svg";

export const Instant = () => {
  const ImagesArray = [
    {
      img: gameg1,
      text: "7bit Bonanza",
    },
    {
      img: gameg2,
      text: "Buffalo Trail",
    },
    {
      img: gameg3,
      text: "Wish Granted",
    },
    {
      img: gameg4,
      text: "Pompeii Gold",
    },
    {
      img: gameg5,
      text: "The pendragon",
    },
    {
      img: gameg6,
      text: "Mummyland ",
    },
    {
      img: gameg1,
      text: "7bit Bonanza",
    },
    {
      img: gameg2,
      text: "Buffalo Trail",
    },
    {
      img: gameg3,
      text: "Wish Granted",
    },
    {
      img: gameg4,
      text: "Pompeii Gold",
    },
    {
      img: gameg5,
      text: "The pendragon",
    },
    {
      img: gameg6,
      text: "Mummyland ",
    },
  ];
  return (
    <div className="RecentWin arrowareaslider">
      <div className="top flex items-center justify-between mb-4">
        <h1 className="flex items-center">Instant</h1>
      </div>

      <div className="slider-wrapper-recent">
        <Splide
          className="mt-8 mb-8 SliderAreaFirst"
          options={{
            gap: 10,
            arrows: true,
            pagination: false,
            perPage: 6,
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
                  <img src={b} alt="tag" />
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};
