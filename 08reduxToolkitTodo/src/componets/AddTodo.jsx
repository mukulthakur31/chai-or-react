import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo,updatetodo } from '../features/todo/todoSlice'
import Todo from './Todos'

function AddTodo() {
      const [input,setinput]=useState("")
      const [id,setid]=useState("")
      const [editable,seteditable]=useState(false)
      const Dispatch=useDispatch()


      const adddata=(e)=>{
        console.log("hello");
            e.preventDefault()
            Dispatch(addTodo(input))
            setinput("")
      }
      const handleupdate=(e)=>{
        e.preventDefault()
        Dispatch(updatetodo({id,input}))
        setinput('')
        seteditable('false')
      }
      return (
        <>
        <form onSubmit={adddata} className="space-x-3 mt-12">
          <input
            type="text"
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Enter a Todo..."
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />
         { editable==true ?  <button
            onClick={handleupdate}
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            updatetodo
          </button> : <button
           type="submit"
           className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
         >
           Add Todo
         </button>
          }
        </form>
        <Todo setId={setid} setInput={setinput} setedItable={seteditable}/>
        </>
      )
    }
    
    export default AddTodo