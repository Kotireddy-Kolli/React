import {useReducer} from "react"

const Initialstate=0
const reducer=(state,action)=>{
    switch(action){
        case "Increment" :
            return state+1
        case "Decrement" :
            return state-1
        case "Reset"     :
            return Initialstate
        default     :
            return state

    }
}

function SimpleReducer(){
    
    const [count,dispatch]=useReducer(reducer,Initialstate)
    return(
        <div>
            <div>{count}</div>
            <button onClick={()=>{dispatch("Increment")}}>Increment</button>
            <button onClick={()=>{dispatch("Decrement")}}>Decrement</button>
            <button onClick={()=>{dispatch("Reset")}}>Reset</button>
        </div>
    )
}
export default SimpleReducer

/* 
1. Import useReducer
2. call useReducer in component with reducer function and initial state 
3. Specify the Initial state and reducer function above the component which takes action, switch statement to define all action 
4. Now use dispatch function and pass action as arg

We will cover complex reducer using State object and action object which is similar to redux
 */