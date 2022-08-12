
import React from 'react';
import ListaDeAlunos from './components/ListaDeAlunos/ListaDeAlunos';
import Carroimg from './components/Carros/img/MicrosoftTeams-image (1).png'
import Carros from './components/Carros/Carros'

export default function App() {
    const aluno = "Guilherme Ferreira"
    const turma = "1TDSR"
    const profs = ["Joseffe", "Alexandre", "Sálvio", "Eduardo", "Miguel", "Cordeiro"]

            // Gerando as informações do componete CARRO

    const infoCarro = "Carro de família."
    const infoimg = 200
    const leg = "Esse carro marcou época!"
    const listaDeCarros = ["Monza, Escort, Variant, Kadett, Gol"]
    const pathimg = Carroimg

    return (
        <div>
           <Carros
           pathimgProps={pathimg}
           infoCarroProps={infoCarro}
           infoimgPropos={infoimg}
           legProps={leg}
           />
        </div>
    )
}

