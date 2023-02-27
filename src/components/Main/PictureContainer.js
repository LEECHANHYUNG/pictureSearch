import React from "react";
import { CardGroup, Col, Row } from "react-bootstrap";
import PictureCard from "./PictureCard";

const PictureContainer = () => {
  return (
    <CardGroup className="d-flex justify-content-between card-group">
      <Col>
        <PictureCard />
      </Col>
      <Col>
        <PictureCard />
      </Col>
      <Col>
        <PictureCard />
      </Col>
      <Col>
        <PictureCard />
      </Col>
      <Col>
        <PictureCard />
      </Col>
      <Col>
        <PictureCard />
      </Col>
    </CardGroup>
  );
};

export default PictureContainer;
