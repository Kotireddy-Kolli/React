/* 
useEffect to run only once, to replicate the componentDidMount
Here we have to add an empty array if it is need to be executed once*/

import React,{useEffect,useState} from "react";

function MouseEvent(){
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)

    const HandleMouseEvent = e =>{
        console.log("Mouse Event")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("useEffect called")
        window.addEventListener('mousemove',HandleMouseEvent)
        return ()=>{
            console.log("Component Unmounting")
            window.removeEventListener('mousemove',HandleMouseEvent)
        }
    },[])

    return(
        <p>x -{x} y - {y}</p>
    )
}
export default MouseEvent

/* 
Even the component MouseEvent is unmounted from the dom. 
The event lister add in the component MouseEvent, is still listining and executing

The function which we pass to useEffect can return a function which will be executed(called) when the component unmount
So, the return should be the clean up function which is similar to componentWillUnmount
*/