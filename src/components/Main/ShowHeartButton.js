import React from "react";
import BlackHeart from "../Svg/BlackHeart";
import BlueHeart from "../Svg/BlueHeart";

const ShowHeartButton = ({ onClick, showListClicked }) => {
  return (
    <div
      className={`show-heart-button ${showListClicked ? "show" : ""}`}
      onClick={onClick}
    >
      {showListClicked ? <BlueHeart /> : <BlackHeart />}
      <div>좋아요 리스트 보기</div>
    </div>
  );
};

export default ShowHeartButton;
