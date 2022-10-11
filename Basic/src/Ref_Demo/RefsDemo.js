import React, { useState } from "react"

function RefsDemo(){
    const inputRef=React.createRef()
    console.log(inputRef)
    const [cbRef, setCbRef]=useState(null)

    const cbRefAssign= (e) =>{
        setCbRef(e)
    }
    // inputRef.current.focus()
    //cbRef.focus()
    const clickHandler = ()=> {
        //alert(inputRef.current.value)
        alert(cbRef.value)
    }
    return(
        <div>
        <input type="text" ref={inputRef} ></input>
        <input type="text" ref={cbRefAssign} ></input>
        <button onClick={clickHandler}>Click me</button>
        </div>
    )
}

export default RefsDemo;

/*
Refs,
First way
1. Create a ref using createRef()
2. To attach a ref we make use of reserved ref attritbute 

Second way(callback approch)
1. Create a propery and assign a vailue of null
2. Create a method which assign the dom element to ref we created
3. To attach a ref we make use of reserved ref attritbute 
4. No need to use current

Refs cann't be passed as props in Funtional component
*/