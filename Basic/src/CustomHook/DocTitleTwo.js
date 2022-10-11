import { useState } from "react";
import useDocumentHook from "./useDocumentHook";
function DocTitleTwo(){
    const [count,setCount]=useState(0)

    useDocumentHook(count)
    const clickHandler=()=>{
        setCount(count+1)
    }
    return(
        <div>
            <button onClick={clickHandler}>Count : {count}</button>
        </div>
    )
}
export default DocTitleTwo