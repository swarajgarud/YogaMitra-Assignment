//Write a function in React that takes an array of strings and displays each string as a separate list item in an unordered list element.
//Ans:- 
import React from 'react';
function StringList({ strings }) {
  return (
    <ul>
      {strings.map((str, index) => (
        <li key={index}>{str}</li>
      ))}
    </ul>
  );
}
