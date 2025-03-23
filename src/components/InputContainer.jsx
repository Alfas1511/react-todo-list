import React from 'react'

function InputContainer({ inputVal, writeTodo, addTodo }) {
    return (
        <div className="input-container">
            <input type="text" placeholder='Add Todo..' value={inputVal} onChange={writeTodo} />
            <button onClick={addTodo}>+</button>
        </div>
    )
}

export default InputContainer
