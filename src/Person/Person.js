/**
first component
a component is a function returning jsx
**/

//ES5 syntax
/*var person=function(){
}*/

import React from 'react';

//ES6 best practise for react
const person=()=>{
  return <p>im a person </p>
};

export default person;
