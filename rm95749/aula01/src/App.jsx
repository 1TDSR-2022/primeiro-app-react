import React from 'react'
import ListaDeAlunos from './components/ListaDeAlunos/ListaDeAlunos'
import Primeiro from './components/Primeiro/Primeiro'
import Segundo from './components/Segundo/Segundo'

export default function App() {
    
        const aluno = "Valentina Fuzaro"
        const turma = "1TDSR"
        const profs = ["Joseffe","Alexandre","Sálvio","Eduardo","Miguel","Cordeiro"]

    return (
        <>
            <h2>Nome do aluno:{aluno}</h2>
            <ListaDeAlunos
            nomeProps={aluno}
            turmaProps={turma}
            profs={profs}
            />
        </>
    )
}