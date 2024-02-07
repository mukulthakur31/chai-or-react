import React, { useState } from 'react'
import { usetodo } from '../TodoContext';



function TodoForm() {
    const[currenttodo,settodo] =useState("")
    const{addtodo}=usetodo()
    const add= (e)=>{
        e.preventDefault()
        if(!currenttodo) return
       
        addtodo({todoinside:currenttodo,completed:false})
        settodo("")
    }
    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={currenttodo}
                onChange={(e)=>settodo(e.target.value)}

            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;