import React, { useEffect, useRef } from "react";
import { Header } from "./Header";
import rewardBanner from "../assets/img/reward-banner.png";
import chat from "../assets/img/chat-green.svg";
import emoji from "../assets/img/emoji.svg";
import send from "../assets/img/send.svg";
import dailyBonus from "../assets/img/dailyBonus.svg";
import { Hits } from "./Hits";
import { TopRatesGame } from "./TopRatesGame";
import { RecommendedGames } from "./RecommendedGames";
import { LatestBets } from "./LatestBets";
import { CommentCard } from "./CommentCard";
import { LiveCasino } from "./LiveCasino";
import { GameShow } from "./GameShow";
import { BtcGames } from "./BtcGames";
import { Instant } from "./Instant";
import { Slots } from "./Slots";
import { Bonus } from "./Bonus";
import { NewArrival } from "./NewArrival";

import sports from "../assets/img/aside/tabs/Sports.svg";
import Roulette from "../assets/img/aside/tabs/roulette.svg";
import Live from "../assets/img/aside/tabs/Live casino.svg";
import slots from "../assets/img/aside/tabs/Slots.svg";
import home from "../assets/img/aside/tabs/home.svg";

export const RightAreaHome = () => {
  const commentsData = [
    {
      name: "Devon Lane",
      date: "04:02 am",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      comment: "Me recomenda alguma coisa 🥺🥺",
    },
    {
      name: "Dianne Russell",
      date: "02:34 am",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      comment: "Ação, comédia, romance... sou um cinéfilo versátil! 🎥💥",
    },
    {
      name: "Imran Hossen",
      date: "02:34 am",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      comment:
        "Quem precisa de heróis reais quando se tem super-heróis no cinema? 💪🎞️",
    },
    {
      name: "Jane Cooper",
      date: "12:23 pm",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      comment: "Filmes são minha terapia diária. 🎞️💆‍♂️",
    },
    {
      name: "Dianne Russell",
      date: "02:34 am",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      comment: "Ação, comédia, romance... sou um cinéfilo versátil! 🎥💥",
    },
    {
      name: "Imran Hossen",
      date: "02:34 am",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      comment:
        "Quem precisa de heróis reais quando se tem super-heróis no cinema? 💪🎞️",
    },
    {
      name: "Jane Cooper",
      date: "12:23 pm",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      comment: "Filmes são minha terapia diária. 🎞️💆‍♂️",
    },
    {
      name: "Dianne Russell",
      date: "02:34 am",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      comment: "Ação, comédia, romance... sou um cinéfilo versátil! 🎥💥",
    },
    {
      name: "Imran Hossen",
      date: "02:34 am",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      comment:
        "Quem precisa de heróis reais quando se tem super-heróis no cinema? 💪🎞️",
    },
  ];
  const ref = useRef(null);
  const refRight = useRef(null);

  const ResizeWork = (e) => {
    let Element = window.innerWidth;
    let ElementHeight = window.innerHeight;
    ref.current.style.width = `${Element - 460}px`;
    refRight.current.style.height = `${ElementHeight - 180}px`;
  };
  useEffect(() => {
    ResizeWork();
    window.addEventListener("resize", ResizeWork);
  }, []);
  return (
    <div className="flex-1">
      <Header/>
      <div className="body-area flex items-start px-6 pt-6">
        <div className="body-left-area  mr-6" ref={ref}>
          <div className="welcome-area py-8 p-6 rounded-xl relative">
            <h1 className="mb-4">Lucky Spin Tournament</h1>
            <p>Win in selected Smartoft games. Save points and share </p>
            <p>$50 000 prize pool!</p>
            <p>1.09-26.09</p>
            <div className="buttons-wrapper mt-6">
              <button className="w-36 h-11 mr-3">Get Started</button>
            </div>

            <img src={rewardBanner} className="rewardBanner" alt="" />
          </div>

          <div className="tags-wrapper mt-10 mb-12  grid grid-cols-7 gap-3">
            <div className="tag flex justify-center  items-center active">
              <img src={home} alt="home" />
              <p>Lobby</p>
            </div>
            <div className="tag flex justify-center  items-center">
              <img src={sports} alt="sports" />
              <p>Sports</p>
            </div>
            <div className="tag flex justify-center  items-center">
              <img src={Live} alt="Live" />
              <p>Live Casino</p>
            </div>
            <div className="tag flex justify-center  items-center">
              <img src={slots} alt="slots" />
              <p>Featured Slots</p>
            </div>
            <div className="tag flex justify-center  items-center">
              <img src={Roulette} alt="Roulette" />
              <p>Roulette</p>
            </div>
            <div className="tag flex justify-center  items-center">
              <img src={slots} alt="fishing" />
              <p>Fishing</p>
            </div>
            <div className="tag flex  justify-center items-center">
              <img src={slots} alt="game show" />
              <p>Game Shows</p>
            </div>
          </div>

          {/* RecentWin*/}
          <Hits />

          {/* NewArrival */}
          <NewArrival />

          {/* Bonus */}
          <Bonus />

          {/* Slots */}
          <Slots />

          {/* Instant */}
          <Instant />

          {/* LiveCasino */}
          <LiveCasino />

          {/* GameShow */}
          <GameShow />

          {/* BtcGames */}
          <BtcGames />

          {/* Top Rates Game */}
          <TopRatesGame />

          {/* LatestBets */}
          <LatestBets />

          {/* Recommended Game */}
          <RecommendedGames />
        </div>
        <div className="body-right-area rounded-2xl p-4">
          <div className="top-area pb-4 flex items-center relative">
            <img src={chat} alt="" />
            <h1 className="flex-1 ml-1">General Chat</h1>
            <p className="mr-1 absolute">489</p>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80"
                alt="first user online"
                className="w-5 h-5 rounded-full"
              />
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
                alt="second user online"
                className="w-5 h-5 rounded-full"
              />
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80"
                alt="third user online"
                className="w-5 h-5 rounded-full"
              />
            </div>
          </div>

          <div className="scroll-area-start pt-4 pb-10" ref={refRight}>
            <img src={dailyBonus} alt="Daily Bonus" className="w-full mb-4" />

            {commentsData.map((EachData, index) => (
              <CommentCard
                key={index}
                name={EachData.name}
                date={EachData.date}
                img={EachData.img}
                comment={EachData.comment}
              />
            ))}

            <div className="comment-area flex items-center px-4 h-14 rounded-bl-2xl rounded-br-2xl">
              <input
                type="text"
                placeholder="Send a message..."
                className="flex-1 w-full"
              />
              <div className="flex">
                <img src={emoji} alt="emoji" className="mr-3" />
                <img src={send} alt="send" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
