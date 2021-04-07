import React, { useContext, useState, useEffect } from "react";
import "../../styles/carrito.css";
import { Context } from "../store/appContext";
import Pagintaion from "../components/pagination"
import { Link } from "react-router-dom";


export const Carrito = () => {

  const removeIcon = <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13H5v-2h14v2z"/></svg>
  const addIcon = <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
  const { store, actions } = useContext(Context);

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(4);

  const [handleChange, setHandleChange] = useState([]);

  function changeListener() {
    setHandleChange([])
  }

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovie = store.carrito.slice(indexOfFirstMovie, indexOfLastMovie);
  
  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  function stateChange() {
    console.log("stateChange")
  }
  useEffect(() => {
    console.log("suma useeffect: " + store.suma)
    return ("suma useeffect return: " + store.suma)
  }, [store.suma])

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
              <div className="carrito-div1">
                <h5 className="columna-titulo">{movie.Title}</h5>
                <div className="columna-texto">{movie.Type} - {movie.Year}</div>
              </div>
              <div className="carrito-div2">
                <div className="carrito-input">
                  <div className="remove-button" onClick={()=>(actions.removeProducts(movie), changeListener())} >{removeIcon}</div>
                  <input type="number" className="quantity-form" value={movie.units}></input>
                  <div className="add-button" onClick={()=>(actions.addProducts(movie), changeListener())} onChange={()=> console.log("onchange")}>{addIcon}</div>
                </div>
              </div>
              <div className="carrito-div3">
              <div className="columna-price">${movie.Price * movie.units}</div>
              </div>
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
        <div className="total-text">{store.carrito.length} Peliculas</div><div className="total-number"> &#36; {store.suma}</div>
      </div>
      <div className="resumen-productos">
        <div className="total-text">{store.totalItems} Productos</div><div className="total-number"> &#36; {store.suma}</div>
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
