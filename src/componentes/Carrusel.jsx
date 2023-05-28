import React from "react";
import car from "./imagenes/car.png";
import car1 from "./imagenes/car1.png";
import car2 from "./imagenes/car2.png";
import car3 from "./imagenes/car3.png";
import car4 from "./imagenes/car4.png";
import car5 from "./imagenes/car5.png";
import car6 from "./imagenes/car6.png";

const Carrusel = () => {
  const tiempo = 2000;
  return (
    <>
      <div className="container-fluid text-center fw-bold fs-4">
        Carrusel de coches
      </div>

      <div
        id="carouselExampleControls"
        className="carousel slide  "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={tiempo}>
            <img src={car} className="d-block w-50  " alt="car" />
          </div>
          <div className="carousel-item" data-bs-interval={tiempo}>
            <img src={car1} className="d-block w-50" alt="car1" />
          </div>
          <div className="carousel-item" data-bs-interval={tiempo}>
            <img src={car2} className="d-block w-50" alt="car2" />
          </div>
          <div className="carousel-item" data-bs-interval={tiempo}>
            <img src={car3} className="d-block w-50" alt="car3" />
          </div>
          <div className="carousel-item" data-bs-interval={tiempo}>
            <img src={car4} className="d-block w-50" alt="car4" />
          </div>
          <div className="carousel-item" data-bs-interval={tiempo}>
            <img src={car5} className="d-block w-50" alt="car5" />
          </div>
          <div className="carousel-item" data-bs-interval={tiempo}>
            <img src={car6} className="d-block w-50" alt="car6" />
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next "
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon text-dark"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </>
  );
};

export default Carrusel;
