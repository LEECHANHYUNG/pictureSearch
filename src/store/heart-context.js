import React from "react";

const HeartContext = React.createContext({
  items: {},
  addItem: () => {},
  removeItem: () => {},
});
export default HeartContext;
