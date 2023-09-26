import React from "react";
import dots from "../assets/img/dots.svg";
export const CommentCard = ({ name, date, img, comment }) => {
  return (
    <div className="flex mb-4 items-start CommentCard p-3 rounded-2xl">
      <img
        src={img}
        alt="avatar"
        className="w-8 h-8 min-w-8 object-cover rounded-full"
      />
      <div className="right-area ml-2">
        <div className="top-area flex items-center">
          <h1>{name}</h1>
          <p className="flex-1 ml-2">{date}</p>
          <img src={dots} alt="dots" />
        </div>
        <p className="mt-1">{comment}</p>
      </div>
    </div>
  );
};
