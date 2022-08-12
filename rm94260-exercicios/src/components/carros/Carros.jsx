import React from "react";

const Carros = ( props ) => {

  return (
    <>
      <h2>Modelos de Carros</h2>
      <figure>
        <img src={ props.carroImage } alt={  props.infoCarro } width={ props.infoImg } />
        <figcaption>{ props.leg }</figcaption>
      </figure>
      <ul className="ul">
        { props.list.map((car, idx) => <li key={ idx }> { idx + 1 } - { car }</li>) }
      </ul>
    </>
  );
};

export default Carros;
