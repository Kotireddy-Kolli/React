import {useEffect, useRef} from "react"

function InputFocus(){
    const inputref=useRef(null)
    useEffect(()=>{
        inputref.current.focus()
    },[])
    return(
        <div>
            <input type="text" ref={inputref}></input>
        </div>
    )
}
export default InputFocus

/* 
useRef Hook, Help you to access the dom nodes directly in functional components

we want to focus on the input element once and that is only after component has mounted,
As we already know, we can use useeffect

Create unput ref using hook by passing null, 
Attach it to input element by using predefined attribute "ref"
Now inside useeffect(As component mounted) we can use methods. Where does current property came from? 
It is something that react does, react will set the ref's current property to the corresponding dom node*/