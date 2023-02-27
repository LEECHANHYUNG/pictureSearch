import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PictureContainer from "./PictureContainer";

const MainContainer = () => {
  const [initialState, setInitialState] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          "https://images-api.nasa.gov/search?q=Galaxy&page=1"
        );
        setInitialState(data.collection.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <Container className="picture-container" fluid="xxl">
      <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
        {initialState ? (
          <Row style={{ width: "1372px", marginLeft: 0, marginRight: 0 }}>
            <PictureContainer items={Array.from(initialState)} />
          </Row>
        ) : (
          ""
        )}
      </Col>
    </Container>
  );
};

export default MainContainer;
