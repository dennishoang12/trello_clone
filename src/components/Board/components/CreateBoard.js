import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CreateBoard.css';
import { connect } from 'react-redux';
import { toggleCreateBoard, addBoard } from '../../../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onToggle: () => {
      dispatch(toggleCreateBoard());
    },
    onCreateBoard: (name) => {
      dispatch(addBoard(name));
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isToggled: state.isToggled,
    boards: state.boards
  };
}

class CreateBoard extends Component {

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleClick() {
    if (!this.props.isToggled) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.props.onToggle();
  }

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleClick();
  }

  render() {

    if (this.props.isToggled) {
      return (
        <div className="Board-create-container" ref={node => {this.node = node}}>
          <div className="Board-create-card-expanded">
            <div>Create Board</div>
            <form onSubmit={e => {
              e.preventDefault();
              if (!this.input.value.trim()) {
                return;
              }
              this.props.onCreateBoard(this.input.value);
              this.input.value = '';
              this.handleClick();
            }}>
              <input ref={node => {this.input = node}} className="Board-create-input" autoFocus></input>

            </form>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="Board-create-container" ref={node => {this.node = node}}>
          <div className="Board-create-card" onClick={this.handleClick}>
            <div className="Board-create-text">Create Board...</div>
          </div>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoard);

CreateBoard.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isToggled: PropTypes.bool.isRequired,
  onCreateBoard: PropTypes.func.isRequired,
}
