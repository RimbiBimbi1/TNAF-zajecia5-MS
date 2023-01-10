import React from "react";
import Select from "../Select/Select";

export default function UserInfo(){
    const [index, setIndex] = React.useState(-1)

    const ludki = [{
        id:0,
        name:"Maciej",
        lastName:"Maciejewski",
        birthDate:"1999-01-01",
        email:"ASDASDwwqfcas@asdas.pl"
    },{
        id:1,
        name: "Krzysztof",
        lastName:"Maciejkowski",
        birthDate: "2000-06-04",
        email:"asdasdasdwqfgqvcs@asdas.pl"

    },{
        id:2,
        name: "Marian",
        lastName:"Maciejczak",
        birthDate: "1234-05-06",
        email:"nie@podam.pl"

    },{
        id:3,
        name: "AAAAAA",
        lastName:"Maciej",
        birthDate: "5132-04-04",
        email:"got@IQless.mail"
    }]

    const handleOnChange = (value) => {
        setIndex(value)
    }

    return(
        <div>
            <h1>User Info:</h1>
            <Select onChange={handleOnChange} ludki={ludki}/>
            {index>-1 && (<div>
                <h2>{ludki[index].name + " " +ludki[index].lastName}</h2>
                <h4>{ludki[index].birthDate}</h4>
                <h4>{ludki[index].email}</h4>
            </div>)}

        </div>

    )
}
