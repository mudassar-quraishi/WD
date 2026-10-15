import React, { useEffect, useState } from 'react'

const UseEffectEx = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("KIET")

  useEffect(()=>{
    alert("Name changed to=" + name)
  },[name])

  return (
<div>   
    <h2> UseEffect Hook Example</h2>
    <h2>Count ={count}</h2>
    <button className='btn btn-primary' onClick={()=>setCount(count+1)}>Inc</button>
    <h2>{name}</h2>
    <button className='btn btn-primary' onClick={()=>setName("MCA KIET")}>Inc</button>
    </div>
  )
}

export default UseEffectEx