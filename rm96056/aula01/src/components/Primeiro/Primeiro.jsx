import React from "react";
import './Primeiro.css';

export default function Primeiro() {
    const nome = "Guilherme"
    const profissao = "Desenvolvedor"
    return (
        <div className='divPrimeiro'>
            <h3>Primeiro Componente</h3>
            <p>Nome: {nome}</p>
            <p>Profissao: {profissao}</p>
        </div>
    )
}