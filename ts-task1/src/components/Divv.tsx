import React from "react";

const Div:React.FC<{
    g:number,
    h:number
}> = (props) =>{

    const {g,h} = props;
    return(
        <div>
            <h2>Division of {g} and {h} is {g/h}</h2>
        </div>
    )
}

export default Div;