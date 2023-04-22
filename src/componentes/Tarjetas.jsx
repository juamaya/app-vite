import React from 'react'
import './Tarjetas.css'
import cuadro  from './images/cuadro-electrico.jpg'
import cnc  from './images/cnc-casera.jpg'
import welder  from './images/spot-welder.jpg'
import cutter  from './images/foam-cutter.jpg'


const Tarjetas = () => {
  return (
   <div className="container">

        <div className="card">

            <div className="face front">
                <img src={cuadro} alt="cuadro-electrico"/>
                <h3>cuadro-electrico</h3>
            </div>

            <div className="face back">
                <h3>cuadro </h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt commodi asperiores magni facere
                    quasi
                </p>
                <div className="link">
                    <a href="#">Details</a>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="face front">
                <img src={cnc} alt="cnc-casera"/>
                <h3>cnc-casera</h3>
            </div>

            <div className="face back">
                <h3>cnc </h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt commodi asperiores magni facere
                    quasi
                </p>
                <div className="link">
                    <a href="#">Details</a>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="face front">
                <img src={welder} alt="spot-welder"/>
                <h3>spot-welder</h3>
            </div>

            <div className="face back">
                <h3> welder</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt commodi asperiores magni facere
                    quasi
                </p>
                <div className="link">
                    <a href="#">Details</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face front">
                <img src={cutter} alt="foam-cutter"/>
                <h3>foam-cutter</h3>
            </div>

            <div className="face back">
                <h3> cutter</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt commodi asperiores magni facere
                    quasi
                </p>
                <div className="link">
                    <a href="#">Details</a>
                </div>
            </div>
        </div>
    </div>

  )}
 
 
export default Tarjetas