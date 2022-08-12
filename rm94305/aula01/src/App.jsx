import React from 'react'
import ListaDeAlunos from './components/ListaDeAlunos/ListaDeAlunos'
import carroImg from './img/veraneio.webp'

export default function App(){
    const aluno = "Milena Vitoria"
    const turma = "1TDSR"
    const profs = ["Josef", "Alexandre","Sálvio", "Eduardo", "Miguel", "Cordeiro"]

    //Gerando as informações do componente Carro
    const infoCarro = "Carro de família"
    const infoImg = 200
    const leg = "Esse carro marcou época!"
    const listaDeCarros = ['Monza-SLE', 'Escort-XR3', 'Variant-II', 'Kadett', 'Gol-GTI']



    return(
        <div>
            <Carro
                pathImgProps = {carroImg}
                infoCarroProps = {infoCarro}
                infoImgProps ={infoImg}
                legProps={leg}
                listaCarrosprops={listaDeCarros}
            />
        </div>
    )



    return(
        <>
            <h2>Nome do aluno:{aluno}</h2>
            <ListaDeAlunos 
            nomeProps={aluno}
            turmaProps={turma}
            profsProps={profs}
            />
        </>
    )
}