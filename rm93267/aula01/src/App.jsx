import React from 'react'
import ListaDeAlunos from './components/ListaDeAlunos/ListaDeAlunos'
import Primeiro from './components/Primeiro/Primeiro'
import Segundo from './components/Segundo/Segundo'

    export default function App() {

        const aluno = "Lucas Morais"
        const turma = "1TDSR"
        const profs = ["Alexandre","Josefe","Sálvio","Eduardo","Miguel","Cordeiro"]


    return (
        <>
          <h2>Nome do aluno: {aluno}</h2>
          <ListaDeAlunos
          nomeProps={aluno}
          turmaProps={turma}
          profsProps={profs}
          />
        </>
    )
}