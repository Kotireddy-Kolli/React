import * as React from 'react'
import ReactDOM from 'react-dom'
import {ErrorBoundary} from 'react-error-boundary'


function ErrorHandler({error}) {
  return (
    <div role="alert">
      <p>An error occurred:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

function City({name}) {
    return <div>Hello, visit {name.toUpperCase()}</div>
}

function Country({capital}) {
    return <div>Hello, visit {capital.toUpperCase()}</div>
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorHandler}>
      <Country />
      <City />
    </ErrorBoundary>
  )
}

