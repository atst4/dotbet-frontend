import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import gameg1 from "../assets/img/tmt1.png";
import gameg2 from "../assets/img/tmt2.png";
import gameg3 from "../assets/img/tmt3.png";
import gameg4 from "../assets/img/tmt4.png";
import gameg5 from "../assets/img/tmt5.png";
import info from "../assets/img/info.svg";

export const TopRatesGame = () => {
  const ImagesArray = [gameg1, gameg2, gameg3, gameg4, gameg5];
  return (
    <div className="RecentWin TopRatesGame">
      <div className="top flex items-center justify-between mb-4">
        <h1 className="flex items-center">Top Rates Game</h1>
        <a href="/">See all</a>
      </div>

      <div className="slider-wrapper-recent">
        <Splide
          className="mt-8 mb-8 SliderAreaFirst "
          options={{
            gap: 10,
            arrows: false,
            pagination: false,
            perPage: 5,
          }}
        >
          {ImagesArray.map((EachImage, key) => (
            <SplideSlide key={key}>
              <div className="card ">
                <img
                  src={EachImage}
                  alt={`slider ${key + 1}`}
                  className="rounded-tr-lg rounded-tl-lg"
                />
                <div className="presentation p-3 rounded-bl-lg rounded-br-lg">
                  <div className="top-area  mb-2 flex items-center justify-between">
                    <h1 className="">TMT Cash</h1>
                    <img src={info} alt="info" />
                  </div>

                  <button className="h-6 rounded-lg text-xs">Play Now</button>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};
