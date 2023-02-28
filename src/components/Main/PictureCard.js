import React, { useState } from "react";
import { Card } from "react-bootstrap";
import EmptyHeart from "../Svg/EmptyHeart";
import PinkHeart from "../Svg/PinkHeart";

const PictureCard = ({ item }) => {
  const [isHearted, setIsHearted] = useState(false);
  const reverseHeartedHandler = () => {
    setIsHearted((prevState) => !prevState);
  };
  return (
    <Card
      className="picture-card"
      style={{ width: "212px", height: "274px", overflow: "hidden" }}
    >
      <Card.Img variant="top" src={item.links[0].href} />
      <Card.Body style={{ width: "212px", padding: "8px 12px" }}>
        <Card.Title
          as="h5"
          className="picture-card-title"
          style={{ marginBottom: "8px" }}
        >
          {item.data[0].title}
        </Card.Title>
        <Card.Text className="mb-2 picture-card-date">
          {item.data[0].date_created}
        </Card.Text>
        <Card.Text className="picture-card-description">
          {item.data[0].description.substr(0, 100) + "..."}
        </Card.Text>
      </Card.Body>
      {!isHearted ? (
        <EmptyHeart className="heart-icon" onClick={reverseHeartedHandler} />
      ) : (
        <PinkHeart className="heart-icon" onClick={reverseHeartedHandler} />
      )}
    </Card>
  );
};

export default PictureCard;
