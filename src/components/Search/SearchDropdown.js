import React from "react";
import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";

const SearchDropdown = () => {
  return (
    <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
      <Dropdown.Item eventKey="1">전체</Dropdown.Item>
      <Dropdown.Item eventKey="2">제목</Dropdown.Item>
      <Dropdown.Item eventKey="3">설명</Dropdown.Item>
    </DropdownButton>
  );
};

export default SearchDropdown;
