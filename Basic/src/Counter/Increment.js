import {useState} from "react"

function Increment(){
    const initialcount=0
    const [count,setCount] = useState(initialcount)

    const counter= (value)=>{
        if(value===0){
            setCount(value)
        }else{
        setCount(prevstate => 
            {
                if(prevstate===10){
                alert("We can't Increment")
                return 10
                }else{
                return prevstate+value
                }
            }
        )}
    }

    return(
        <div>
        <p>{count}</p>
        <button onClick={()=>{counter(initialcount)}} >Reset</button>
        <button onClick={()=>{counter(1)}} >Increment</button>
        <button onClick={()=>{counter(-1)}} >Decrement</button>
        </div>
    )

}
export default Increment