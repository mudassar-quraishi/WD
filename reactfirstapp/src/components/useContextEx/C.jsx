import React, { useContext } from 'react'
import { contextInfo } from '../Home'

const C = () => {
    const constObj = useContext(contextInfo)
  return (
    <div>
       <h1>{constObj.info}</h1>
       <button onClick={()=> constObj.setInfo("New info")}>Click me</button>

    </div>
  )
}

export default C