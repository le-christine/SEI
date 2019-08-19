import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            increment: false
        }

        this.handleStart = this.handleStart.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handlePause = this.handlePause.bind(this);
    }

    handleStart() {
        if (!this.state.increment) {
            this.incrementer = setInterval( () =>
              this.setState({
                counter: this.state.counter + 1,
                increment: true
              })
            , 1000);
        }
    }

    handleReset() {
        clearInterval(this.incrementer);
        this.setState({
            counter: 0,
            increment: false
        })
    }

    handlePause() {
        clearInterval(this.incrementer);
        this.setState({
            increment: false
        })
    }

    render() {
        return (
            <div className="stopwatch">
            <h1>{this.state.counter}</h1>
                <div className="controls">
                    <button onClick={this.handleReset}>Reset</button>
                    <button onClick={this.handleStart}>Start</button>
                    <button onClick={this.handlePause}>Pause</button>
                </div>
            </div>
        );
    }
}

export default Stopwatch;
