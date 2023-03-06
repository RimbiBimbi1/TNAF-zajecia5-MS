import React from 'react';
import TodoTile from '../TodoTile/TodoTile';
import './TodoList.css';

export default function TodoList(props) {
  const { todoTilesData } = props;

  const showTodoList = () => {
    if (todoTilesData == null) return 'Nothing to do';
    return todoTilesData.map(tileData => <TodoTile key={Math.random()} tileData={tileData} />);
  };

  return <main className={'TodoList'}>{showTodoList()}</main>;
}
