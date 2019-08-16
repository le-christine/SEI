import React, {Component} from 'react';

class Mood extends Component {
    constructor(props) {
        super(props);

        this.state = {
            moodPoints: 0
        }

        this.increaseMood = this.increaseMood.bind(this);
        this.decreaseMood = this.decreaseMood.bind(this);
    }

    increaseMood(e) {
        this.setState({
            moodPoints: this.state.moodPoints > 9 ? 1 : this.state.moodPoints + 1
        })
    }

    decreaseMood(e) {
        this.setState({
            moodPoints: this.state.moodPoints - 1
        })
    }

    render() {
        return (
            <div class={this.state.moodPoints > 5 ? 'happy' : 'sad'}>
                <p>On a scale of 1-10</p>
                <p>You are {this.props.mood}: {this.state.moodPoints}</p>
                <button onClick={this.increaseMood}>Increase {this.props.mood}</button>
                <button onClick={this.decreaseMood}>Decrease {this.props.mood}</button>
            </div>
        )
    }
}

export default Mood;
