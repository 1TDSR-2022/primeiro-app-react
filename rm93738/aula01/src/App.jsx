import React from 'react'
import Primeiro from './components/Primeiro/Primeiro'
import Segundo from './components/Segundo/Segundo'
import './index.css'



export default function App(){
    const tag = <h1>App React</h1>
    return(
        <div>
        <h1>App-React</h1>
        <h2>Subtitulo</h2>
        {tag}
        <Primeiro/>
        <Segundo/>
        </div>
    )
} 