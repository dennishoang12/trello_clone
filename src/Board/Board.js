import React, { Component } from 'react';
import './Board.css';
import CreateBoard from './components/CreateBoard.js';

export default class Board extends Component {

  render() {
    return (
      <div className="Board-container">
        <CreateBoard />
      </div>
    )
  }
}
