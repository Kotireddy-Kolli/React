import React,{useContext} from "react"
import { UserContext, UserHobbies } from "./Parent"

function CompE(){
    const user=useContext(UserContext)
    const hobbies=useContext(UserHobbies)
    return(
        <div>
            Hello {user} - Likes {hobbies}
        </div>
    )
}
/*
function CompE(){
    return(
        <div>
            <UserContext.Consumer>
                {user =>{
                    return (
                            <UserHobbies.Consumer>
                            { hobbies=>{
                                    return (<div>Hello {user} , Like {hobbies}</div>)
                                }
                            }
                            </UserHobbies.Consumer>
                            )
                }}
            </UserContext.Consumer>
        </div>
    )
} */
export default CompE

/*
The way to consume the context is verbose, If we only have one context it was ok
If we have more contexts then it is very difficult to maintain 
Just to consume 2 values their is too much of nesting

We can use usecontext hook, to solve the way we consume the context
First 2 step remains same 1. create 2. provider
3. Call the use context hook by passing the context as arg,
    It returns a variable

*/