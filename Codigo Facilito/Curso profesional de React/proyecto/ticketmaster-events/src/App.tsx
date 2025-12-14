import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import "./App.css";

const arrayOfNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function App() {
  const [count, setCount] = useState(0);
  const items: React.ReactElement[] = arrayOfNumbers.map((number) => (
    <li key={`array-number-item-${number}`}>{`Item ${number}`}</li>
  ));

  return (
    <>
      <Navbar />
      {/* <ul>{items}</ul> */}
      <Events />
    </>
  );
}

export default App;
