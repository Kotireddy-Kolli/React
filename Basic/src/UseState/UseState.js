/* 
useState : Lets you add the state to the functional component
In Class, state is always an object
with useState hook, state don't have to be an object

useState hook always return two value, 1. current value and 2. state setter function
we call setter function with new value to set the state. Which inter cause component to re-render

In case your new state depends in previos state value, you can pass a function to setter function. 
    setter function will receive previous state as argument
When dealing with array or object, always make sure to spread the variable and then call the setter function to get expected behaviour*/
import {useState} from "react"

function UseState(){
    //const initialcount=0
    let count=0
    //const [count,setCount] = useState(initialcount)

    const counter= ()=>{
        count=count+1
        console.log("Clicked")
    }

    return(
        <div>
        <p>{count}</p>
        <button onClick={counter} >Increment</button>
        </div>
    )

}
export default UseState

/* won't re-render  without usestate*/