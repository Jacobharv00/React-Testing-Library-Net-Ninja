import React, { useState } from 'react'
import "./AddInput.css"
import { v4 } from "uuid"
<<<<<<< HEAD
=======
//import TodoList from '../TodoList/TodoList'
>>>>>>> 01-Starter-Project

function AddInput ( { setTodos, todos } ) {

  const [ todo, setTodo ] = useState( "" )

<<<<<<< HEAD
    const addTodo = () => {
        if(!todo) return
        let updatedTodos = [
            ...todos,
            {
                id: v4(),
                task: todo,
                completed: false
            }
        ]
        setTodos(updatedTodos);
        setTodo("")
    }
=======
  const addTodo = () => {
    let updatedTodos = [
      ...todos,
      {
        id: v4(),
        task: todo,
        completed: false
      }
    ]
    setTodos( updatedTodos )
    setTodo( '' )
  }
>>>>>>> 01-Starter-Project

  return (
    <div className="input-container">
      <input
        className="input"
        value={ todo }
        onChange={ ( e ) => setTodo( e.target.value ) }
        placeholder="Add a new task here..."
      />
      <button
        className="add-btn"
        onClick={ addTodo }
      >
        Add
      </button>
    </div>
  )
}

export default AddInput
