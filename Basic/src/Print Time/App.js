import { render } from "@testing-library/react"
import react,{ ReactDOM } from "react"

// import {useState} from "react"

// function App() {
//   const [timestamp,setTimestamp] =useState(new Date().toLocaleTimeString())
//   setInterval(()=>{
//     const date=new Date()
//     const dateTime=date.toLocaleTimeString()
//     setTimestamp(dateTime)
//   },1000)
//   return (   
//   <div>
//     <h1>Hello, world!</h1>
//     <h2>{timestamp}</h2>
//   </div>);

// }
// export default App;
const root=ReactDOM.createRoot(document.getElementById('root'))
function App(){
  return <Clock  date={new Date()}/>
}
function Clock(props){
  const time=props.date.toLocaleTimeString()
  root.render(time)
}
setInterval(App,1000)
export default App