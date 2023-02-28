import React, { Component } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import MainContainer from "./components/Main/MainContainer";
import HeartProvider from "./store/HeartProvider";
class App extends Component {
  render() {
    return (
      <HeartProvider>
        <Header />
        <main>
          <MainContainer />
        </main>
      </HeartProvider>
    );
  }
}

export default App;
