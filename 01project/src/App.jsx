import { useState } from 'react'

import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const addvalue=()=>{
    if(count<20)
    setCount(count+1)
  }
  const subvalue=()=>{
    if(count>0)
    setCount(count-1)
  }
   
    
  return (
    
    <>
       <h1>counter value {count}</h1>
    <button
    onClick={addvalue}>increase number</button>
    <br />
    <button
    onClick={subvalue}>Decrease number </button>
    </>
  )
}

export default App
