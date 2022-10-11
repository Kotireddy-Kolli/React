import {useContext}  from "react"
import { CounterContext } from "./Parent"

function CompD(){
    const counterContext =useContext(CounterContext)
    return(
        <div>
        <div>Component D :{counterContext.countState}</div>
        <button onClick={()=>{counterContext.countDispatch("Increment")}}>Increment</button>
        <button onClick={()=>{counterContext.countDispatch("Decrement")}}>Decrement</button>
        <button onClick={()=>{counterContext.countDispatch("Reset")}}>Reset</button>
    </div>
    )
}
export default CompD