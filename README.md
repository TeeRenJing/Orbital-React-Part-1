# Learn-React-Part-1-Orbital-
Through https://www.youtube.com/watch?v=p-gu0PQ5kd0, learn React framework by building a to do list

We will be using functional components instead of class components. It is more declarative. Furthermore NUS teaches Functional Programming first in CS1101s, I have better training and understanding in FP compared to OOP. 

# This assumes knowledge in some harder javascript concepts.
Upon reflection, one has to know:

Array and Object destructuring and their syntax, how it is written and what does it mean.

|| or, && and, ?? null coalescing operator. 

conditional (ternary) operator. something that evals to true or false? this thing if true: else this thing if false.

Map, filter, reduce functions, i dont think reduce was used though but might as well learn.

Promises? So asynchronous js must also be understood. The promise will be completed in the future, after the code in run down the single thread.
.then(), .catch()

# React concepts covered

Nest components in components.

Functions which return a chunk of JSX. ONE CHUNK ONLY so if need be, do use <> </> (e.g. to wrap 2 divs)

Lift the state to the Parent component. Child components can receive the state as props.

Immutability. DONT CHANGE THE STATE YOURSELF, USE SETSTATE FUNCTION.

useEffect hook, does something when something in the dependency array changes. (hmm sounds like webhooks)
pass it 2 arguments, first one is a function of what to do i.e. (effect)=>{do something}
second argument is dependency array []. if want it to change upon refresh, just pass empty arrray.

Data persistance just use local storage. key value pairs

Developer tools> application>storage>local storage.

# APIs

We also used a GET API to get our cat fact (from the response). We also handled what to do if the API call throws us an error as part of error handling.
