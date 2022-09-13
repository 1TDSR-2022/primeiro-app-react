import React from 'react'
import Primeiro from './components/Primeiro/Primeiro'
import Segundo from './components/Segundo/Segundo'
import ListaDeAlunos from './components/ListaDeAlunos/ListaDeAluno'
import './index.css'

export default function App(){
    
    const aluno = "Luis Perestrelo"
    const turma = "1TDSR"
    const profs = ["Joseff", "Alexandre", "Sálvio", "Eduardo", "Cordeiro", "Miguel"]

    return(
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