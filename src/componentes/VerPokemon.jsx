import React, { useState, useEffect } from "react";

const VerPokemon = (props) => {
  const [num, setNum] = useState(0);

  function mas() {
    return setNum(num + 1);
  }

  function menos() {
    if (num === 0) {
      alert(" No hay Imagen Anterior. Pulsa Ver Imagen Siguiente")
     return setNum(0);
    } else {
     return setNum(num - 1);
    }
  }

  const imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${num}.png`;

  const imagen1 = ` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${num}.png`;

  return (
    <>
      <div className="text-center  ">
        <img
          className="img-fluid rounded-pill"
          src={imagen1}
          alt="imagen"
          width={props.width}
        />
      </div>

      <div className="text-center mt-3 ">
        <button
          className="btn btn-warning fs-5 fw-bold text-dark  mx-4"
          onClick={menos}
        >
          Ver Imagen Anterior
        </button>
        <button
          className="btn btn-warning fs-5 fw-bold text-dark "
          onClick={mas}
        >
          Ver Imagen Siguiente
        </button>
      </div>
    </>
  );
};

export default VerPokemon;
