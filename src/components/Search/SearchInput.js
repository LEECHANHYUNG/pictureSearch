import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";

const SearchInput = () => {
  return (
    <InputGroup>
      <FormControl
        type="text"
        placeholder="검색어를 입력해주세요."
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
      />
    </InputGroup>
  );
};

export default SearchInput;
