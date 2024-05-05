

const PassingString:React.FC<{
    name:string,
    age:number
}> = (props) =>{
    const {name, age} = props;
    return(
        <div>
            <h2>my name is {name} and age is {age}</h2>
        </div>
    )
}

export default PassingString;