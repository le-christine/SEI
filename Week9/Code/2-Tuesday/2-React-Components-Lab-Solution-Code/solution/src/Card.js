import React, {Component} from 'react';

class Card extends Component {
    render() {
        return (
            <div className="card-container">
                <div className="card">
                    <img src={this.props.animal.img} />
                    <h3>{this.props.animal.name}</h3>
                    <p>{this.props.animal.description}</p>
                </div>
            </div>
        )
    }
}

export default Card;
