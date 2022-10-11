import React,{useReducer} from "react"
import CompA from "./CompA"
import CompB from "./CompD"
import CompC from "./CompE"

export const CounterContext=React.createContext()

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

function Parent(){
    
    const [count,dispatch]=useReducer(reducer,Initialstate)
    return(
        <>
        <div>Globalcounter :{count}</div>
        <CounterContext.Provider value={{countState : count,countDispatch : dispatch}}>
        <CompA />
        <CompB />
        <CompC />
        </CounterContext.Provider>
        </>
    )
}
export default Parent