import React from 'react';

function TodoItem({ todo, index, toggleComplete, removeTodo }) {
  return (
   <div className='itemList'>
        <table>
            <tr>
                <th className='itList'>
                <span style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}onClick={() => toggleComplete(index)}>{todo.text}</span>
                </th>
            </tr>
        </table>

        <table>
            <tr>
                <th>
                <button className='delete' onClick={() => removeTodo(index)}>Delete</button>
                </th>
            </tr>
        </table>
   </div>
  );
}

export default TodoItem;