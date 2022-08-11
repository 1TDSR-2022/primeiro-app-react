import React from 'react';
import Primeiro from './components/Primeiro/Primeiro'

export default function App() {
    const tag = <h1><strong>Olá React</strong></h1>
    return(
        <div>
            <h1>App-React</h1>
            {tag}
            <h2>Subtitulo</h2>
            <Primeiro/>
        </div>
    )
}