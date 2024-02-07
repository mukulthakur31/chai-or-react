import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{
        id:1,
        text:"hello world"
    }]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updatetodo:(state,action)=>{
         state.todos.map((todo)=>(todo.id===action.payload.id ? todo.text=action.payload.input : todo.text))
        }
      
    }

})

export const {addTodo,removeTodo,updatetodo}=todoSlice.actions
export default todoSlice.reducer