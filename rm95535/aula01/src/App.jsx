import React from 'react'
import ListaDeAlunos from './components/ListaDeAlunos/ListaDeAlunos'
import Primeiro from './components/Primeiro/Primeiro'

export default function App() {
    const aluno = "Valentina Fuzaro"
    const turma = "1TDSR"
    const profs = ["Josef", "Alexandre", "Salvio", "Eduardo", "Miguel", "Cordeiro"]

    return (
        <>
            <h2>Nome do aluno:{aluno}</h2>
            <ListaDeAlunos
            nomeProps={aluno}
            turmaProps={turma}
            profsProps={profs} 
            />
        </>
    )
}