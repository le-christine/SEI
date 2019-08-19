import React, { Component } from 'react'
import './App.css'


class Car extends Component {

  constructor(props) {
    super(props);
    this.state = {
      speed: props.speed || 0,
    }

    this.incrementSpeed = this.incrementSpeed.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.setTimeout(this.incrementSpeed, 1000);
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }

  handleClick() {
    const colors = ['white', 'purple', 'green', 'blue'];
    const random = Math.floor(Math.random() * 4);
    document.body.style.backgroundColor = colors[random];
  }

  incrementSpeed() {
    this.setState(prevState => ({ speed: prevState.speed + 1 }));
    window.setTimeout(this.incrementSpeed, 1000);
  }

  render() {
    return (
      <div>
        This {this.props.model} is going {this.state.speed} miles per hour!
      </div>
    );
  }

}

const App = () => <Car model="Corvette" speed={60} />;

export default App
