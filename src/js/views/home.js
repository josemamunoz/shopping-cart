import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";


export const Home = () => {

  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container1">
            <div className="cards">
            {store.movies.map((movie) => (
              <div className="card">
                <img className="card-img " src={`${movie.Poster}`} alt="Card image cap" />
                <button className="boton-agregar" onClick={(e)=> actions.getCarrito(movie, e)} key={movie.imdbID}>Añadir al carrito</button>
                <div className="card-body ">
                  <h5 className="card-title">{movie.Title}</h5>
                  <p className="card-text">{movie.Type}</p>
                  <p className="card-text">{movie.Year}</p>
                </div>
              </div>
               ))}
            </div>
         
      </div>




    </>
  );
}

