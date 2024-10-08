import { createSlice ,nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos : [
    ]
}

export const TodoSlice = createSlice({
    name : 'todo' ,
    initialState : initialState ,
    reducers : {
        addTodo : (state , action) => {
            const todo = {
                id : nanoid() ,
                text : action.payload ,
                completed : false 
            }

            state.todos.push(todo)
        },
        removeTodo : (state , action) =>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo : (state , action) =>{
            state.todos = state.todos.map( todo => (todo.id === action.payload.id) ? {...todo , completed : !todo.completed } : todo )
        }
    }
})

export const { addTodo , removeTodo ,updateTodo } = TodoSlice.actions

export default TodoSlice.reducer