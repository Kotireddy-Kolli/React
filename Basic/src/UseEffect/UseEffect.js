/* 
Lets you perform Side effects like updating the dom, fetching data, timers, setting up subscriptions.

componentDidMount(){
    document.title= `You clicked ${this.state.count} times`;
    this.interval=setInterval(this.tick,1000)
}
componentDidUpdate(){
    document.title= `You clicked ${this.state.count} times`
}
componentWillUnmount(){
    clearInterval(this.interval)
}
Problem : same code duplication(To update title), not grouping same things(related) in one place

It is a close replacment for componentDidMount,componentDidUpdate and componentWillUnmount
To load in initial render and re-render after subsequent updates

useEffect is a function, it will take function as parameter and 
    this function will get executed after every render of the component. 
*/
import React,{useState , useEffect} from "react"

function UseEffect(){
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')

    useEffect(()=>{
        document.title = ` You have ${count} times`
        console.log("Updating count")
    },[count])

    return(
        <div>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} />
        <button onClick={()=>{setCount(count=> count+1)}}>Clicked Me {count}</button>
        </div>
    )
}
export default UseEffect

/* 
2nd parameter is an array, here we need to mention the state or props what we need to watch for
Only if the state or props we specify in this array were to change the effect will be executed. 
*/