import React from "react"
function Print(props){
    console.log(`Rendering ${props.text}`)
    return(
        <p>{props.text} : {props.count}</p>
    )
}
export default React.memo(Print)

