import React, { Component } from 'react';
import './App2.css';
import DisplayNumberRoot from './components2/DisplayNumberRoot';
import AddNumberRoot from './components2/AddNumberRoot';

class  App2 extends Component {
    state = {number : 0}

    render() {    
        return (
            <div className='App2'>
                <h1>ROOT</h1>
                <AddNumberRoot></AddNumberRoot>
                <DisplayNumberRoot></DisplayNumberRoot>
            </div>
        );
    }
}
export default App2;