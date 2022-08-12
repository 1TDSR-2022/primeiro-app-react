import React from 'react'
import Carros from './components/Carro/Carros'
import carroImg from './img/veraneio.webp'

export default function App() {
    
    const aluno = "Valentina Fuzaro"
    const turma = "1TDSR"
    const profs = ["Josef","Alexandre","Sálvio","Eduardo","Miguel","Cordeiro"]
    
    //Gerando as informações do componente Carro
    const infoCarro =  "Carro de Familía."
    const infoImg =  200
    const leg = "Esse carro marcou época"
    const listaDeCarros = "Gol, Corsa. Astra. Vectra, Onix"



    return (
        <div>
            <Carros
            pathImgProps= {carroImg}
            infoCarroProps={infoCarro}
            infoImgProps={infoImg}
            legProps={leg} 
            listaCarrosProps={listaDeCarros}
            />
        </div>
    )
}