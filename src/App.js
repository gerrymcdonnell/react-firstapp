import React, { Component } from 'react';
import './App.css';
//import component
import Person from './Person/Person';


class App extends Component {
  render() {

    return (
      /**Notes:
        this is jsx code not html
        note the use of className and not class for the div below.
      **/
      <div className="App">
        <h1> first app </h1>
        <Person/>
      </div>




    );
  }
}

export default App;
