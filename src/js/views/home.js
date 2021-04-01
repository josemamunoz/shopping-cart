import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";


export const Home = () => {

  const { store, actions } = useContext(Context);

  const [cerrarPopup, setCerrarPopup] = useState(false)


  return (
    <>
     {store.itemagregado ? 
                <div className={"item-agregado" + cerrarPopup} onClick={()=> setCerrarPopup(false)}>
                    <div className="item-agregado-texto">Se ha agregado {store.itemagregado.Title} al carrito de compras </div>
                    <div className="boton-cerrar">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg></div>

                    </div>
                    
                    : <div></div> 

            }
      <div className="container1">
            <div className="cards">
            {store.movies.map((movie) => (
              <div className="card">
                <img className="card-img " src={`${movie.Poster}`} alt="Card image cap" />
                <button className="boton-agregar" onClick={(e)=> (actions.getCarrito(movie, e), setCerrarPopup(true))} key={movie.imdbID}>Añadir al carrito</button>
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

