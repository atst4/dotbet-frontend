import React from "react";
import facebook from "../assets/img/facebook.svg";
import github from "../assets/img/github.svg";
import twitter from "../assets/img/twitter.svg";
import discord from "../assets/img/discord.svg";
import bitcoin from "../assets/img/bitcoin.svg";
import share from "../assets/img/share.svg";
import logo from "../assets/img/logo.svg";
import coin1 from "../assets/img/image 93.svg";
import coin2 from "../assets/img/image 94.svg";
import coin3 from "../assets/img/image 95.svg";
import coin4 from "../assets/img/image 96.svg";
import coin5 from "../assets/img/image 97.svg";
import coin6 from "../assets/img/image 98.svg";
import coin7 from "../assets/img/image 99.svg";
import coin8 from "../assets/img/image 100.svg";
import coin9 from "../assets/img/image 101.svg";
import coin10 from "../assets/img/image 102.svg";
import coin11 from "../assets/img/image 104.svg";
import coin12 from "../assets/img/image 84.svg";
import coin13 from "../assets/img/image 85.svg";
import coin14 from "../assets/img/image 86.svg";
import coin15 from "../assets/img/image 87.svg";
import coin16 from "../assets/img/image 88.svg";
import coin17 from "../assets/img/image 89.svg";
import coin19 from "../assets/img/image 91.svg";
import coin20 from "../assets/img/image 92.svg";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
export const Footer = () => {
  const iconsArray = [
    coin1,
    coin2,
    coin3,
    coin4,
    coin5,
    coin6,
    coin7,
    coin8,
    coin9,
    coin10,
    coin11,
    coin12,
    coin13,
    coin14,
    coin15,
    coin16,
    coin17,
    coin19,
    coin20,
  ];
  return (
    <footer className="pt-16 pb-14 mt-16">
      <div className="footer-width content-footer-area">
        <div className="why-area grid grid-cols-2 gap-36">
          <div className="left-area-footer-why">
            <h1>Why DotBet?</h1>
            <p className="mt-8">
              The Widest Selection of Games. At DotBet, we believe that variety
              is the spice of life. Whether you're a fan of casino games, a
              sports betting enthusiast, or simply looking for new challenges,
              we've got you covered. Our gaming hub is constantly updated with
              the latest and greatest offerings, from card games and slot
              machines, to competitive sports betting, and more!
            </p>

            <p className="mt-4">
              Interested in elevating your gaming and earning experience? DotBet
              is offering you a golden opportunity you don't want to miss. Join
              our affiliate program and earn incredible commissions, up to a
              staggering 60%, along with enticing incentives and cashback
              rewards!
            </p>
            <h2 className="mt-9 mb-8">Join Our Community</h2>
            <div className="flex items-center social-icons-footer">
              <a href="/" className="mr-3">
                <img src={share} alt="share icon" />
              </a>
              <a href="/" className="mr-3">
                <img src={github} alt="github icon" />
              </a>
              <a href="/" className="mr-3">
                <img src={twitter} alt="twitter icon" />
              </a>
              <a href="/" className="mr-3">
                <img src={facebook} alt="facebook icon" />
              </a>
              <a href="/" className="mr-3">
                <img src={discord} alt="discord icon" />
              </a>
              <a href="/">
                <img src={bitcoin} alt="bitcoin icon" />
              </a>
            </div>
          </div>

          <div className="right-area-footer-why">
            <h1 className="text-white">Help us improve your experience</h1>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Found a bug! Or have any recommendations Please leave your message here and our team will work on it!"
              className="w-full h-32 mt-7 mb-6 rounded-lg resize-none px-4 py-3 text-white"
            ></textarea>
            <div className="submit flex items-center mb-5">
              <button className="w-56 h-12 rounded-lg mr-4">
                Leave a Message
              </button>
              <p>Now get rewarded for your valuable feedback.</p>
            </div>
            <p>
              Or Email us: <a href="/">example@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="list-area-footer mt-14 grid grid-cols-5">
          <ul>
            <li className="head">Casino</li>
            <li>
              <a href="/">Casino Home</a>
            </li>
            <li>
              <a href="/">Live Casino</a>
            </li>
            <li>
              <a href="/">New Releases</a>
            </li>
            <li>
              <a href="/">Table Game</a>
            </li>
          </ul>

          <ul>
            <li className="head">Sports</li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Live</a>
            </li>
            <li>
              <a href="/">Rules</a>
            </li>
            <li>
              <a href="/">Leve betting</a>
            </li>
          </ul>

          <ul>
            <li className="head">Promo</li>
            <li>
              <a href="/">VIP Club</a>
            </li>
            <li>
              <a href="/">Affiliate</a>
            </li>
            <li>
              <a href="/">Lottery</a>
            </li>
            <li>
              <a href="/">Refer a friend</a>
            </li>
          </ul>

          <ul>
            <li className="head">Support / Legal</li>
            <li>
              <a href="/">Help canter</a>
            </li>
            <li>
              <a href="/">Gamble Aware</a>
            </li>
            <li>
              <a href="/">Famines</a>
            </li>
            <li>
              <a href="/">Privacy policy</a>
            </li>
          </ul>

          <ul>
            <li className="head"> About us</li>
            <li>
              <a href="/">News</a>
            </li>
            <li>
              <a href="/">Work With Us</a>
            </li>
            <li>
              <a href="/">Business Contacts</a>
            </li>
            <li>
              <a href="/">Help Desk</a>
            </li>
          </ul>
        </div>

        <div className="logo-footer-area grid grid-cols-2 gap-5 mt-16">
          <div className="left-area">
            <a href="/">
              <img src={logo} alt="" />
            </a>
            <p className="mt-5">
              Welcome to DotBet, your one-stop digital gaming destination.
            </p>
            <p>
              We're not just another name in the online gaming world; we
              represent the future of entertainment. We bring you a fantastic
              mix of casino games, sports betting, and a variety of other
              interactive experiences—all powered by the revolutionary Web3
              technology. With DotBet, we invite you on a gaming adventure
              that's both exciting and thrilling, offering an absolute blend of
              fun and the joy of winning!
            </p>
          </div>
          <div className="right-area">
            <h1 className="mb-7">So what are you waiting for?</h1>
            <p>
              Join DotBet now and experience the best of online gaming and
              incredible earnings!
            </p>
          </div>
        </div>

        <div className="icons-wrapper mt-14">
          <div className="top-area flex items-center justify-between">
            <h1>Accepted Networks</h1>
            <a href="/">See all</a>
          </div>

          <div className="slider-area">
            <Splide
              className="mt-8 mb-16 SliderAreaFirst"
              options={{
                autoWidth: true,
                gap: 30,
                arrows: false,
                pagination: false,
              }}
            >
              {iconsArray.map((EachArray, key) => (
                <SplideSlide key={key}>
                  <img
                    src={EachArray}
                    className="w-10 h-10"
                    alt={`slider icon ${key + 1}`}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>

        <div className="cols-footer-area mt-16 grid grid-cols-3 gap-6">
          <div className="col">
            <h1>Why Choose DotBet Affiliate Program?</h1>
            <p className="mt-7">
              <span>Highest Commissions:</span> Earn up to a mind-blowing 60% in
              commissions, one of the highest rates ever offered in the
              industry.
            </p>
          </div>

          <div className="col">
            <h1>Incentives & Cash-backs</h1>
            <p className="mt-7">
              In addition to generous commissions, enjoy extra rewards and
              cash-backs to make your earning experience even more exhilarating.
            </p>
          </div>

          <div className="col">
            <h1>Earn While You Play</h1>
            <p className="mt-7">
              Transform your gaming passion into a steady income stream. Play
              your favorite games and earn money while you’re enjoying —what
              could be better?
            </p>
          </div>
        </div>

        <div className="copyright-area mt-20 flex items-center justify-between">
          <p>© 2023 DotBet. All rights reserved</p>
          <p>
            Privacy Policy
            <span></span>
            Terms Of Service
          </p>
        </div>
      </div>
    </footer>
  );
};
