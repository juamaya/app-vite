import React from 'react'

const Cards = (props) => {
  return (
    <>
    
    <div className ="container mt-3">
<div className ="card-group">
  <div className ="card mx-3 text-dark bg-info border border-dark border-3">
    <img src={props.img} className="card-img-top p-2  " alt="car"/>
    <div className ="card-body border border-dark bg-warning">
      <h5 className ="card-title ">Card title</h5>
      <p className ="card-text ">This is a wider card with supporting text below as a natural  </p>
      
    </div>
  </div>
  <div className ="card mx-3 text-dark bg-info border border-dark border-3">
    <img src={props.img1} className ="card-img-top p-2" alt="car1"/>
    <div className ="card-body border border-dark bg-warning">
      <h5 className ="card-title">Card title</h5>
      <p className ="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      
    </div>
  </div>
  <div className ="card mx-3 text-dark bg-info border border-dark border-3">
    <img src={props.img2} className ="card-img-top p-2" alt="car2"/>
    <div className ="card-body border border-dark bg-warning">
      <h5 className ="card-title">Card title</h5>
      <p className ="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. .</p>
     
    </div>
    </div>
  </div>
</div>
</>
  )
}

export default Cards