import React from "react";

export default function AddTodo(props){
    const {addTodo} = props

    const [todoText, setTodoText] = React.useState("")
    const [todoClass,setTodoClass] = React.useState("blank")

    const handleAddButtonClicked = () =>{
        addTodo(todoText,todoClass)
    }


    return(
        <div>
            <input onChange={event => setTodoText(event.target.value)}></input>
            <div>
                <select onChange={(event)=>setTodoClass(event.target.value)}>
                    <option className={"blank"} value={"blank"}></option>
                    <option className={"red"} value={"red"}></option>
                    <option className={"green"} value={"green"}></option>
                    <option className={"blue"} value={"blue"}></option>
                    <option className={"gold"} value={"gold"}></option>
                </select>
                <button onClick={handleAddButtonClicked}></button>
            </div>

        </div>
    )
}