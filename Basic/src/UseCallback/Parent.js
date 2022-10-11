import {useState,useCallback} from "react"
import Title from "./Title"
import Print from "./Print"
import Button from "./Button"

function Parent(){
    const [age,setAge]=useState(20)
    const [height,setHeight]=useState(170)

    const incrementage=useCallback(()=>{
        setAge(age+1)
    },[age])
    const incrementHeight=useCallback(()=>{
        setHeight(height+1)
    },[height])
    return(
        <div>
            <Title />
            <Print text="Age" count={age} />
            <Button handleClick={incrementage}>Increment Age</Button>
            <Print text="Height" count={height} />
            <Button handleClick={incrementHeight}>Increment Height</Button>
        </div>
    )

}
export default Parent
/* 
If we click any button, all the childerens will be re-render, To stop this we can use memos
Even after using memos, we are getting one un-necessary render from component which is taking call back function
We can use use call back hook to further optimise the rendering
*/