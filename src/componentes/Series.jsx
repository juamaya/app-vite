import React, { useState, useEffect } from "react";

const Series = () => {
  const [data, setData] = useState([]);

 
  const cartoons2D = "https://api.sampleapis.com/cartoons/cartoons2D";

  const getData = async () => {
    const resp = await fetch(cartoons2D);
    const data = await resp.json();
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.map((d) => {
        return (
          <div className="container  " key={d.id}>
            <div className="row ">
            <div className="col-md-4 text-center ">
                <img
                  className="img-fluid  border border-danger border-4  w-50 mx-10"
                  src={d.image}
                  alt="imagen"
                />  
              </div>


              <div className="col-md-8 mx-10 ">
                <ul className="fs-4">
                  <li>
                    <strong>Titulo:</strong> {d.title}{" "}
                  </li>
                  <li>
                    <strong>Creador:</strong> {d.creator}{" "}
                  </li>

                  <li>
                    <strong>Año:</strong> {d.year}
                  </li>
                </ul>
              </div>
             
              <hr />
            </div>
          </div>
        );
      })}

      {/* <h3 className="text-dark"> title: {data.title}</h3>   */}

      {/* <pre>{JSON.stringify(data, null, 2)}</pre>  */}
    </>
  );
};

export default Series;
