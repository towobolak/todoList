import React from 'react';

function TodoItem({ todo, index, toggleComplete, removeTodo }) {
  return (
    <li>
      <span 
        style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
        onClick={() => toggleComplete(index)}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(index)}>Delete</button>
    </li>
  );
}

export default TodoItem;