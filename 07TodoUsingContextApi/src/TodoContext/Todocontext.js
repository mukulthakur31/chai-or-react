import { createContext, useContext } from "react";


 export const TodoContext=createContext({
    todos:[{
        id:1,
        todo:"todo msg",
        completed: false
    }],
    addtodo:(todo)=>{},
    updatetodo:(id,todo)=>{},
    deletetodo:(id)=>{},
    toggletodo:(id)=>{}

 })

 export const ContextProvider=TodoContext.Provider

 export const usetodo=()=>{
    
     return useContext(TodoContext)
 }

