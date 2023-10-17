import React from "react";
import ChildComponent from './childComponent';


export default function ParentComponent() {

    const mydata = "this call is from parent component!";
    return (
        <ChildComponent data={mydata}/>
    )
    
}

