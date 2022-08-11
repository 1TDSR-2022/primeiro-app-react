import React from "react";
import "./Primeiro.css";

export default function Primeiro() {
  const nome = "Alê";
  const profissao = "Professor";
  return (
    <div className="divPrimeiro">
      <h3>Primeiro Componente</h3>
      <p>Nome: {nome}</p>
      <p>Profissão: {profissao}</p>
    </div>
  );
}
