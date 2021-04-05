import React, { useContext, useState, useEffect } from "react";
import "../../styles/carrito.css";
import { Context } from "../store/appContext";
import Pagintaion from "../components/pagination"
import { Link } from "react-router-dom";


export const Carrito = () => {

  const { store, actions } = useContext(Context);

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(4);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovie = store.carrito.slice(indexOfFirstMovie, indexOfLastMovie);
  
  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
    {store.carrito.length === 0 ? 
    (
      <div className="carrito-vacio">
        <div className="texto-carrito-vacio">Carrito vacio  :C </div>
        <Link className="boton-regresar" to="/">Regresar</Link>
      </div>
      ):

    <div className="container2">

    <div className="fila" /* onChange={actions.sumaItems(store.carrito)} */>
      {currentMovie.map((movie) => (

        <div className="fila-carrito">
          <img className="fila-imagen " src={`${movie.Poster}`} alt="Card image cap" />
          
          <div className="fila-contenido">
              <h5 className="columna-titulo">{movie.Title}</h5>
              <p className="columna-texto">{movie.Type}</p>
              <p className="columna-texto">{movie.Year}</p>
              <p className="columna-price">${movie.Price}</p>
              
            </div>
            <a className="boton-eliminar-carrito" onClick={(e) => actions.removeItems(e, movie)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
              </a>
        </div>
      ))}
      <Pagintaion moviesPerPage={moviesPerPage} totalMovies={store.carrito.length} paginate={paginate}/>
    </div>

    <div className="resumen">
      <div className="resumen-titulo">Resumen del pedido</div>
      <div className="resumen-productos">
      <div className="total-text">{store.carrito.length} Productos</div><div className="total-number"> &#36; {store.suma}</div>
      </div>
      <div className="resumen-entrega">
      <div className="total-text">Entrega</div><div className="total-number"> &#36; 1000</div>
      </div>
      <div className="resumen-total">
        <div className="total-text">Total</div><div className="total-number"> &#36; {store.suma + 1000}</div>
      </div>
      <button className="boton-pagar">Ir a Pagar</button>
    </div>
  </div>

    }
      



    </>
  );
}
