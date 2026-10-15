import React from 'react'
import { useState } from 'react';

const StateObj = () => {

  const[nameObj, setName] = useState(initName)
  const[age, setAge] = useState()

  return (
    <div>
      <h1>Name : {name}</h1>
      <h2>Age : {age}</h2>
      <button onClick={() => {
        const temp = prompt();
        if (temp) setName(temp);
      }}>Enter your name</button>

      <button onClick={()=>{
        const temp = prompt();
        if(temp) setAge(temp);
      }}>Enter your age</button>
    </div>

  )
}

export default StateObj