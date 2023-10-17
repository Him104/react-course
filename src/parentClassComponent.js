import React from "react";
import ChildClassComponent from './childClassComponent';

class ParentClassComponent extends React.Component {

    render(){
    return (
        <>
       
        <ChildClassComponent prop1="value" prop2={42} />

        </>
    )
    
}
}

export default ParentClassComponent;
