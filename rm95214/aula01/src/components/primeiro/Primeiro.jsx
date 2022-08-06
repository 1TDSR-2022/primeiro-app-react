import React from "react"
import './Primeiro.css'

export default function Primeiro(){
    const nome = 'Igor'
    const profissao = 'Logistica'
    return(
        <div className="divPrimeiro">
            <h3>Primeiro Componete</h3>
            <p>Nome: {nome}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}