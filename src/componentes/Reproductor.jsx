import React from "react";
import ReactPlayer from "react-player";
 

const Reproductor = (props) => {
  return (
    <>
      <div className="mx-5">
    
      
        <ReactPlayer url={props.video} width="90%"  controls />
         
      </div>
    </>
  );
};

export default Reproductor;
