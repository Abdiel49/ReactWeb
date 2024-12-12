import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useCalculator } from "./hooks/useCalculator";
import { ButtonComponent } from "./componets/ButtonComponent";
import { ProductCard } from "./componets/ProductCard";
import ProductList from "./componets/ProductList";
import NavBar from "./componets/navbar/NavBar";

function App() {
  const { count, reset, restar, sumar } = useCalculator(0);

  function miBoton() {
    console.log("se preciono el boton");
  }

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}

      <NavBar />

      <ProductList />
      <div className="card">
        {/* <h2>count is {count}</h2> */}
        {/* usar el componente de React para el Card de productos */}

        {/* <ProductCard /> */}

        <ButtonComponent label={"Mi Botoncito"} onClick={miBoton} />

        <ButtonComponent onClick={miBoton} />

        <button onClick={sumar}>Sumar</button>

        <button onClick={restar}>Restar</button>

        <button onClick={reset}>Reset</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
