import React from "react";

const SearchDropdown = ({ getQuery, query }) => {
  const changeQuery = (e) => {
    getQuery(e.target.attributes.value.nodeValue);
  };
  const menuName = {
    q: "전체",
    title: "제목",
    description: "설명",
  };
  return (
    <div className="dropdown">
      <button className="dropdown-toggle" type="button" data-toggle="dropdown">
        {menuName[query]}
      </button>
      <div className="dropdown-menu">
        <div className="dropdown-item" value="q" onClick={changeQuery}>
          전체
        </div>
        <div className="dropdown-item" value="title" onClick={changeQuery}>
          제목
        </div>
        <div
          className="dropdown-item"
          value="description"
          onClick={changeQuery}
        >
          설명
        </div>
      </div>
    </div>
  );
};

export default SearchDropdown;
