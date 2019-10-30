import React, { Component } from 'react';

class Course extends Component {
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.code}</div>
        <button onClick={this.props.delete}>Delete!</button>
      </div>
    )
  }
}

export default Course;
