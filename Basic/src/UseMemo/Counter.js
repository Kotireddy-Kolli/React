import { useState,useMemo } from "react"

function Counter(){
    const [counterone,setCounterone]=useState(0)
    const [countertwo,setCountertwo]=useState(0)

    const incrementone = ()=>{
        setCounterone(counterone+1)
    }
    const incrementtwo = ()=>{
        setCountertwo(countertwo+1)
    }
    const iseven =useMemo(()=>{
        /*Let say some function has expensive calculation or function that is not so good at performance,
        It could be like fetching thousands of records, mapping, filtering, sorting that array */
        let i=0
        while (i<2000000000) i++
        return counterone % 2  ===0
    },[counterone])

    return(
        <div>
            <button onClick={incrementone} >counterone : {counterone}</button>
            {/* <span>{iseven() ? "Even" : "Odd"}</span><br /> */}
            <span>{iseven ? "Even" : "Odd"}</span><br />
            <button onClick={incrementtwo} >countertwo : {countertwo}</button>
        </div>
    )
}
export default Counter

/* 
Now, If we click on the counter one button, we can see an delay on updating state due to expensive calculation.
As every time the count increments, The react has to check if the counter is even or odd,
 the UI will re-render and iseven() calcalation is expensive
 
Now, If we click on Increment two, the UI update is still slow.
It is strange, Delay is because every time their is a change in state, the UI has to re-render again and when the component re-renders,
iseven() is called again, As the function is slow, even the countetwo updates are also slow

Now what we need is to tell react, not to re-calculate certain value when unnessary, expecally the one which will take long time to compute
Now, we have to tell react not to calcualte iseven when updating the countertwo.

useMemo : It is a hook, That will only re-compute the cached value when one of the dependencies has changes
          When the dependancies changes, react will re-compute, instead of using cached value
          as it returns a cached value we will assign it to variable
          
useCallback Vs useMemo
As both seems similar, what is the difference?
useCallback caches the provided function instance,
useMemo invokes the provided function and caches it's result*/