import React from "react";

const Add :React.FC<{
    a:number,
    b:number
}> = (props) =>{

    const {a,b} = props;
    return(

        <div>
            <h2>Addition is : {+a} and {+b} id {a+b}</h2>
        </div>
    )
}

export default Add;