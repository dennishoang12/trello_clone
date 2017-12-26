import React, { Component } from 'react';
import './Board.css';
import CreateBoard from './components/CreateBoard.js';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { deleteBoard, toggleCreateBoard, toggleBoard } from '../../actions'

const mapStateToProps = (state) => {
  return ({
    boards: state.boards,
    isToggled: state.isToggled
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    onDeleteBoard: (id) => {
      dispatch(deleteBoard(id));
    },
    onToggle: () => {
      dispatch(toggleCreateBoard());
    },
    onToggleBoard: (id) => {
      dispatch(toggleBoard(id));
    }
  })
}

class Boards extends Component {

  render() {
      const board = this.props.boards.map(x =>
        <div className="Board-create-container" key={x.id} onClick={() => this.props.onToggleBoard(x.id)}>
          <div className="Board-create-card">
            <div className="delete-me" onClick={() => this.props.onDeleteBoard(x.id)}></div>
            <div className="Board-create-text">{x.name}</div>
          </div>
        </div>
      );

      return (
        <div className="Board-container">
          {board}
          <CreateBoard />
        </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Boards);

Boards.propTypes = {
  boards: PropTypes.array.isRequired,
  onDeleteBoard: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired
}
