import React from 'react'

export default function ListaDeAlunos(props) {
  return (
    <div>
      <div>INFORMAÇÕES</div>
      <h2>Nome do aluno: {props.nomeProps}</h2>
      <h2>Turma: {props.turmaProps}</h2>
      <h2>Professores: </h2>
      <ul>
        <li>{props.profsProps[0]}</li>
        <li>{props.profsProps[1]}</li>
        <li>{props.profsProps[2]}</li>
        <li>{props.profsProps[3]}</li>
        <li>{props.profsProps[4]}</li>
      </ul>
    </div>
  )
}
