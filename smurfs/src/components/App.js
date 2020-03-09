import React, { Component } from "react";
import "./App.css";
import Smurfs from "./Smurfs";
import SmurfsForm from "./SmurfsForm";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfsForm />
        <Smurfs />
      </div>
    );
  }
}

export default App;
