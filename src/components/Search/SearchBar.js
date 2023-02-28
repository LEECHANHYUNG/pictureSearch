import React from "react";
import "../../style/SearchBar.css";
import { Button, Container, Row } from "react-bootstrap";

import { ButtonGroup } from "react-bootstrap";
import SearchInput from "./SearchInput";
import SearchDropdown from "./SearchDropdown";

const SearchBar = () => {
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];
  return (
    <Container>
      <Row className="search-bar-container">
        <ButtonGroup>
          <SearchDropdown />
          <SearchInput />
          <Button variant="primary">검색하기</Button>
        </ButtonGroup>
      </Row>
    </Container>
  );
};

export default SearchBar;
