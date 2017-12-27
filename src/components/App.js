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
    var title = <h1 className="App-title">Trello</h1>

    if (this.props.board_id !== -1) {
      body = (
        <div className="List-container">
          <Lists />
        </div>
      );

      title = <h1 className="App-title" onClick={this.props.onToggleHome}>Trello</h1>
    }

    return (
      <div className="App">
        <header className="App-header">
          {title}
        </header>
        { body }
      </div>
    );


  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
