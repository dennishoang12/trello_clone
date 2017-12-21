import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CreateBoard.css';
import { connect } from 'react-redux';
import { toggleCreateBoard } from '../../../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onToggle: () => {
      dispatch(toggleCreateBoard());
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isToggled: state.isToggled
  };
}

class CreateBoard extends Component {

  render() {

    if (this.props.isToggled) {
      return (
        <div className="Board-create-container">
          <div className="Board-create-card-expanded">
            <div>Create Board</div>
            <input type="text"></input>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="Board-create-container">
          <div className="Board-create-card" onClick={this.props.onToggle}>
            <div className="Board-create-text">Create Board...{this.props.isToggled}</div>
          </div>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoard);

CreateBoard.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isToggled: PropTypes.bool.isRequired
}
