useReducer with useContext

useReducer for local state(complex) management
useContext for Global state management

                    AppComponent
        A(counter)      B           C
                        D(counter)  E
                                    F(counter)


Instead to implementing the counter in 3 different component, 
    we can implement the global counter in AppComponent
    and pass methods as props to 3 component and components then have handler to call the props.

As in real world, component can in deep nesting and we have to user context API(context hook)