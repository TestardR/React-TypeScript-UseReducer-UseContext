import React, { Fragment, useContext, useReducer } from "react";
import { Store } from "./Store";

const App: React.FC = () => {
 
  const reducer = (state:number, action:string):number => {
    switch (action) {
      case "ADD":
        return state + 1;
      case "SUB":
        return state - 1;
      case "RES":
        return (state = 0);
    }
    return state;
  };

   // @ts-ignore: Unreachable code error
   const [count, dispatch] = useReducer(reducer, 0);

  const store = useContext(Store);
  console.log(store)
  
  return (
    <Fragment>
      <h1>Rick and Morty</h1>
      <p>Pick your favourite episode !</p>
      <div>{count}</div>
      <button onClick={() => dispatch("ADD")}>ADD</button>
      <button onClick={() => dispatch("SUB")}>SUB</button>
      <button onClick={() => dispatch("RES")}>RES</button>
    </Fragment>
  );
};

export default App;
