import React from 'react'
import imagem1 from "./img/MicrosoftTeams-image.png"
import imagem2 from "./img/MicrosoftTeams-image (1).png"
import imagem3 from "./img/MicrosoftTeams-image (2).png"

export default function Carros(props) {
  return (
    <div>
       <figure>
        <img src='{propos.pathimgProps}' alt='{props.infoCarroProps}' width="{props.infoProps}"/>
            
        <figcaption>
         {props.LegProps}
        </figcaption>
       </figure>
       <h2>Lista de veículos</h2>
       <ul>
            {props.listaCarrosProps.map((c,i)=> <li key={i}>{i+1} - {c}</li>
            )}
       </ul>
    </div>
  )
}
