/**
first component
a component is a function returning jsx
**/

//ES5 syntax
/*var person=function(){
}*/

import React from 'react';

//ES6 best practise for react
/**
 * sing curly brackets denote javascript
 */
const person = (props) => {
  return <p>im {props.name}, and im {props.age} old</p>
};

export default person;
