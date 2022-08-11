import React from 'react'
//import ListaDeAlunos from './components/ListaDeAluno/ListaDeAlunos';
import Carro from './components/img/veraneio.webp'
//import Primeiro from './components/Primeiro/Primeiro'
//import Segundo from './components/Segundo/Segundo'

export default function App() {
    
    const aluno = "Trapotina Fuzaro";
    const turma = "1TDSR";
    const profs = ["Josef", "Alexandre", "Sálvio", "Eduardo", "Miguel", "Cordeiro"]

    // Gerando informações do componente CARRO
    const InfoCarro = "Carro de familia"
    const infoImg = 200
    const leg = "Esse carro marcou época!"

    return (
        <div>
            <Carro
             pathImgProps = {carroImg}
             infoCarroProps = {InfoCarro}
             infoImgProps={infoImg}
             legProps={leg}
            /> 
        </div>
    )
}