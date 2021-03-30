import React, { useContext, useState, useEffect } from "react";
import "../../styles/carrito.css";
import { Context } from "../store/appContext";


export const Carrito = () => {

  const { store, actions } = useContext(Context);

  const [load, setLoad] = useState("")
  const [show, setShow] = useState("");

  return (
    <>
      
      <div className="container ">

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {store.movies.map((movie) => (

            <div className="col-3 mb-4 ">
              <div className="card h-100 border-0 bg-transparent text-white">
                <img className="card-img "  alt="Card image cap" />
                <div className="card-body ">
                  <h5 className="card-title m-1">{movie.Title}</h5>
                  <p className="card-text m-1">{movie.Type}</p>
                  <p className="card-text m-1">{movie.Year}</p>
                  <a className="btn btn-primary ">Añadir al carrito</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>




    </>
  );
}
