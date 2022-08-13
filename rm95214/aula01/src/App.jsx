import React from 'react'
import Primeiro from './components/primeiro/Primeiro'
import Segundo from './components/segundo/segundo'
import Cabecalho from './components/execicio/cabecalho'
import Carros from './components/execicio/Carros'





export default function App() {
    const tag = <h1><strong>Olá React!</strong></h1>
    return (
        <div>
            <h1>App-React</h1>
            {tag}
            <h2>Subtítulo</h2>
            <Primeiro />
            <Segundo />
            <Cabecalho/>
            <Carros/>
        </div>
    )
}