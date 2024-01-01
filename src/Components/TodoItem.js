 // TodoItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, justCompleted } from '../toolkit/todoSlice';
import './TodoItem.css'; 

function TodoItem({ el }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTodo({ id: el.id }));
  };

  const handleJustCompleted = () => {
    dispatch(justCompleted({ id: el.id }));
  };

  return (
    <div className={`todo-item ${el.completed ? 'completed' : ''}`}>
      <p>Player: {el.player}</p>
      <button className="button" onClick={handleJustCompleted}>
        {el.completed ? 'Just Completed' : 'not Completed'}
      </button>
      <button className="button" onClick={handleRemove}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
