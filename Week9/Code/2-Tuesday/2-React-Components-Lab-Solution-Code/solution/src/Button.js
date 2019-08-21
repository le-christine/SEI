import React, {Component} from 'react';

class Button extends Component {
    render() {
        return (
            <button className="tabs">{this.props.text}</button>
        )
    }
}

export default Button;
