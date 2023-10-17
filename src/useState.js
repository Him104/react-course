import React,{useState} from "react";

function MyComponent(){

    const [count, setCount]=useState(0);

    const incrementValue = () => {
        setCount(count - 1);
    }

    return (
        <div>

            <h1>count : {count}</h1>
            <button onClick={incrementValue}>Click to increase the value</button>
        </div>

    )

} 

export default MyComponent;