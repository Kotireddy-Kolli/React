import { useEffect, useState, useRef } from "react";

function Timer(){
    const [timer,setTimer]=useState(0)
    const intervalRef=useRef()

    useEffect(()=>{
        intervalRef.current=setInterval(()=>{
            setTimer((prevstate)=>{return prevstate+1})
        },1000)
        // const stopInterval=setInterval(()=>{
        //     setTimer((prevstate)=>{return prevstate+1})
        // },1000)
        return ()=>{
            clearInterval(intervalRef.current)
        }
    },[])
    const stopTimer= ()=>{
        // clearInterval(stopInterval)
        clearInterval(intervalRef.current)
    }
    return(
        <div>
            <p>Timer - {timer}</p>
            <button onClick={stopTimer}>Stop Timer</button>
        </div>
    )
}
export default Timer

/* 
Another use of useref,

Here we will get an error "Line 12:23:  'stopInterval' is not defined  no-undef", As the variable is only scoped to the use effect hook
So, we can clear the Interval with in the useeffect hook but not from an event handler

Althought useRef can hold the reference to the dom nodes by using ref attribute, It can also be used to stored any mutable values
What good about useref is the values persist through the re-render whild also not causing any re-renders when it's value changes

import useRef from react,
Invoke the useRef and store in a variable,
now assign any mutable values to the ref which we created.

useRef, 
Used to create a generic container which can store the mutable values, similar to the instance properties in a class conponent.
This generic container doesn't cause any re-renders when the data it stores changes. 
It also remembers the stored data even after other state variables causes re-render of the component.
*/