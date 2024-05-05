import React from 'react'

const Mul:React.FC<{
    e:number,
    f:number
}> = (props) =>{
    const {e,f} = props;
    return(
        <div>
            <h2>Multiplication of {e} and {f} is {e*f}</h2>
        </div>
    )
}

export default Mul;