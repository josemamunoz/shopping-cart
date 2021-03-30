import React, { useContext, useState, useEffect } from "react";
import "../../styles/carrito.css";
import { Context } from "../store/appContext";


export const Carrito = () => {

  const { store, actions } = useContext(Context);

  const [load, setLoad] = useState("")
  const [show, setShow] = useState("");

  return (
    <>
      <div className="container2">

        <div className="fila">
          {store.carrito.map((movie) => (

            <div className="fila-carrito">
              <img className="fila-imagen " src={`${movie.Poster}`} alt="Card image cap" />
              
              <div className="fila-contenido">
                  <h5 className="fila-titulo">{movie.Title}</h5>
                  <p className="fila-texto">{movie.Type}</p>
                  <p className="fila-texto">{movie.Year}</p>
                  
                </div>
                <a className="boton-eliminar-carrito" onClick={(e) => actions.removeItems(e, movie)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
                  </a>
            </div>
          ))}
        </div>

        <div className="resumen">
          <div className="resumen-titulo">Resumen del pedido</div>
          <div className="resumen-productos">{store.carrito.length} Productos</div>
          <div className="resumen-total">Total</div>
          <button className="resumen-item">Ir a Pagar</button>
        </div>
      </div>




    </>
  );
}
