import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TodosState } from '../../utils/types'

// Todo Type


const initialState: TodosState = {
    todos: []
}


const TodosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.todos.push({
                id: state.todos.length + 1,
                text: action.payload})
        },

        removeTodo: (state, action: PayloadAction<number>) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload)
            state.todos.splice(index, 1)
        }
    }
})



export const {addTodo, removeTodo} = TodosSlice.actions
export default TodosSlice.reducer





