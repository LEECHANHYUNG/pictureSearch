import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import HeartListContainer from "../HeartList/HeartListContainer";
import SearchBar from "../Search/SearchBar";
import PictureContainer from "./PictureContainer";
import ShowHeartButton from "./ShowHeartButton";

const MainContainer = () => {
  const [imageList, setImageList] = useState();
  const [showListClicked, setShowListClicked] = useState(false);
  const { search } = useLocation();
  console.log(search);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          search
            ? `https://images-api.nasa.gov/search${search}`
            : `https://images-api.nasa.gov/search?q=galaxy&page=1`
        );
        setImageList(data.collection.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [search]);
  const showListButtonHandler = () => {
    setShowListClicked(!showListClicked);
  };
  return (
    <>
      <SearchBar />
      <Container className="picture-container" fluid="xxl">
        <ShowHeartButton
          onClick={showListButtonHandler}
          showListClicked={showListClicked}
        />
        <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
          {imageList ? (
            <Row style={{ width: "1372px", marginLeft: 0, marginRight: 0 }}>
              <PictureContainer items={Array.from(imageList)} />
            </Row>
          ) : (
            ""
          )}
        </Col>
      </Container>
      {showListClicked ? (
        <HeartListContainer showListHandler={showListButtonHandler} />
      ) : (
        ""
      )}
    </>
  );
};

export default MainContainer;
