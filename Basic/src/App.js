import './App.css';
import {useState} from "react"

function App() {
  const [timestamp,setTimestamp] =useState(new Date().toLocaleTimeString())
  setInterval(()=>{
    const date=new Date()
    const dateTime=date.toLocaleTimeString()
    setTimestamp(dateTime)
  },1000)
  return (   
  <div>
    <h1>Hello, world!</h1>
    <h2>{timestamp}</h2>
  </div>);

}
export default App;
