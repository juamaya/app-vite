 
import Card from "../Card";
import papa from "../imagenes/papa.jpg";
import mama from "../imagenes/mama.jpg";
import juan from "../imagenes/juan.jpg";
import VerPokemon from "../VerPokemon";
import RickAndMorty from "../RickAndMorty";
import Series from "../Series";
import Reproductor from "../Reproductor";
import BATTERY from '../videos/BATTERY.mp4'
import SOLDADORA from '../videos/SOLDADORA.mp4'

const Home = () => {
  return (
    <>
      <div className="container-fluid text-center fw-bold fs-4">Home</div>
      <div className="row">
        <div className="col-md-4">
          <Card img={papa} texto="Juan" href= "https://google.com" sitio="Google" />
        </div>
        <div className="col-md-4">
          <Card img={juan} texto="YO" href="https://juamaya.github.io/curricujuan.github.io/"sitio="Curriculum"/>
        </div>

        <div className="col-md-4">
          <Card img={mama} texto="Antonia" href=  "https://youtube.com"  sitio="youtube"/>
        </div>
        <hr />
        <div className="container-fluid text-center fw-bold fs-4">POKEMON</div>
        <VerPokemon width="200" />
        <hr />
        <div className="container-fluid text-center fw-bold fs-3">
          RickAndMorty
        </div>
        <RickAndMorty width="200 "/>
       
        <hr />
        <Reproductor video={BATTERY} />
        <hr />
        <Reproductor video={SOLDADORA} />
        <hr />
        <div className="container-fluid text-center fw-bold fs-3">
          <h2>Series</h2>
          <hr />
          <Series  />
        </div>
       
   

      </div>
    </>
  );
};

export default Home;
