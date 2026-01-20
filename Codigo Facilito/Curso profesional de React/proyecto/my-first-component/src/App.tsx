import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

interface Person {
  id: number;
  name: string;
  age: number;
}

const arrayOfNumbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const arrayOfPeople: Person[] = [
  {
    id: 1,
    name: "Leanne Graham",
    age: 20,
  },
  {
    id: 2,
    name: "Joseph Trump",
    age: 24,
  },
  {
    id: 3,
    name: "Miguel Salas",
    age: 21,
  },
  {
    id: 4,
    name: "Andres Smith",
    age: 30,
  },
];

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  //un error común en no agregar la propiedad key a las listas
  //por lo cual se colocara una key unica
  const numberItems: React.JSX.Element[] = arrayOfNumbers.map((item) => (
    <li key={`array-number-item-${item}`}>{item}</li>
  ));

  const peopleItems: React.JSX.Element[] = arrayOfPeople.map((person) => (
    <li
      key={`array-person-item-${person.id}`}
    >{`${person.name}: ${person.age}`}</li>
  ));

  return (
    <>
      {/* Ejemplo usando operador logico */}
      {value < 2 && <div>Cargando...</div>}

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Renderizado de una lista no ordenada */}
      <ul>{numberItems}</ul>
      <ul>{peopleItems}</ul>
    </>
  );
}

export default App;
