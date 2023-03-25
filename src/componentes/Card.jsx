import React from "react";


const Card = (props) => {
  return (
    <>
      <div>Card</div>
     
       
      <div className="card mx-3 text-dark bg-info border border-dark border-3 ">
        <img src={props.img} className="card-img-top" alt="papa" />
        <div className="card-body">
          <p className="card-text">
          {props.texto}
          </p>
        </div>
        <a href= {props.href} target="_blank"  className="btn btn-primary">{props.sitio}</a>
      </div>
    </>
  );
};

export default Card;
