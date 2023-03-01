import React, { useRef } from "react";

const SearchInput = ({ getSearchWord }) => {
  const searchInputRef = useRef();
  const changeSearchWordHandler = () => {
    getSearchWord(searchInputRef.current.value);
  };
  return (
    <div className="input-container">
      <input
        type="text"
        className="form-control"
        placeholder="검색어를 입력해주세요."
        aria-label="Input group example"
        aria-describedby="btnGroupAddon2"
        onChange={() => {
          changeSearchWordHandler();
        }}
        ref={searchInputRef}
      />
    </div>
  );
};

export default SearchInput;
