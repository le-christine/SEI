import React, {Component} from 'react';
import './App.css';

import Mood from './Mood';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Mood mood={'happy'}/>
            </div>
        );
    }
}

export default App;
