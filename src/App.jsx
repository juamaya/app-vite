 
import "./App.css";
import Footer from "./componentes/Footer"; 
import Home from "./componentes/Paginas/Home";
import Carrusel from "./componentes/Carrusel";
import Card from './componentes/Card'
import BotonScroll from "./componentes/BotonScroll";
import Tarjetas from "./componentes/Tarjetas";
import VerPokemon from "./componentes/VerPokemon";
import RickAndMorty from "./componentes/RickAndMorty";
import Reproductor from "./componentes/Reproductor";
import BATTERY from './componentes/videos/BATTERY.mp4'
import SOLDADORA from './componentes/videos/SOLDADORA.mp4'

import papa from "./componentes/imagenes/papa.jpg";
import mama from "./componentes/imagenes/mama.jpg";
import juan from "./componentes/imagenes/juan.jpg";
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
       <div className="row text-center container-fluid">
        <div className="col-md-4">
          <Card img={papa} texto="Juan" href= "https://google.com" sitio="Google" />
        </div>
        <div className="col-md-4">
          <Card img={juan} texto="YO" href="https://juamaya.github.io/curricujuan.github.io/"sitio="Curriculum"/>
        </div>

        <div className="col-md-4">
          <Card img={mama} texto="Antonia" href=  "https://youtube.com"  sitio="youtube"/>
        </div>
        </div>
       <div className="container-fluid text-center fw-bold fs-4">Cards</div>
     
       <hr/>
      <Tarjetas/>
      <hr />
        <div className="container-fluid text-center fw-bold fs-4">POKEMON</div>
        <VerPokemon width="200" />
        <hr />
        <div className="container-fluid text-center fw-bold fs-3">
          RickAndMorty
        </div>
        <RickAndMorty width="200 "/>
        <hr />

        <div className="container-fluid text-center d-flex  fw-bold fs-3 ">
    Videos
          <Reproductor video={BATTERY} />
          
          <Reproductor video={SOLDADORA} />

        </div>
       
        <hr />
        <div className="container-fluid text-center fw-bold fs-3">
          <h2>GALERIA DE FOTOS</h2>
        
           <a  className="btn btn-primary" href="https://juamaya.github.io"  target="_blank">VER GALERIA</a>
        </div>

       <hr/>
       <BotonScroll/>
       <hr/>
       <Footer/>
   </div>
    );
  }