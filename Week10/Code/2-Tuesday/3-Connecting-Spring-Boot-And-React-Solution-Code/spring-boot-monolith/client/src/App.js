import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(input) {
        axios.get(`http://localhost:8080/api/${input}`)
            .then((res) => {
                this.setState({ data: res.data })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    renderData() {
        return this.state.data.map((single, index) => {
            return <li key={index}>{single}</li>;
        })
    }

    render() {
        console.log(this.state.books);
        return (
            <div className="App">
                <button onClick={() => this.handleButtonClick('books')}>Get Books!</button>
                <button onClick={() => this.handleButtonClick('songs')}>Get Songs!</button>
                <ul>
                    {this.state.data.length > 0 ? this.renderData() : '' }
                </ul>
            </div>
        );
    }
}

export default App;
