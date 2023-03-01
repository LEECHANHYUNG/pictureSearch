import React from "react";

const SearchDropdown = () => {
  return (
    <div className="dropdown">
      <button
        className="btn  dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-expanded="false"
      >
        전체
      </button>
      <div className="dropdown-menu">
        <div className="dropdown-item">전체</div>
        <div className="dropdown-item">제목</div>
        <div className="dropdown-item">설명</div>
      </div>
    </div>
  );
};

export default SearchDropdown;
