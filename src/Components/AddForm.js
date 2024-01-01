import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../toolkit/todoSlice'; // Update the path

function AddForm() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(addTodo({ player: inputValue }));
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddForm;