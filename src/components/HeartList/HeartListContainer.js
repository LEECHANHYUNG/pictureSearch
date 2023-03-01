import React, { useContext } from "react";
import HeartContext from "../../store/heart-context";
import "../../style/HeartList.css";
import PictureCard from "../Main/PictureCard";
import CloseButton from "./CloseButton";
import NoHeartListContainer from "./NoHeartListContainer";
const HeartListContainer = ({ showListHandler }) => {
  const heartCtx = useContext(HeartContext);
  const heartList = heartCtx.items;
  console.log(heartList);
  return (
    <section className="heart-list-container">
      <button className="close-button" onClick={showListHandler}>
        <CloseButton />
      </button>
      <header>좋아요 리스트 </header>
      <div className="heart-list-item">
        {Object.keys(heartList).length !== 0 ? (
          Object.keys(heartList)
            .reverse()
            .map((elem) => <PictureCard item={heartList[elem]} key={elem} />)
        ) : (
          <NoHeartListContainer />
        )}
      </div>
    </section>
  );
};

export default HeartListContainer;
