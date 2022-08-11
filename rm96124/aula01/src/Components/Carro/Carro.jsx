import React from "react";

export default function Carro(props) {
  return (
    <div>
      <figure>
        <img
          src={props.pathImgProps}
          alt={props.infoCarroProps}
          width={props.infoImgProps}
        />
      </figure>
      <figcaption>{props.legProps}</figcaption>
      <h2>Lista de Veiculos</h2>
      <ul>
        {props.listaDeCarrosProps.map((c, i) => (
          <li key={i}>
            {i + 1} - {c}
          </li>
        ))}
      </ul>
    </div>
  );
}
