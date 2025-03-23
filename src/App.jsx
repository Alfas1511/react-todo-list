import { useState } from 'react'
import "./App.css"
import InputContainer from './components/InputContainer'
import ToDoContainer from './components/ToDoContainer'

function App() {

  const [inputVal, setInputVal] = useState("");

  const [todoArray, setToDoArray] = useState([]);

  function writeTodo(e) {
    setInputVal(e.target.value);
  }

  function addTodo() {
    if (inputVal != '') {
      setToDoArray((prevTodos) => [...prevTodos, inputVal]);
      setInputVal('');
    }
  }

  function deleteTodo(todoIndex) {
    if (confirm('Do yo want to delete?')) {
      setToDoArray((prevTodos) =>
        prevTodos.filter((prevTodos, prevTodosIndex) => {
          return prevTodosIndex != todoIndex;
        }));
    }
  }

  console.log(todoArray)


  return (

    <main>
      <h1>ToDo List</h1>

      <InputContainer inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo} />

      <ToDoContainer todoArray={todoArray} deleteTodo={deleteTodo} />

    </main >
  )
}

export default App
