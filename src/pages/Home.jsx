import React from "react";
import "../assets/css/home.css";
import { Aside } from "../components/Aside";
import { RightAreaHome } from "../components/RightAreaHome";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div>
      <div className="flex items-start home">
        {/* left area */}
        <Aside />
        {/* right area */}
        <RightAreaHome/>
      </div>
      <Footer />
    </div>
  );
};
