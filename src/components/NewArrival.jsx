import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import gameg1 from "../assets/img/n1.png";
import gameg2 from "../assets/img/n2.png";
import gameg3 from "../assets/img/n3.png";
import gameg4 from "../assets/img/n4.png";
import gameg5 from "../assets/img/n5.png";
import gameg6 from "../assets/img/n6.png";
import b from "../assets/img/b.svg";

export const NewArrival = () => {
  const ImagesArray = [
    {
      img: gameg1,
      text: "Wild Cash Dice",
    },
    {
      img: gameg2,
      text: "Light of Ra",
    },
    {
      img: gameg3,
      text: "Butterfly Charms",
    },
    {
      img: gameg4,
      text: "Book of Knights",
    },
    {
      img: gameg5,
      text: "Hold The Gold",
    },
    {
      img: gameg6,
      text: "Dice Bonanza",
    },
    {
      img: gameg1,
      text: "Wild Cash Dice",
    },
    {
      img: gameg2,
      text: "Light of Ra",
    },
    {
      img: gameg3,
      text: "Butterfly Charms",
    },
    {
      img: gameg4,
      text: "Book of Knights",
    },
    {
      img: gameg5,
      text: "Hold The Gold",
    },
    {
      img: gameg6,
      text: "Dice Bonanza",
    },
  ];
  return (
    <div className="RecentWin arrowareaslider">
      <div className="top flex items-center justify-between mb-4">
        <h1 className="flex items-center">New</h1>
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
