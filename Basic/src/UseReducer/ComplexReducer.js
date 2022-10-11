import {useReducer} from "react"

const Initialstate={
    firstCounter : 0,
    secondCounter :10
}
const reducer=(state,action)=>{
    switch(action.type){
        case "Increment" :
            return {...state,firstCounter : state.firstCounter+action.value}
        case "Decrement" :
            return {...state,firstCounter : state.firstCounter-action.value}
        case "Reset"     :
            return Initialstate
        case "IncrementSecond" :
            return {...state,secondCounter : state.secondCounter+action.value}
        case "DecrementSecond" :
            return {...state,secondCounter : state.secondCounter-action.value}
        default     :
            return state

    }
}

function ComplexReducer(){
    
    const [count,dispatch]=useReducer(reducer,Initialstate)
    return(
        <div>
            <div>First Counter :{count.firstCounter}</div>
            <button onClick={()=>{dispatch({type:"Increment",value:1})}}>Increment</button>
            <button onClick={()=>{dispatch({type:"Decrement",value:1})}}>Decrement</button>
            <button onClick={()=>{dispatch({type:"Reset"})}}>Reset</button>
            <button onClick={()=>{dispatch({type:"Increment",value:5})}}>Increment 5</button>
            <button onClick={()=>{dispatch({type:"Decrement",value:5})}}>Decrement 5</button>
            <div>Second Couner :{count.secondCounter}</div>
            <button onClick={()=>{dispatch({type:"IncrementSecond",value:1})}}>Increment</button>
            <button onClick={()=>{dispatch({type:"DecrementSecond",value:1})}}>Decrement</button>
        </div>
    )
}
export default ComplexReducer

/* 
1.Having action as on object, we can pass multiple values as arguemnts to the reducer function
2.Having state as on object, If we want to use another counter. It is reuable
we use spread operator to merge the changes to both counter
*/