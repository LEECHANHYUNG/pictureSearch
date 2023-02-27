import React, { Component } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Search from "./components/Search/Search";
import { Container } from "react-bootstrap";
import MainContainer from "./components/Main/MainContainer";
import HeartListContainer from "./components/HeartList/HeartListContainer";
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Container>
          <Search />
        </Container>
        <MainContainer />
        <HeartListContainer />
      </>
    );
  }
}

export default App;
