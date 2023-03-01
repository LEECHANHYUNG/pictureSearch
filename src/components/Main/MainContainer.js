import React, { useCallback, useEffect, useRef, useState } from "react";
import { CardGroup, Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import useImageSearch from "../../useImageSearch";
import HeartListContainer from "../HeartList/HeartListContainer";
import SearchBar from "../Search/SearchBar";
import PictureCard from "./PictureCard";
import ShowHeartButton from "./ShowHeartButton";

const MainContainer = () => {
  const [showListClicked, setShowListClicked] = useState(false);
  const [page, setPage] = useState(1);
  const { search } = useLocation();
  const observer = useRef();
  const { isLoading, images } = useImageSearch(
    search.slice(0, search.length - 1),
    page
  );
  useEffect(() => {
    setPage(1);
  }, [search]);
  const lastImageElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading]
  );

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
          {images ? (
            <Row style={{ width: "1372px", marginLeft: 0, marginRight: 0 }}>
              <CardGroup className="d-flex justify-content-between card-group">
                {images.map((elem, idx) =>
                  elem.data[0].media_type === "image" ? (
                    <Col
                      style={{
                        paddingLeft: 0,
                        paddingRight: 0,
                        width: "212px",
                        marginBottom: "20px",
                      }}
                      key={elem.data[0].nasa_id}
                      className="col-2"
                    >
                      {images.length === idx + 1 ? (
                        <PictureCard ref={lastImageElementRef} item={elem} />
                      ) : (
                        <PictureCard item={elem} />
                      )}
                    </Col>
                  ) : (
                    ""
                  )
                )}
              </CardGroup>
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
