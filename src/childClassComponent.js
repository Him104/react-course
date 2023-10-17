import React from "react";

class ChildClassComponent extends React.Component{

    render(){
        return(
            <>
         

          <p>prop 1 : {this.props.prop1}</p>

          <p>prop 2 : {this.props.prop2}</p>
          </>
        )
    }
}

export default ChildClassComponent;