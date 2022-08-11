import React from 'react'

export default function Carros(props) {
  return (
    <div className="modelosCarros">
        <figure>
           <img src={props.pathImgProps} alt={props.infoCarroProps} width={props.infoImgProps}/>
           <figcaption>
            {props.legProps}
            </figcaption> 
        </figure>
        <h2>Lista de veículos</h2>
        <ul>
            {props.listaCarrosProps.map((c,i)=>
                <li key={i}>{i+1}-{c}</li>
            )}
        </ul>
    </div>
  )
}