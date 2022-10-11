import React,{useEffect, useReducer} from "react"
import axios from "axios"

const InitialState={
    posts:{},
    loading:true,
    error:""
}
const reducer=(state,action)=>{
    switch(action.type){
        case "FETCH_SUCCESS" :
            return {
                posts: action.payload,
                loading: false,
                error: "" 
            }
        case "FETCH_FAILURE" :
            return {
                posts: "",
                loading: false,
                error: "Something went wrong" 
            }
        default : return state
    }
}
function FetchData(){
    const [state,dispatch]=useReducer(reducer,InitialState)
    useEffect(()=>{
            axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then((response)=>{
                dispatch({type : "FETCH_SUCCESS", payload : response.data})
            })
            .catch((response)=>{
                dispatch({type : "FETCH_FAILURE", payload : response.data})
            })
    })

    return(
        <div>
        {state.loading ? "Loading" : state.posts.title }
        {state.error ? "something went wrong!" : null }
        </div>
    )
}
export default FetchData

/*
Here to fetch data instead of using 3 useState to store the data,error,loading.
we have used useReducer to store all(group) the related data in one place and all related transission also grouped together */