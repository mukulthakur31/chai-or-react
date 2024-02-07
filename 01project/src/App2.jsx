import { useState } from 'react'
import "./App2.css"



function App2() {
    const [color ,setcolor]=useState("pink")

  return (
    
    <>
    <div className="full"
     style={{backgroundColor:color}}>
    <div className="bar">
        <div className="colors">
            <button className='red'
             style={{backgroundColor:"red"}}
            onClick={()=>{
                setcolor("red")
            }}
            >Red</button>
            <button className='red'
             style={{backgroundColor:"green"}}
            onClick={()=>{
                setcolor("green")
            }}
            >green</button>
            <button className='red'
             style={{backgroundColor:"yellow"}}
            onClick={()=>{
                setcolor("yellow")
            }}
            >yellow</button>
            <button className='red'
             style={{backgroundColor:"black"}}
            onClick={()=>{
                setcolor("black")
            }}
            >black</button>
        </div>
    </div>
    </div>
   
    </>
  )
}
export default App2