import React from 'react'
import Carro from './components/Carro/Carros'
import carroImg from './components/img/veraneio.webp'

export default function App() {
    
    const infoCarro ="Carro de família"
    const infoImg = 200
    const leg ="Esse carro marcou época"
    const listaDeCarros = ["Monza-SLE", "Escort-XR3", "Variant-II", 'Kadett', 'Gol-GTI']
    return (
        <>
          <Carro
            pathImgProps={carroImg}
            infoCarroProps={infoCarro}
            infoImgProps={infoImg}
            legProps={leg}
          />  
        </>
    )
}