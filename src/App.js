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


  switchNameHandler=()=>{
    //dont do this
    //this.state.persons[0].name='qwerty';

    //must use the fucntion
    this.setState({
      persons:[
        { name:'maxE',age:99 },
        { name:'ted',age:99 },
        { name:'bob',age:99 }
      ]  
    })
  }
  //emded here vid 41

  render() {

    return (
      /**Notes:
        this is jsx code not html
        note the use of className and not class for the div below.
      **/
      <div className="App">
        <h1> first app </h1>

        <button onClick={this.switchNameHandler}>Click me</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>

        <Person name="test23" age="44">My Hobbies: Racing </Person>

      </div>




    );
  }
}

export default App;
