import React from 'react'
import { ChildrenEx } from '..components/ChildrenEx'

const App() {
  return (
    <div className='container'>
      <ChildrenEx info = {"Children Component"}>
        <h4>This is information inside component as a Tag</h4>
      </ChildrenEx>
    </div>
  )
}

export default App