import { useEffect, useState } from 'react'
import './App.css'
import { ContextProvider } from './TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'


function App() {
 const [todos,settodos]=useState([])
 const addtodo=(todogetfrominput)=>{
         settodos((prev)=>[{id:Date.now(),...todogetfrominput},...prev])
 }
 const updatetodo=(id,todogetfrominput)=>{
        settodos((prev)=> prev.map((prevtodo)=>(prevtodo.id===id ? todogetfrominput : prevtodo )))
 }

 const deletetodo=(id)=>{
         settodos((prev)=>prev.filter((prevtodo)=>prevtodo.id!=id))
 }
 const toggletodo=(id)=>{
          settodos((prev)=>prev.map((prevtodo)=>prevtodo.id === id ? {...prevtodo,completed:!prevtodo.completed} : prevtodo))
 }
  
 useEffect(()=>{
    const todoswhenreload=JSON.parse(localStorage.getItem("todosinlocalstorage"))
    if(todoswhenreload && todoswhenreload.length>0){
        settodos(todoswhenreload)
    }
 },[])

 useEffect(()=>{
    localStorage.setItem("todosinlocalstorage",JSON.stringify(todos))
 },[todos])
  return (
<ContextProvider value={{todos,addtodo,updatetodo,deletetodo,toggletodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
            {/* Todo form goes here */} 
            <TodoForm/>
        </div>
        <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div key={todo.id}
              className='w-full'
              >
                 <TodoItem contexttodo={todo}/>
              </div>
            ))}
        </div>
    </div>
  </div>
  </ContextProvider>
  )
}

export default App
