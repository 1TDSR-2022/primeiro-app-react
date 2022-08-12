import React from 'react';
import './App.css';
import ListaDeAluno from './components/Header/ListaDeAluno/ListaDeAluno';

const App = () => {
  const tag = <h1><strong>Olá React</strong></h1>
  const aluno = 'Pedro Santos' 
  const turma = '1TDSA'

  return (
    <>
      <h2>Nom de Aluno: { aluno }</h2>
      <ListaDeAluno />
    </>
  );
}

export default App;
