import React, { Component } from 'react';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import RemoveFromQueue from '@material-ui/icons/RemoveFromQueue';

class Fave extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.stopPropagation();
        this.props.onFaveToggle();
    }

    render() {
        const isFave = this.props.isFave ? 'remove_from_queue' : 'add_to_queue';
        return (
            <div
                className={`film-row-fave ${isFave}`}
                onClick={this.handleClick}
            >
                {this.props.isFave ? <RemoveFromQueue /> : <AddToQueueIcon />}
            </div>
        )
    }
}

export default Fave;
