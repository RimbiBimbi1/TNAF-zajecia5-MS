import './App.css';
import AddTodo from './Components/AddTodo/AddTodo';
import TodoList from './Components/TodoList/TodoList';
import React from 'react';

export default function App() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (todoText, todoClass) => {
    const newTodo = {
      todoText: todoText,
      todoClass: todoClass,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <div className={'TodosContainer'}>
        <h2>Add a task:</h2>
        <AddTodo addTodo={addTodo} />
        <h2>Your tasks:</h2>
        <TodoList todoTilesData={todos} />
      </div>
    </div>
  );
}
