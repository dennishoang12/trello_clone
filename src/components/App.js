import React, { Component } from 'react';
import './App.css';
import Boards from './Board/Boards';
import Lists from './Lists/Lists';
import { connect } from "react-redux";
import { toggleHome } from '../actions'

const mapStateToProps = (state) => {
  return {
    board_id: state.board_id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleHome: () => {
      dispatch(toggleHome());
    }
  }
}


class App extends Component {
  render() {

    var body = <Boards />;

    if (this.props.board_id !== -1) {
      body = (
        <div className="List-container">
          <div onClick={this.props.onToggleHome}>Get me out!</div>
          <Lists />
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Trello</h1>
        </header>
        { body }
      </div>
    );


  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
