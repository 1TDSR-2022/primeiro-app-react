import React from "react";
import Primeiro from "./components/Primeiro/Primeiro";
import Segundo from "./components/Segundo/Segundo";

export default function App() {
  const tag = (
    <h1>
      <strong>Olá React!</strong>
    </h1>
  );
  return (
    <>
      <h1>App-React</h1>
      {tag}
      <h2>Subtítulo</h2>
      <Primeiro />
      <Segundo />
    </>
  );
}
