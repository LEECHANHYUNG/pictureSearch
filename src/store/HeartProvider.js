import React from "react";
import { useReducer } from "react";
import HeartContext from "./heart-context";

const defaultHeartState = {
  items: JSON.parse(sessionStorage.getItem("heartList")),
};

const heartReducer = (state, action) => {
  let itemsList = JSON.parse(sessionStorage.getItem("heartList"));
  if (action.type === "ADD") {
    if (itemsList) {
      itemsList[action.item.data[0].nasa_id] = action.item;
    } else {
      itemsList = {};
      itemsList[action.item.data[0].nasa_id] = action.item;
    }
    sessionStorage.setItem("heartList", JSON.stringify(itemsList));
    state.items = itemsList;
    return {
      items: itemsList,
    };
  } else if (action.type === "REMOVE") {
    delete itemsList[action.id];
    sessionStorage.setItem("heartList", JSON.stringify(itemsList));
    state.items = itemsList;
    return {
      items: itemsList,
    };
  }
  return defaultHeartState;
};

const HeartProvider = (props) => {
  const [heartState, dispatchHeartAction] = useReducer(
    heartReducer,
    defaultHeartState
  );
  const addHeartItem = (item) => {
    dispatchHeartAction({ type: "ADD", item: item });
  };

  const removeHeartItem = (id) => {
    dispatchHeartAction({ type: "REMOVE", id: id });
  };
  const heartContext = {
    items: heartState.items,
    addItem: addHeartItem,
    removeItem: removeHeartItem,
  };
  return (
    <HeartContext.Provider value={heartContext}>
      {props.children}
    </HeartContext.Provider>
  );
};
export default HeartProvider;
