import React from "react";

export default function Primeiro() {
  const nome = "Jake";
  const profissao = "Aluna";
  return (
    <div className="divPrimeiro">
      <h3>Primeiro Componente</h3>
      <p>Nome: {nome}</p>
      <p>Profissão:{profissao}</p>
    </div>
  );
}
