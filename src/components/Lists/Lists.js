import React, { Component } from 'react';
import './Lists.css'
import { connect } from 'react-redux';
import Activities from './Activities';
import { addActivity, createList } from '../../actions';


const mapStateToProps = (state) => {
  return {
    board_id: state.board_id,
    lists: state.lists
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddActivity: (list_id, text) => {
      dispatch(addActivity(list_id, text));
    },
    onCreateList: (board_id, title) => {
      dispatch(createList(board_id, title));
    }
  }
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
        <input onKeyPress={e => {
          if (e.key == 'Enter') {
            if (!e.target.value.trim()) {
              return;
            }
            this.props.onAddActivity(x.list_id, e.target.value);
            e.target.value = '';
          }
        }} className="input-box"></input>
      </div>)

    return (
      <div className="lists-container">
        {body}
        <div className="lists-create-container">
            <h2>Create new list</h2>
            <input onKeyPress={e => {
              if (e.key == 'Enter') {
                if (!e.target.value.trim()) {
                  return;
                }
                this.props.onCreateList(this.props.board_id, e.target.value);
                e.target.value = '';
              }
            }}>
            </input>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
