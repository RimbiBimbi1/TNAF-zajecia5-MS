import React from "react";

export default function Select(props){
    const {ludki}=props;
    // const [index, setIndex] = React.useState(ludki[0].id)

    return(
        // <select onChange={props.onChange}>
        <div>
            <select defaultValue={-1} onChange={(event)=>props.onChange(event.target.value)}>
                <option
                    hidden
                    value={-1}
                >...</option>
                {ludki.map(ludek=>(
                    <option
                        key={ludek.id}
                        name={ludek.name}
                        value={ludek.id}
                    >{ludek.name}</option>))}
            </select>
            {/*<h1>{ludki[index].name}</h1>*/}
            {/*<div>{ludki[index].birthDate}</div>*/}
        </div>

    )
}