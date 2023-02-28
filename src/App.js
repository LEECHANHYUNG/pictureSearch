import React, { Component } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import SearchBar from "./components/Search/SearchBar";
import MainContainer from "./components/Main/MainContainer";
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <SearchBar />
          <MainContainer />
        </main>
      </>
    );
  }
}

export default App;
