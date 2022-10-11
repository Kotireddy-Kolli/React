import React from "react"
import CompA from "./CompA"
export const UserContext =React.createContext()
export const UserHobbies =React.createContext()
function Parent(){
    return(
        <div>
            <UserContext.Provider value={"Koti"}>
            <UserHobbies.Provider value={"Learning"}>
            <CompA />
            </UserHobbies.Provider>
            </UserContext.Provider>
        </div>
    )
}
export default Parent
