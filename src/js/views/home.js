import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";


export const Home = () => {

  const { store, actions } = useContext(Context);

  const [ carro, setCarro] = useState("")
  const [load, setLoad] = useState("")
  const [show, setShow] = useState("");

  useEffect(() => {
  }, [store.carrito]);


  function agregarCompras(pelicula, e) {
    store.carrito.push(pelicula);
    e.preventDefault();
    setCarro({... carro})

  }

  return (
    <>
      <div className="container1">
            <div className="cards">
            {store.movies.map((movie) => (
              <div className="card" key={movie.imdbID}>
                <img className="card-img " src={`${movie.Poster}`} alt="Card image cap" />
                <div className="card-body ">
                  <h5 className="card-title m-1">{movie.Title}</h5>
                  <p className="card-text m-1">{movie.Type}</p>
                  <p className="card-text m-1">{movie.Year}</p>
                  <button className="boton-agregar" onClick={(e)=> actions.getCarrito(movie, e) } key={movie.imdbID}>Añadir al carrito</button>
                </div>
              </div>
               ))}
            </div>
         
      </div>




    </>
  );
}

