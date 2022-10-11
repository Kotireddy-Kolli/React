useReducer

Used For 
1. It is a hook used for state management
2. It is an alternative to useState

What's the difference?

1. useState is build using useReducer. useReducer more primitive hook to useState


Summary
1.useReducer is a hook that is used for state managementin React
2.useReducer is related to reducer functions
3.useReducer(reducer,initialState)
4.reducer(currentState, action)

When to use useReducer vs useState?

senario                          useState                useReducer
type of state                number,string,boolean       object or Array
No of state transitions      one or two                  Too Many
Realated state transitions   No                          Yes
Business Logic               No Business Logic           complex Business Logic
Local vs global              Local                       Global
