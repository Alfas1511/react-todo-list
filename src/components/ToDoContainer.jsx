import React from 'react'
import ToDoList from './ToDoList'

function ToDoContainer({ todoArray, deleteTodo }) {
    return (
        <div className="container">
            {todoArray.map((item, index) => (
                <ToDoList todo={item} index={index} deleteTodo={deleteTodo} />
            ))}
        </div>
    )
}

export default ToDoContainer
