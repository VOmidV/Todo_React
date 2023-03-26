import './App.css';
import React, { useState } from 'react'
import NewTodoForm from './NewTodoForm';
import Todo from './todo';

function TodoList() {
  const [value, setValue] = useState([])
  const add = val =>{
    setValue(boxes => [...boxes, val]);
  }

  const remove = id => {
    setValue(todos => todos.filter(todo => todo.id !== id));
  };
  

  const Todoes = value.map(todo => (
    <Todo
      task={todo.info}
      id={todo.id}
      key={todo.id}
      remove={remove}
    />
  ));
  return (
    <div>
      <NewTodoForm func={add}/>
      <ul>{Todoes}</ul>
    </div>
  );
}

export default TodoList;