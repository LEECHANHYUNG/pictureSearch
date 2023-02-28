import React from "react";
import { Button, Card } from "react-bootstrap";
import EmptyHeart from "../Svg/EmptyHeart";

const PictureCard = ({ item }) => {
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
          {item.data[0].description}
        </Card.Text>
      </Card.Body>
      <EmptyHeart className="empty-heart" />
    </Card>
  );
};

export default PictureCard;
