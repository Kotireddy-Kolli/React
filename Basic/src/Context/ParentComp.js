/*          App Component
        A         B           C
                  D           E
                              F

If we want to Display logged in user name in F (That Property is maintained in App Component)
then we need to pass as prop from A -> c -> E -> F               

Context,
Provides the way to pass the data through component tree without having pass data as prop down at every level
*/

import React from "react";
import CompC from "./CompC";
import {UserProvider} from "./ContextComp"
class ParentComp extends React.Component{

    render(){
        return(
        <div>
        <UserProvider value="Koti"> 
        <CompC />
        </UserProvider>
        </div>)
    }

}

export default ParentComp
/* 
From which parent the propery we need, we need to give then inside userprovider and pass the property as value to userprovider
*/