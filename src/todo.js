import './App.css';
import React, { useState } from 'react'


function Todo({task='', id=1, remove}) {
  const handleDelete = () => remove(id);
  return (
    <div>
      <li>{task}</li>
      <button onClick={handleDelete}>remove</button>
    </div>
  );
}

export default Todo;