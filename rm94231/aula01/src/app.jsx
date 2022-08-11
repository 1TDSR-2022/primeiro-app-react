import React from 'react';
import ListaDeAlunos from './components/listaDeAlunos/ListaDeAlunos';


export default function App() {
    const aluno = "João Silva"
    const turma = "1TDSR"
    const profs = ["Joseffe", "Alexandre", "Sálvio", "Eduardo", "Miguel", "Cordeiro"]

    return(
        <>
          <h1>Nome do Aluno:{aluno}</h1>
          <ListaDeAlunos nomeProps={aluno} turmaProps={turma} profsProps={profs}/>
        </>
    )
}