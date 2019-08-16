import React, {Component} from 'react';

import {FruitList} from './FruitList';
import {FruitFilter} from './FruitList';

const fruitList = [
    'Acai',
    'Aceola',
    'Apple',
    'Apricots',
    'Avocado',
    'Banana',
    'Blackberry',
    'Blueberries',
    'Camu Camu berry',
    'Cherries',
    'Coconut',
    'Cranberry',
    'Cucumber',
    'Currents',
    'Dates',
    'Durian',
    'Fig',
    'Goji berries',
    'Gooseberry',
    'Grapefruit',
    'Grapes',
    'Jackfruit',
    'Kiwi',
    'Kumquat',
    'Lemon',
    'Lime',
    'Lucuma',
    'Lychee',
    'Mango',
    'Mangosteen',
    'Melon',
    'Mulberry',
    'Nectarine',
    'Orange',
    'Papaya',
    'Passion Fruit',
    'Peach',
    'Pear',
    'Pineapple',
    'Plum',
    'Pomegranate',
    'Pomelo',
    'Prickly Pear',
    'Prunes',
    'Raspberries',
    'Strawberries',
    'Tangerine/Clementine',
    'Watermelon',
];

class FruitContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // initialize the fruit list to the full list passed in props
            fruitsToDisplay: fruitList,
            // initialize the unmatched fruits with just an empty list.
            unmatchedFruits: [],
            // intialize the filter value to an empty string
            filterValue: '',
        };
        // bind the context of our filterChange event handler
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleFilterChange(event) {
        event.preventDefault();
        const filterValue = event.target.value;
        this.setState((prevState, props) => {
            // remove fruits that don't contain the filter value
            const filteredFruitList = fruitList.filter(fruit =>
                fruit.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()));
                // perform the opposite logic to create a list of fruits that don't match.
                const unmatchedFruits = fruitList.filter(fruit =>
                    !fruit.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()));
                    // return new state with the filtered fruit list and the new value of the filter
            return {
                fruitsToDisplay: filteredFruitList,
                unmatchedFruits: unmatchedFruits,
                filterValue,
            };
        })
    }

    render() {
        return (
            <div>
                <FruitFilter
                    value={this.state.filterValue}
                    onChange={this.handleFilterChange}
                />
                <FruitList fruits={this.state.fruitsToDisplay} />
            </div>
        )
    }
}

export default FruitContainer;
