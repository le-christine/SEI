import React from 'react';
import './App.css';

import Greet from './Greet';
import Header from './Header';
import List from './List';

const tabs = ['People', 'Animals'];
const animals = [
    {
        img: 'https://vignette1.wikia.nocookie.net/dino/images/2/29/JW_T-Rex.png/revision/latest?cb=20150407205733',
        name: 'T-Rex',
        description: "It's big and scaly"
    },
    {
        img: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/hedgehog-closeup.jpg',
        name: 'Hedgehog',
        description: "It's cute and spiky"
    },
    {
        img: 'https://i1.ytimg.com/vi/x3dvs6C8c7g/maxresdefault.jpg',
        name: 'Sea Pig',
        description: "It's...something..."
    }
]

function App() {
  return (
    <div className="App">
        <Greet />
        <Header tabs={tabs} />
        <List animals={animals} />
    </div>
  );
}

export default App;
