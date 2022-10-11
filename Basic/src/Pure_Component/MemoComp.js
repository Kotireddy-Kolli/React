import React from "react"
function MemoComp({name}){
    console.log("Rendering Memo Component")
    return(
        <div>
            {name}
        </div>
    )
}
export default React.memo(MemoComp)

/* Memo,
Accepts some component and add some things to the component and return a 
new enhanced component. In you case the component capable to preventing re-render in case of no changes in props

Similar to pure components, works in Functional components*/