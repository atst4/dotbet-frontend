import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import slider1 from "../assets/img/slider1.png";
import slider2 from "../assets/img/slider2.png";
import slider3 from "../assets/img/slider3.png";
export const SliderAreaFirst = () => {
  return (
    <Splide
      className="mt-8 mb-16 SliderAreaFirst"
      options={{
        perPage: 3,
        gap: 10,
        arrows: false,
      }}
    >
      <SplideSlide>
        <img src={slider1} alt="slider 1" />
      </SplideSlide>
      <SplideSlide>
        <img src={slider2} alt="slider 2" />
      </SplideSlide>
      <SplideSlide>
        <img src={slider3} alt="slider 3" />
      </SplideSlide>
      <SplideSlide>
        <img src={slider1} alt="slider 4" />
      </SplideSlide>
      <SplideSlide>
        <img src={slider2} alt="slider 5" />
      </SplideSlide>
      <SplideSlide>
        <img src={slider3} alt="slider 6" />
      </SplideSlide>
      <SplideSlide>
        <img src={slider1} alt="slider 1" />
      </SplideSlide>
      <SplideSlide>
        <img src={slider2} alt="slider 2" />
      </SplideSlide>
      <SplideSlide>
        <img src={slider3} alt="slider 3" />
      </SplideSlide>
      <SplideSlide>
        <img src={slider1} alt="slider 4" />
      </SplideSlide>
      <SplideSlide>
        <img src={slider2} alt="slider 5" />
      </SplideSlide>
      <SplideSlide>
        <img src={slider3} alt="slider 6" />
      </SplideSlide>
    </Splide>
  );
};
