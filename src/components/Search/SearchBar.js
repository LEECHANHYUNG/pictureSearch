import React, { useEffect, useState } from "react";
import "../../style/SearchBar.css";
import { Button, Container, Row } from "react-bootstrap";

import { ButtonGroup } from "react-bootstrap";
import SearchInput from "./SearchInput";
import SearchDropdown from "./SearchDropdown";
import { useHistory } from "react-router-dom";

const SearchBar = ({ searchWordValue, searchWordKey }) => {
  const [query, setQuery] = useState("q");
  const [searchWord, setSearchWord] = useState("");
  const history = useHistory();
  const getSearchWord = (word) => {
    setSearchWord(word);
  };
  useEffect(() => {
    setQuery(searchWordKey);
  }, [searchWordKey]);
  useEffect(() => {
    setSearchWord(searchWordValue);
  }, [searchWordValue]);
  const getImageListHandler = async (e) => {
    e.preventDefault();
    history.push({
      pathname: "/search",
      search: `${query}=${searchWord}&page=1`,
    });
  };
  const getQuery = (value) => {
    setQuery(value);
  };
  return (
    <Container>
      <Row className="search-bar-container">
        <ButtonGroup>
          <SearchDropdown getQuery={getQuery} query={query} />
          <form onSubmit={getImageListHandler}>
            <SearchInput
              getSearchWord={getSearchWord}
              searchWordValue={searchWordValue}
            />
          </form>
          <Button variant="primary" onClick={getImageListHandler}>
            검색하기
          </Button>
        </ButtonGroup>
      </Row>
    </Container>
  );
};

export default SearchBar;
