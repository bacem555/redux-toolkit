import React from 'react';

import TodoList from './components/Todolist';
import AddForm from './components/AddForm';



function App() {
  return (
    <div>
      
      <h1>Todo App</h1>
      <AddForm />
      <TodoList />
    </div>
  );
}

export default App;
