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

function MultipleReducer(){
    
    const [count,dispatch]=useReducer(reducer,Initialstate)
    // arg are same, since functionality didn't change
    const [countTwo,dispatchTwo]=useReducer(reducer,Initialstate)
    return(
        <div>
            <div>Count : {count}</div>
            <button onClick={()=>{dispatch("Increment")}}>Increment</button>
            <button onClick={()=>{dispatch("Decrement")}}>Decrement</button>
            <button onClick={()=>{dispatch("Reset")}}>Reset</button>
            <div>Count two : {countTwo}</div>
            <button onClick={()=>{dispatchTwo("Increment")}}>Increment</button>
            <button onClick={()=>{dispatchTwo("Decrement")}}>Decrement</button>
            <button onClick={()=>{dispatchTwo("Reset")}}>Reset</button>
        </div>
    )
}
export default MultipleReducer

/* 
If we want multiple counter then instead of adding additional action(IncrementSecond,DecrementSecond)
we can specify multiple reducers, If state transitions/action are same
*/