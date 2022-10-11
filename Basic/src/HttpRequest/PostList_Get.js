import { useEffect, useState } from "react";
import axios from "axios";

function PostList_Get(){
    const [posts,setPosts]=useState([])
    const [error,setError]=useState("")
    useEffect(()=>{
        //axios is a promise based library that means we can use then, catch to access the data returned by endpoint
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{ 
            setPosts(response.data)
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
            setError("Error retriving Data")
        })
    },[])
    return(<div>
        <h2>List if posts</h2>
        {
            posts.length ? posts.map( post=> <div key={post.id}><span>{post.id}. </span><span>{post.title}</span></div>) : null
        }
        {
            error ? <div>{error}</div> : null
        }
    </div>)
}
export default PostList_Get


/* 
we will be using axios library to fetch data,
npm install axios
*/