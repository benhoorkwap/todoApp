import React, { SyntheticEvent, useState } from "react";
import { addTodo } from "../redux/features/todosSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import TodoList from "./TodoList";
import styles from "./todos.module.css"



const Todos = () => {   
    const [todoText, SetTodoText] = useState('')
    const [todoExist, SetTodoExist] = useState(false)
    const dispatch = useAppDispatch()
    const todos = useAppSelector(state => state.todos).todos
    console.log(todos)



  

    const addTodoHandler = (e: SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(todoText.length === 0) return
        if(todos.find(todo => todo.text === todoText)) {SetTodoExist(!todoExist); return } 
        dispatch(addTodo(todoText))
        SetTodoText('')

    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key !== "Enter" || todoText.length === 0)  return 
        if(todos.find(todo => todo.text === todoText)) {SetTodoExist(!todoExist); return } 
        dispatch(addTodo(todoText))
        SetTodoText('')
     
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(todoExist) SetTodoExist(!todoExist)
        SetTodoText(e.target.value)
    }

    return (
        <div className={styles.todos}>
            <input 
                className={styles.addTodoInput}
                type={'text'} 
                placeholder="Add to do" 
                value={todoText}
                onKeyDown={handleKeyDown}
                onChange={handleOnChange}/>
            <button onClick={addTodoHandler} className={styles.addTodoBtn}>Add Todo</button>
            <div style={{display: todoExist ? 'block' : 'none'}} className={styles.todoExist}>{`You already have ${todoText} in your Todo list.`}</div>
            <TodoList />
            
        </div>
        
    )
}

export default Todos
