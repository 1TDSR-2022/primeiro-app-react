import React from "react";
import Carro from "./Components/Carro/Carro";
import ListaDeAlunos from "./Components/ListaDeAlunos/ListaDeAlunos";
import carroImg from "./img/Carro.webp";

export default function App() {
  //Gerando as informações do componente CARRO
  const infoCarro = "Carro de familia.";
  const infoImg = 200;
  const leg = "Esse carro é bom!";

  const listaDeCarros = [
    "Monza-SLE",
    "Escort-XR3",
    "Variant-II",
    "Kadett",
    "Gol-GTI",
  ];

  return (
    <>
      <Carro
        pathImgProps={carroImg}
        infoCarroProps={infoCarro}
        infoImgProps={infoImg}
        legProps={leg}
        listaDeCarrosProps={listaDeCarros}
      />
    </>
  );
}
