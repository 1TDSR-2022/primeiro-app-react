import React from 'react';
import Carro from './components/Carro/Carro';
import ListaDeAlunos from './components/ListaDeAlunos/ListaDeAlunos';
import carroImg from './img/veraneio.webp'

export default function App(){

 

    // Gerando as informações do componente CARRO
    const infoCarro = "Carro de família"
    const infoImg = 200
    const leg = "Esse carro marcou época!"
    const listaDeCarros = ['Monza-SLE', 'Escort-XR3', 'Variant-II', 'Kadett', 'Gol-GTI']

    return(
        < > 
            <Carro
                pathImgProps={carroImg}
                infoCarroProps={infoCarro}
                infoImgProps={infoImg}
                legProps={leg}
                listaCarrosProps={listaDeCarros}
            />
        </>
    )
}