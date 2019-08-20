import React, { Component } from 'react';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import RemoveFromQueue from '@material-ui/icons/RemoveFromQueue';

class Fave extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFave: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.stopPropagation();

        this.setState({
            isFave: !this.state.isFave
        })
    }

    render() {
        const isFave = this.state.isFave ? 'remove_from_queue' : 'add_to_queue';
        return (
            <div
                className={`film-row-fave ${isFave}`}
                onClick={this.handleClick}
            >
                {this.state.isFave ? <RemoveFromQueue /> : <AddToQueueIcon />}
            </div>
        )
    }
}

export default Fave;
