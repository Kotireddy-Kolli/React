import { useState } from "react";
import useDocumentHook from "./useDocumentHook";

function DocTitleOne(){
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
export default DocTitleOne