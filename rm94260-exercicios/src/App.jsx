import "./App.css";
import carro from "./assets/veraneio.webp"
import Carros from "./components/carros/Carros";

const App = () => {
  const cars = ["Testla", "McLaren", "Fusca", "Porshe"];
  const infoCarro = "Carro de Família";
  const infoImg = 200;
  const leg = "Esse carro marcou época";

  return (
    <Carros
      infoCarro={ infoCarro }
      infoImg={ infoImg }
      carroImage={ carro }
      leg={ leg }
      list={ cars }
    />
  );
};

export default App;
