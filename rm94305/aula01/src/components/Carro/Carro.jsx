import React from 'react';

export function Carro(props) {
  return (
    <div>
        <figure>
            <img src={props.pathImgProps} alt={props.infoCarroProps} width={props.infoImgProps} />
            <figcaption>
                {props.legProps}
            </figcaption>
        </figure>
        <h2>Lista de Veículos</h2>
        <ul>
            {props.listaDeCarrosProps.map((c,i)=>
                <li key = {i}>{i+1} - {c}</li>

            )
            }
        </ul>
    </div>
  )
}
