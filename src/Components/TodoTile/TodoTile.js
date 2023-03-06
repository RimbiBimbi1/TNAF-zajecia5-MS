import React from 'react';
import './TodoTile.css';

export default function TodoTile(props) {
  const { tileData } = props;
  return <div className={`TodoTile ${tileData.todoClass}`}>{tileData.todoText}</div>;
}
