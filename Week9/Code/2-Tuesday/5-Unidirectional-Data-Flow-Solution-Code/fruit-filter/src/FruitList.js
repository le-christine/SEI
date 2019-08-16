import React from 'react';

export const FruitList = props => (
    <ul>
        {props.fruits.map((fruit, key) => <li key={key}>{fruit}</li>)}
    </ul>
)

export const FruitFilter = props => (
    <div>
        <label htmlFor="fruit-filter">Filter these Fruits: </label>
        <input
            type="text"
            value={props.value}
            onChange={props.onChange}
            name="fruit-filter"
        />
    </div>
)
