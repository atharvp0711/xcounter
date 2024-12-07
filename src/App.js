import React from 'react' ;
import {useState} from 'react' ; 

const App = () => {

  const [count, setCount] = useState(0);
  return (
    <div>
      <h1> Counter App </h1>
      <h4> Count: {count} </h4>
      <button onClick = { () => setCount(count+1)} style = {{marginRgith : "10px"}}> Increment </button>
      <button onClick = { () => setCount(count-1)}> Decrement </button>
    </div>
  )
}

export default App
