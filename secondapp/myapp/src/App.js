import React from "react";
import FunctionalComponent from "./Components/FunctionalComponent";
import ClassComponent from "./Components/ClassComponent";
import Click from "./Components/Click";
import Counter from "./Components/Counter";
import ParentComp from "./Components/ParentComp";

function App() {
  return (
    <div>
      <h1>Welcome to my application</h1>
      <h2>Hello Basu</h2>
      <FunctionalComponent/>
      <ClassComponent/>
      <Click/>
      <Counter/>
      <ParentComp />
    </div>
  );
}

export default App;
