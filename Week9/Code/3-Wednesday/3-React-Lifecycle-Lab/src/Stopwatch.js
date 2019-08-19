import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counters: [{
                counter: 0,
                increment: false,
                started: false,
            }]
        }

        this.handleStart = this.handleStart.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handlePause = this.handlePause.bind(this);
        this.addCounter = this.addCounter.bind(this);
    }

    addCounter() {
        this.setState({
            counters: [...this.state.counters, {
                counter: 0,
                increment: false,
                started: false,
            }]
        })
    }

    handleStart(index) {
        console.log(this.state.counters);
        if (!this.state.increment) {
            let counters = this.state.counters;
            counters[index].incrementer = setInterval( () => {
                let counters = this.state.counters;
                counters[index].counter++;
                counters[index].increment = true;
                counters[index].started = true;
                this.setState({
                    counters: counters,
                })}, 1000
            );
        }
    }

    handleReset(index) {
        let counters = this.state.counters;
        clearInterval(counters[index].incrementer);
        counters[index].counter = 0;
        counters[index].increment = false;
        counters[index].started = false;

        this.setState({
            counters: counters,
        })
    }

    handlePause(index) {
        let counters = this.state.counters;
        clearInterval(counters[index].incrementer);
        counters[index].increment = false;
        counters[index].started = false;

        this.setState({
            counters: counters
        })
    }

    render() {
        return (
            <div className="stopwatch">
                <button onClick={this.addCounter}>Add a counter!</button>
                { this.state.counters.map((counter, index) => {
                    return (
                        <div key={index}>
                            <h1>{counter.counter}</h1>
                            <div className="controls">
                                <button onClick={() => this.handleStart(index)}>Start</button>
                                { (counter.started || counter.counter > 0) && <button onClick={() => this.handlePause(index)}>Pause</button> }
                                { (counter.started || counter.counter > 0) && <button onClick={() => this.handleReset(index)}>Reset</button> }
                            </div>
                        </div>
                    )}
                )}
            </div>
        );
    }
}

export default Stopwatch;
