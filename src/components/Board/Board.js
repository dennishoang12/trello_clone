import React, { Component } from 'react';
import './Board.css';
import CreateBoard from './components/CreateBoard.js';

export default class Board extends Component {

  render() {
    if (this.props.isToggled) {
      return (
        <div className="Board-container" onClick={this.props.onToggle}>
          <CreateBoard isToggled={this.props.isToggled} onToggle={this.props.onToggle}/>
        </div>
      )
    }
    else {
      return (
        <div className="Board-container">
          <CreateBoard isToggled={this.props.isToggled} onToggle={this.props.onToggle}/>
        </div>
      );
    }
  }
}
