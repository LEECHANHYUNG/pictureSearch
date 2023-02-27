import React from "react";
import BlackHeart from "../Svg/BlackHeart";

const ShowHeartButton = () => {
  return (
    <div className="show-heart-button">
      <BlackHeart />
      <div>좋아요 리스트 보기</div>
    </div>
  );
};

export default ShowHeartButton;
