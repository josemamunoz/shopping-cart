import React, { useContext} from "react";
import { Context } from "../store/appContext"
import "../../styles/navbar.css"
import { Link } from "react-router-dom";

export const Navbar = () => {

    const { store, actions } = useContext(Context);

    return(
        <nav className="navbar" >
            <Link className="navbar-brand" to="/">Peliculas</Link>
            <div className="navbar-drop" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                <Link  className="dropbtn" to="/carrito">
                    <svg xmlns="http://www.w3.org/2000/svg" id="carrito" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
                    <span className="badge rounded-pill bg-light text-dark">{store.carrito.length}</span>
                </Link>

                {<div id="myDropdown" className={"dropdown-items"}>
                    <ul>
                        {store.carrito.length === 0 ? <div></div> :
                        store.carrito.map((item) =>{
                        return(
                        <li className="dropdown-lista" id={item.imdbID}>
                            {item.Title} 
                            <a className="boton-eliminar" onClick={(e) => actions.removeItems(e, item)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
                            </a>
                        </li>
                    )
                    })}
                    </ul>
                    <button type="button" className="boton-ver">Ver carrito</button>
                </div>}
                    </li>
                </ul>
            </div>
        </nav>
   )};

