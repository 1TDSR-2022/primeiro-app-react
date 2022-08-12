import React from 'react'

const ListaDeAluno = () => {
const profs = ["Josef", "Alexandre", "Sálvio"]

  return (
    <>
        <ul>
            <li>Pedro</li>
            <li>Vitor</li>
            <li>Marcelo</li>
            <li>Gabriel</li>
        </ul>
    
        <ul>
            { profs.map(( prof, idx ) => <li key={idx}>{ prof }</li>) }
        </ul>
    </>
  )
}

export default ListaDeAluno