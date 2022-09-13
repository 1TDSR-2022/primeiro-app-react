import React from 'react'
import './Primeiro.css'

export default function Primeiro(){
    const nome='Luis'
    const profissao = 'Administrador'
    return(
        <div className='divPrimeiro'>
            <h3>Primeiro componente</h3>
            <p>Nome: {nome}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}