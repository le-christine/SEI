import React, { Component } from 'react';

class Button extends Component{
  state = {
    hover: false,
    click: false
  }

  hoverEnter = () => {
    this.setState({hover: true});
  }

  hoverLeave = () => {
    this.setState({hover: false});
  }

  onClick = () => {
      this.setState({click: true});
  }
  render(){
    const buttonStyles = {
      borderRadius: "5px",
      padding: "15px 25px",
      fontSize: "22px",
      textDecoration: "none",
      margin: "20px",
      color: "#fff",
      position: "relative",
      display: "inline-block",
      backgroundColor: this.state.hover ? "#6FC6FF" : "#55acee",
      boxShadow: this.state.click ? "0px 1px 0px 0px" : "0px 5px 0px 0px #3C93D5",
      transform: this.state.click ? "translate(0px, 5px)" : ''
    };

    return (
        <a
            href="#"
            style={buttonStyles}
            onMouseEnter={this.hoverEnter}
            onMouseLeave={this.hoverLeave}
            onClick={this.onClick}
        >Click Me</a>
    )
  }
}
export default Button;
