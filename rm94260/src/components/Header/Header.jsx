import React from 'react'

const Header = () => {
    const nome = "Pedro";
    const profissao = "Desenvolvedor";

  return (
    <div>
      <h3>Primeiro Componet</h3>
      <p>Nome { nome }</p>
      <p>Profissão { profissao }</p>
    </div>
  )
}

export default Header
