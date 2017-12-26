import React, { Component } from 'react';
import './Lists.css'
import { connect } from 'react-redux';
import Activities from './Activities';


const mapStateToProps = (state) => {
  return {
    board_id: state.board_id,
    lists: state.lists
  };
}

class Lists extends Component {


  render() {

    const list = this.props.lists.filter(x => x.board_id === this.props.board_id);

    const body = list.map(x =>
      <div className="list-container">
        <h2>
        {x.title}
        </h2>
        <Activities activities={x.activities}/>
        <input className="input-box"/>
      </div>)

    return (
      <div className="lists-container">
        {body}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Lists);
