import React from 'react'

export default function ListaDeAlunos(props) {
  return (
    <React.Fragment>

        <div>INFORMAÇÕES</div>

        <h2>{props.nomeProps}</h2>

        <h2>{props.turmaProps}</h2>

        <h2>{props.profProps}</h2>

        <ul>
            <li>{props.profProps[0]}</li>
            <li>{props.profProps[1]}</li>
            <li>{props.profProps[2]}</li>
            <li>{props.profProps[3]}</li>
        </ul>

    </React.Fragment>
  )
}
