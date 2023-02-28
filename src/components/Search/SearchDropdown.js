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
        <a className="dropdown-item" href="#">
          전체
        </a>
        <a className="dropdown-item" href="#">
          제목
        </a>
        <a className="dropdown-item" href="#">
          설명
        </a>
      </div>
    </div>
  );
};

export default SearchDropdown;
