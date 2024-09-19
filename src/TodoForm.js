import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form className='formM' onSubmit={handleSubmit}>
        <div className='inin'>
            <input id='input1' className='input1' type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Click here to add plan here..."/>
        </div>
        <div className='btnAdd'>
            <button className='btn1' type="submit">Add</button>
        </div>
    </form>
  );
}

export default TodoForm;