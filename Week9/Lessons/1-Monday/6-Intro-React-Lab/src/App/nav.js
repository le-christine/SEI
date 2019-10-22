import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <button
        onClick = {this.props.onClickPrev}
        className="btn btn-default">Previous Recipe</button>
        <button
        onClick = {this.props.onClickNext}
        className="btn btn-default">Next Recipe</button>
      </nav>
    )
  }
}

export default Nav;
