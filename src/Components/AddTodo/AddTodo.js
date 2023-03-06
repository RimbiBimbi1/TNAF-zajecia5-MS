import React from 'react';
import './AddTodo.css';

export default function AddTodo(props) {
  const { addTodo } = props;

  const [todoText, setTodoText] = React.useState('');
  const [todoClass, setTodoClass] = React.useState('');

  const handleAddButtonClicked = () => {
    addTodo(todoText, todoClass);
  };

  return (
    <div className={'flexColumn'}>
      <input
        className={'todoTextInput'}
        placeholder={'Type in your task here'}
        onChange={event => setTodoText(event.target.value)}
      />
      <div className={'flexRow'}>
        <select
          className={'todoClassSelect'}
          defaultValue={''}
          onChange={event => setTodoClass(event.target.value)}
        >
          <option className={''} value={''}>
            native
          </option>
          <option className={'red'} value={'red'}>
            red
          </option>
          <option className={'green'} value={'green'}>
            green
          </option>
          <option className={'blue'} value={'blue'}>
            blue
          </option>
          <option className={'gold'} value={'gold'}>
            gold
          </option>
        </select>
        <button className={'addTodoButton'} onClick={handleAddButtonClicked}>
          +
        </button>
      </div>
    </div>
  );
}
