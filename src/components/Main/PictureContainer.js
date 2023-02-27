import React from "react";
import { CardGroup, Col, Row } from "react-bootstrap";
import PictureCard from "./PictureCard";

const PictureContainer = ({ items }) => {
  return (
    <CardGroup className="d-flex justify-content-between card-group">
      {items.map((elem) =>
        elem.data[0].media_type === "image" ? (
          <Col
            style={{
              paddingLeft: 0,
              paddingRight: 0,
              width: "212px",
              marginBottom: "20px",
            }}
            className="col-2"
          >
            <PictureCard item={elem} key={elem.data[0].nasa_id} />
          </Col>
        ) : (
          ""
        )
      )}
    </CardGroup>
  );
};

export default PictureContainer;
