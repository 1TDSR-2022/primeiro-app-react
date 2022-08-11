import React from 'react'

export default function ListaDeAlunos(props) {
  return (
    <React.Fragment>
        <div>Informações</div>
        <h2>{props.nomeProps}</h2>
        <h2>{props.turmaProps}</h2>
        <ul>
            <li>{props.profsProps[0]}</li>
            <li>{props.profsProps[1]}</li>
            <li>{props.profsProps[2]}</li>
            <li>{props.profsProps[3]}</li>
            <li>{props.profsProps[4]}</li>
            <li>{props.profsProps[5]}</li>
        </ul>
    </React.Fragment>
    
  )
}
