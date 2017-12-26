import React, { Component } from 'react';
import './App.css';
import Boards from './Board/Boards.js';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    board_id: state.board_id
  }
}


class App extends Component {
  render() {

    if (this.props.board_id === -1) {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Trello</h1>
          </header>
          <Boards />
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Trello</h1>
          </header>
          {this.props.board_id}
        </div>
      );
    }

  }
}



export default connect(mapStateToProps)(App);
