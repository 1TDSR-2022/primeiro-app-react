import React from 'react'
import ListaDeAlunos from './components/ListaDeAlunos/ListaDeAlunos'
import Primeiro from './components/Primeiro/Primeiro'
import Segundo from './components/Segundo/Segundo'

export default function App() {

    const aluno = "Alan Araujo"
    const turma = "1TDSR"
    const profs = ["Joseff", "Alexandre", "Sálvio", "Eduardo", "Miguel", "Cordeiro"]

    return (
        <>
            <h2>Nome do Aluno: {aluno}</h2>
            <ListaDeAlunos
            nomeProps = {aluno}
            turmaProps = {turma}
            profsProps = {profs}
            />
        </>
    )
}