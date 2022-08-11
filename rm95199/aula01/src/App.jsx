import React from 'react'
import ListaDeAluno from './components/Lista_de_alunos/ListaDeAluno'
import Primeiro from './components/Primeiro/Primeiro'
import Segundo from './components/Segundo/Segundo'

export default function App() {
    const aluno = "Emerson Silva"
    const turma = "1TDSR"
    const profs = ["a", "b", "c", "d", "e", "f"]
    return (
        <>
            <h2>Nome do Aluno:{aluno}</h2>
            <ListaDeAluno 
            nomeProps={aluno}
            turmaProps={turma}
            profsProps={profs}
            />
        </>
    )
}