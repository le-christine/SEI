import React, {Component} from 'react';
import Card from './Card';

class List extends Component {
    render() {
        return (
            <div>
                {this.props.animals.map((animal, index) => {
                    return <Card key={index} animal={animal} />
                })}
            </div>
        )
    }
}

export default List;
