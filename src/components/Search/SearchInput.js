import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";

const SearchInput = () => {
  return (
    <div className="input-container">
      <input
        type="text"
        className="form-control"
        placeholder="검색어를 입력해주세요."
        aria-label="Input group example"
        aria-describedby="btnGroupAddon2"
      />
    </div>
  );
};

export default SearchInput;
