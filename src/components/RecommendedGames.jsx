import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import gameg1 from "../assets/img/rec1.png";
import gameg2 from "../assets/img/rec2.png";
import info from "../assets/img/info.svg";

export const RecommendedGames = () => {
  const ImagesArray = [
    {
      game: gameg1,
      heading: "Crazy 7",
    },
    {
      game: gameg2,
      heading: "PG Soft",
    },
    {
      game: gameg1,
      heading: "Crazy 7",
    },
    {
      game: gameg2,
      heading: "PG Soft",
    },
    {
      game: gameg1,
      heading: "Crazy 7",
    },
    {
      game: gameg2,
      heading: "PG Soft",
    },
  ];
  return (
    <div className="RecentWin TopRatesGame">
      <div className="top flex items-center justify-between ">
        <h1 className="flex items-center">Recommended Games</h1>
        <a href="/">See all</a>
      </div>

      <div className="slider-wrapper-recent">
        <Splide
          className="mt-8 SliderAreaFirst "
          options={{
            gap: 10,
            arrows: false,
            pagination: false,
            perPage: 5,
          }}
        >
          {ImagesArray.map((EachObj, key) => (
            <SplideSlide key={key}>
              <div className="card ">
                <img
                  src={EachObj.game}
                  alt={`slider ${key + 1}`}
                  className="rounded-tr-lg rounded-tl-lg"
                />
                <div className="presentation p-3 rounded-bl-lg rounded-br-lg">
                  <div className="top-area  mb-2 flex items-center justify-between">
                    <h1 className="">{EachObj.heading}</h1>
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
