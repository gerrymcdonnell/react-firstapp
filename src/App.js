import React, { Component } from 'react';
import './App.css';
//import component
import Person from './Person/Person';


class App extends Component {
  
  //state is a special property
  state={
    persons:[
      { name:'maxE',age:34 },
      { name:'ted',age:54 },
      { name:'bob',age:24 }
    ]  
  }

  render() {

    return (
      /**Notes:
        this is jsx code not html
        note the use of className and not class for the div below.
      **/
      <div className="App">
        <h1> first app </h1>

        <button>btn</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>

        <Person name="test23" age="44">My Hobbies: Racing </Person>

      </div>




    );
  }
}

export default App;
