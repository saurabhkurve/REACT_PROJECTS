import React from "react";

const Sub:React.FC<{
    c:number,
    d:number,
}> = (props) =>{
    const {c,d} = props;
    return(
        <div>
            <h2>Substraction of {c} and {d} is {c-d}</h2>
        </div>
    )
}

export default Sub;