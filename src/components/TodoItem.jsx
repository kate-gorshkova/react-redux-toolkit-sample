import React from "react";
import { useDispatch } from "react-redux";
import {removeTodo, toggleTodoCompleted} from '../store/todoSlice'

const TodoItem = ({ id, text, completed }) => {

    const dispatch = useDispatch()

    const removeTask = () => {
        dispatch(removeTodo({id}))
    }

    const toggleTodoCompletedTask = () => {
        dispatch(toggleTodoCompleted({id}))
    }

    return (
        <li>
            <input
                type='checkbox'
                checked={completed}
                onChange={toggleTodoCompletedTask}
            />
            <span>{text}</span>
            <span className='delete' onClick={removeTask}>
                &times;
            </span>
        </li>
    );
};

export default TodoItem;
