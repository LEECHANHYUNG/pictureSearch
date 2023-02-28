import React, { Component } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import MainContainer from "./components/Main/MainContainer";
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <MainContainer />
        </main>
      </>
    );
  }
}

export default App;
