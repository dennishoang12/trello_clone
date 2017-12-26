import React, { Component } from 'react';
import './Activities.css';

export default class Activities extends Component {
  render() {
    const activities = this.props.activities.map(x => <div className="activity-box">{x}</div>)

    return (
      <div>{activities}</div>
    )
  }
}
