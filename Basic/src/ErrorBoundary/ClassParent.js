import React from "react"
import Hero from "./Hero"
import ErrorBoundary from "./ErrorBoundary"

class ClassParent extends React.Component{
    render(){
        return(
            <div>
                {/*<ErrorBoundary> */}
                <ErrorBoundary >
                <Hero name="Super Man"/>
                </ErrorBoundary>
                <ErrorBoundary >
                <Hero name="Bat Man"/>
                </ErrorBoundary>
                <ErrorBoundary >
                <Hero name="Joker"/>
                </ErrorBoundary>
                {/* </ErrorBoundary> */}
            </div>
        )

    }
}
export default ClassParent