import {useContext}  from "react"
import { CounterContext } from "./Parent"

function CompA(){
    const counterContext =useContext(CounterContext)
    return(
        <>
        <div>Component A :{counterContext.countState}</div>
        <button onClick={()=>{counterContext.countDispatch("Increment")}}>Increment</button>
        <button onClick={()=>{counterContext.countDispatch("Decrement")}}>Decrement</button>
        <button onClick={()=>{counterContext.countDispatch("Reset")}}>Reset</button>
    </>
    )
}
export default CompA