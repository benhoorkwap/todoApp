import React from "react";
import { removeTodo } from "../redux/features/todosSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import styles from './todoList.module.css'





const TodoList = () => {
    const todosState = useAppSelector(state => state.todos)
    const dispatch = useAppDispatch()

    return (
        <ul className={styles.todoList}>
            {
                todosState.todos.map(todo => 
                <li key={todo.id}
                    className={styles.todoListItem}>
                    <span className={styles.todoText}>{todo.text}</span>
                    <button onClick={e => dispatch(removeTodo(todo.id))} className={styles.exitBtnIcon}>
                        <FontAwesomeIcon icon={faXmark}/>
                    </button>
                </li> )
            }
        </ul>
    )
}


export default TodoList