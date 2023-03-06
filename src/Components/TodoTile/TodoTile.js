import React from "react";

export default function TodoTile(props){
    const {tileData} = props;
    return(
        <div className={tileData.classname}>
            {tileData.text}
        </div>
    )
}