import React from 'react'
import ListaDeAlunos from './components/ListaDeAlunos/ListaDeAlunos'

export default function App() {

    const aluno = 'monark'
    const prof = ['lula', 'bolsocaro', 'marinafina', 'ciroliro']
    const turma = 'lacradores'

    return (

        <>

            <h2>{aluno}</h2>

            <ListaDeAlunos
                nomeProps={aluno}
                turmaProps={turma}
                profProps={prof}
            />
            
        </>

    )

}