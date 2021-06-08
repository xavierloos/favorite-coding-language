import React from 'react';
import '../App.css';
function Usercard(language) {
  return (
    <div>
      <h1>Usercard</h1>
      <div>{language.language}</div>
    </div>
  );
}


export default Usercard;