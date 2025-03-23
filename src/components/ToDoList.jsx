import React, { useState } from 'react'

function ToDoList({ todo, index, deleteTodo }) {

    const [isCompleted, setIsCompleted] = useState(false);

    function markTodo() {
        setIsCompleted(!isCompleted);
        if (!isCompleted) {
            alert('Marked as completed');
        }
    }

    return (
        <div className='todo'>
            <p style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
                <strong>{index + 1}. </strong>{todo}
            </p>
            <div className="action-buttons">
                <input type="checkbox" checked={isCompleted} onChange={markTodo} />
                <button onClick={() => deleteTodo(index)}>Delete</button>

            </div>
        </div>
    )
}

export default ToDoList
