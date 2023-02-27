import React, { Component } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Search from "./components/Search/Search";
import { Container } from "react-bootstrap";
import MainContainer from "./components/Main/MainContainer";
class App extends Component {
  render() {
    return (
      <>
        <Container className="App">
          <Header />
        </Container>
        <Container>
          <Search />
        </Container>
        <MainContainer />
      </>
    );
  }
}

export default App;
