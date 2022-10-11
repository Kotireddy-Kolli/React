import React,{useState} from "react"
import MouseEvent from "./MouseEvent"

function MouseContainer(){
    const [display,setDisplay]=useState(true)

    return(
        <div>
        <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
        {display && <MouseEvent />}
        </div>
    )
}
export default MouseContainer

