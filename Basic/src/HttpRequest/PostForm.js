import axios from "axios"
import { useState } from "react"

function PostForm(){
    const [userDetails,setUserDetail]=useState({userid:"",title:"",body:""})

    const onChangeHandle=(e)=>{
        setUserDetail({...userDetails,[e.target.name]: e.target.value})
    }
    const postData=(e)=>{
        e.preventDefault()
        console.log(userDetails)
        axios.post("https://jsonplaceholder.typicode.com/posts",userDetails)
        .then(response =>{
            console.log(response)
        })
    }

    return(
        <div>
            <form onSubmit= {postData} >
            <input type="text" name="userid" onChange={onChangeHandle} value={userDetails.useid}/>
            <input type="text" name="title" onChange={onChangeHandle} value={userDetails.title}/>
            <input type="text" name="body" onChange={onChangeHandle} value={userDetails.body}/>
            <button type="submit">Submit</button>
            </form>
            <h2>{JSON.stringify(userDetails)}</h2>
        </div>
    )
}
export default PostForm