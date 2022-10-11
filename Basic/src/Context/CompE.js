import CompF from "./CompF"
import React from "react"
import Usercontext from "./ContextComp"

class CompE extends React.Component{
    render(){
        return (
        <div>
        <p>Class Component E {this.context}</p>
        <CompF />
        </div>
        )
    }
}

CompE.contextType=Usercontext
export default CompE

/* 
Assign context type with user context
we can access then by using this.context 

Limitation of this,
We can only subscribe to single context using context type*/