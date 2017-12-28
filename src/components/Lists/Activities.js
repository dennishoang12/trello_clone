import React, { Component } from 'react';
import './Activities.css';
import { toggleActivity } from '../../actions';
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch) => {
  return {
    onToggleActivity: (list_id, activity_id) => {
      dispatch(toggleActivity(list_id, activity_id))
    }
  }

}

class Activities extends Component {
  render() {

    const activities = this.props.activities.map(x =>
      <div className="activity-box" onClick={() => {this.props.onToggleActivity(this.props.list_id, x.activity_id)}}>
        <div className={x.complete? "complete": "not-complete"}></div>
        {x.text}
      </div>)

    return (
      <div>{activities}</div>
    )
  }
}

export default connect(null, mapDispatchToProps)(Activities);
