import { UserConsumer } from "./ContextComp"
function CompF(){
    return(
        /* we need to pass a function in between the open and closing tags and That function receive the value as argument.
         We just need to implement any logic and have to return a proper jsx */
        <UserConsumer> 
            {
                (username)=>{
                    return <h3>Hello {username}</h3>
                }
            }
        </UserConsumer>
    )
}
export default CompF