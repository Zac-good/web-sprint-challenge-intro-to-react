import React, { useState, useEffect }from 'react';
import './App.css';
import axios from 'axios';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

const [id, setId] = useState('1')
const [name, setName] = useState([])
const [year, setYear] = useState('1')

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
  axios.get('https://swapi.dev/api/people')
  .then(res => {
    console.log(res.data)
  })
  .catch()
}, [])
  
  return (
    <div className="App">
      <h1 className="Header">REACT WARS</h1>
    </div>
  );
}

export default App;
