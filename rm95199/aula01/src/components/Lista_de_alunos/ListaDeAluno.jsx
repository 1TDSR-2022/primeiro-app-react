import React from 'react'

export default function ListaDeAluno() {
  return (
    <React.Fragment>
        <div>Informações</div>
        <h2>Nome do Aluno:{props.nomeProps}</h2>
        <h2>Nome do Turma:{props.turmaProps}</h2>
        <h2>Nome dos Professores:</h2>
        <ul>
            <li>{props.profsProps[0]}</li>
            <li>{props.profsProps[1]}</li>
            <li>{props.profsProps[2]}</li>
            <li>{props.profsProps[3]}</li>
            <li>{props.profsProps[4]}</li>    
        </ul>   
    </React.Fragment>
  )
}
