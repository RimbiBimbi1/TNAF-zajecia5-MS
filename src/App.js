import './App.css';
import AddTodo from "./Components/AddTodo/AddTodo";
import TodoList from "./Components/TodoList/TodoList";

export default function App() {

    return (
        <div className="App">
            <header className="App-header">
                <AddTodo/>
                <TodoList/>
            </header>
        </div>
  );
}
