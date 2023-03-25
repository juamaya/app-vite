import React from "react";
import ReactPlayer from "react-player";

const Reproductor = (props) => {
  return (
    <>
      <div className="  mx-5">
        <h2>Reproductor</h2>
        <hr />
        <ReactPlayer url={props.video} width="75%" height="75%" controls />
        <hr />
      </div>
    </>
  );
};

export default Reproductor;
