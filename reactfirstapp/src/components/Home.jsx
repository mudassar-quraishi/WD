import React, { useState } from 'react'
import A from '../components/useContextEx/A'
export const contextInfo = React.createContext();

const Home = () => {
    const [info, setInfo] = useState("Context Use");
  return (
    <div>
        <h2> Home Component</h2>
        <contextInfo.Provider value = {{info, setInfo}}>
        <A />
        </contextInfo.Provider>
    </div>
  )
}

export default Home