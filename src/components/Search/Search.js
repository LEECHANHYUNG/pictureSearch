import React from "react";
import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import SearchDropdown from "./SearchDropdown";
import SearchInput from "./SearchInput";
const Search = () => {
  return (
    <ButtonGroup>
      {/* 
      <SearchDropdown /> */}
      <SearchInput />
      <Button variant="primary">검색하기 </Button>
    </ButtonGroup>
  );
};

export default Search;
