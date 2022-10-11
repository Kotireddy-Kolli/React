useCallback

what?
useCallback is a hook that return a memoized version of the Callback
function that only changes if one id the dependencies has changed.

Why?
It is useful when passing the callbacks to optimized child components
that rely on the reference equality to prevent unnecessary renders.

How
1. import from react 
2. call useCallback, which accepts a Callback fucntion as its 1st arg and
    array of dependencies as 2nd arg

A new function is created every time a parent re-renders, when deling with
fucntion we have to consider reference equality even though two functions have exact 
same behaviour it doesn't mean their are equal to each other. function before the re-render 
is no same as function after re-render, since the function is passed as props react.memo 
sees that props has changed, so the component will re-render.

react will cache the function and return the cached function
when the dependencies didn't change.