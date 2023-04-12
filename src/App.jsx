 
import "./App.css";
import Footer from "./componentes/Footer"; 
import Home from "./componentes/Paginas/Home";
import Carrusel from "./componentes/Carrusel";
import Cards from './componentes/Cards'
import BotonScroll from "./componentes/BotonScroll";

import car from "./componentes/imagenes/car.png";
import car1 from "./componentes/imagenes/car1.png";
import car2 from "./componentes/imagenes/car2.png";
import car3 from "./componentes/imagenes/car3.png";
import car4 from "./componentes/imagenes/car4.png";
import car5 from "./componentes/imagenes/car5.png";

export default function App() {
  return (
    <div >
      
       <h1 className=" bg-primary text-center init">APP____AMAYA</h1>
       <Carrusel/>
       <hr/>
       <div className="container-fluid text-center fw-bold fs-4">Cards</div>
       <Cards img={car} img1={car1}  img2={car2}/>
       <hr/>
       <Cards img={car3} img1={car4}  img2={car5}/>
       <hr/>
       <Home/>
       <hr/>
       <BotonScroll/>
       <hr/>
       <Footer/>
   </div>
    );
  }