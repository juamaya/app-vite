import React, { useState, useEffect } from "react";

const RickAndMorty = (props) => {
  const [num, setNum] = useState(1);

  function mas() {
    return setNum(num + 1);
  }

  function menos() {
    if (num === 0) {
      alert(" No hay Imagen Anterior. Pulsa Ver Imagen Siguiente");
      return setNum(1);
    } else {
      return setNum(num - 1);
    }
  }

  const imagen = `https://rickandmortyapi.com/api/character/avatar/${num}.jpeg`;

  return (
    <>
      <div className="text-center  ">
        <img
          className="img-fluid rounded-pill border border-danger border-5"
          src={imagen}
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

export default RickAndMorty;
