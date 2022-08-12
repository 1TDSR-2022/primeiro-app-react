import React from 'react'
//import ListaDeAlunos from './components/ListaDeAlunos/ListaDeAlunos'
import ModelosDeCarros from './components/ModelosDeCarros/ModelosDeCarros'
import carroImg from './img/charger1970.webp'
//import Primeiro from './components/Primeiro/Primeiro'
//import Segundo from './components/Segundo/Segundo'

export default function App() {

    // const aluno = "Valentina Fuzaro"
    // const turma = "1TDSR"
    // const profs = ["Josef", "Alexandre", "Sálvio", "Eduardo", "Miguel"]
    
   

    const infoCarro = "Carro de Familia"
    const infoImg = 200
    const leg = "Esse carro fez história"
    const listaDeCarros = ["Dodge Charger", "Golf-GTI", "GOL-G5", "Dodge Challenger"]

return(
    <div>
        {/* <h2>Nome do Aluno: {aluno}</h2>
        <ListaDeAlunos 
        nomeProps={aluno}
        turmaProps={turma}
        profsProps={profs}
        /> */}

        <ModelosDeCarros>
            pathImgProps={carroImg}
            infoCarroProps={infoCarro}
            infoImgProps={infoImg}
            legProps={leg}
            listaDeCarrosProps={listaDeCarros}
        </ModelosDeCarros>
    </div>
)
}


