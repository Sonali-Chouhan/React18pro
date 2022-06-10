//Use-reducer  reducer and component samepage
// import React, { useReducer } from "react";
// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "add":
//       return state + 1;
//     case "subtract":
//       return state - 1;
//     case "reset":
//       return 0;
//     default:
//       throw new Error("Unexpected action");
//   }
// };
// const App = () => {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   console.log("count", count);
//   return (
//     <>
//       <h5>Use-Reducer</h5>
//       <h3> {count}</h3>
//       <button onClick={() => dispatch("add")}>Add</button>
//       <button onClick={() => dispatch("subtract")}>Sub</button>
//       <button onClick={() => dispatch("reset")}>reset</button>
//     </>
//   );
// };
// export default App;
