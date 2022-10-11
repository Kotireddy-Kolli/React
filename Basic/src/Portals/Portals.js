import React from "react"
import ReactDOM from "react-dom"

function PortalDemo(){
    return ReactDOM.createPortal(
        <div>
            <h2>Render to "portal-root" not to root</h2>
        </div>,
        document.getElementById("portal-root")
    )
}

export default PortalDemo;

/* 
Portal,
To mount JSX into any dom node, Unlike mounting into root dom node

1. Import React DOM 
2. create a portal using 
    ReactDOM.createPortal(arg1(JSX you want to render),dom node to which you want to mount the jsx) before return
3. arg1 can be any element that react can render (Like num,string,jsx,component)

why we need?
when we have to deal with parent css, when child is a modal/popup/tooltip
https://codesandbox.io/s/00254q4n6p
If we remove the portal then max width is only 400px, Then modal look like broke

Event bubbling
https://codepen.io/gaearon/pen/jGBWpE
*/