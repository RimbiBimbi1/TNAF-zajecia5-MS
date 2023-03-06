import React from "react";
import TodoTile from "../TodoTile/TodoTile";

export default function TodoList(props){
    const {todoTilesData} = props

    return(
        <div>
            {todoTilesData.map(
                (tileData)=> <TodoTile tiledata={tileData}/>
            )}
        </div>
    )

}