import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PictureContainer from "./PictureContainer";

const MainContainer = () => {
  return (
    <Container className="picture-container" fluid="xxl" >
      <Col>
        <Row>
          <PictureContainer />
        </Row>
        <Row>
          <PictureContainer />
        </Row>
        <Row>
          <PictureContainer />
        </Row>
      </Col>
    </Container>
  );
};

export default MainContainer;
