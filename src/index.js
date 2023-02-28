import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

import "/workspace/pictureSearch/src/goorm.css";
import { BrowserRouter, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>
);
