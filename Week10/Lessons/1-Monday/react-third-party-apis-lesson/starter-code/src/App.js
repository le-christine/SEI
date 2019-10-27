import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      dogPicURL: '',
    }
  }

  retrieveDogPic = () => {
    // Write your API call here!
  }

  render() {
    return (
      <div className="dog-pics-app">
        <h1>Dog Pics!</h1>
        <div>Click the button below to retrieve a dog pic!</div>
        <button
          onClick={this.retrieveDogPic}
          className="dog-pics-button"
        >
          Click for a dog pic!
        </button>
        <img src={this.state.dogPicURL} alt="Dog Pic!"/>
      </div>
    );
  }
}

export default App;
