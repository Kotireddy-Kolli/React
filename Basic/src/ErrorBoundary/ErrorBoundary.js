import React from "react"

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state={
            hasError : false
        }
    }
    //first way
    static getDerivedStateFromError(error){ //takes 1 arg
        return{
            hasError : true //have to set this property as true
            // If at all these is an error in any of the components we are setting the property as true
        }
    }
    //second way
    componentDidCatch(error,info){ // takes 2 parameters, we use this to log the errors
        console.log(error)
        console.log(info)
    }
    render(){
        if(this.state.hasError === true){
            return <h3>Something went wrong</h3>
        }else{
            return this.props.children // Refers to actuall component we are rendering
        }
    }
}
export default ErrorBoundary

/* 
Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, 
and display a fallback UI instead of the component tree that crashed. 
Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.


In order for this to became an Error boundary class, It must implement static getDerivedStateFromError() or componentDidCatch()

Error Boundaries catch error in rendering, lifecycle component, constructor of whole tree below then
Dont catch errors in event handler, we can use try class block*/