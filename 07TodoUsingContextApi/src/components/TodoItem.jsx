import React from 'react'
import { usetodo } from '../TodoContext';
import { useState } from 'react';

function TodoItem({ contexttodo }) {
   const [isTodoEditable,setIsTodoEditable]=useState(false)
  const[todoMsg,setTodoMsg]=useState(contexttodo.todoinside)
    const {deletetodo,updatetodo,toggletodo}=usetodo()
     const editTodo=()=>{
      updatetodo(contexttodo.id,{...contexttodo,todoinside:todoMsg})
      setIsTodoEditable(false)
     }
     const toggleCompleted=()=>{
        toggletodo(contexttodo.id)
     }
  return (
      <div
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
            contexttodo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}
      >
          <input
              type="checkbox"
              className="cursor-pointer" 
              checked={contexttodo.completed}
              onChange={toggleCompleted}
          />
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                  isTodoEditable ? "border-black/10 px-2" : "border-transparent"
              } ${contexttodo.completed ? "line-through" : ""}`}
              value={todoMsg}
              onChange={(e) => setTodoMsg(e.target.value)}
              readOnly={!isTodoEditable}
          />
          {/* Edit, Save Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (contexttodo.completed) return;

                  if (isTodoEditable) {
                      editTodo();
                  } else setIsTodoEditable((prev) => !prev);
              }}
              disabled={contexttodo.completed}
          >
              {isTodoEditable ? "📁" : "✏️"}
          </button>
          {/* Delete Todo Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deletetodo(contexttodo.id)}
          >
              ❌
          </button>
      </div>
  );
}

export default TodoItem;
