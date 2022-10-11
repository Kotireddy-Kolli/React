import React from "react";

const Usercontext=React.createContext() //creating a context 
// const context=React.createContext("Guest") //Providing default value
//Giving more redable name to methods(provider,consumer) as per the senario
const UserProvider=Usercontext.Provider
const UserConsumer=Usercontext.Consumer
//Now we need to export so we can use in other components

export  {UserConsumer,UserProvider}

/* 
1. Create context
2. Provide context value
3. Consume context value
*/

/* 
Second way to use context is to export context itself, but it only works in class components
Then we have to assign this exported value to context.type property
*/
export default Usercontext