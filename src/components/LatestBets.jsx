import React from "react";
import { TabsAside } from "./TabsAside";
import { BetsTable } from "./BetsTable";

export const LatestBets = () => {
  const data = [
    {
      label: "Latest bets",
      value: "Latest bets",
    },
    {
      label: "High rollers",
      value: "High rollers",
    },
    {
      label: "Wager contest",
      value: "Wager contest",
    },
  ];

  return (
    <div className="RecentWin LatestBets">
      <div className="top flex items-center justify-between mb-4">
        <h1>Latest bet & Race</h1>
        <a href="/">See all</a>
      </div>
      <div className="w-80 mt-9 mb-5">
        <TabsAside data={data} />
      </div>
      <div className="table-area w-full mb-10">
        <BetsTable />
      </div>
    </div>
  );
};
