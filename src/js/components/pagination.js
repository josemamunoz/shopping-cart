import React, { useState, useContext } from "react"
import "../../styles/pagination.css"
import { Context } from "../store/appContext"

 const Pagination = ({ moviesPerPage, totalMovies, paginate }) => {

    const {store} = useContext(Context)
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalMovies/moviesPerPage); i++){
        pageNumbers.push(i);
    }
   
   const [previousPage, setPreviousPage] = useState(0);
   const [currentPage, setCurrentPage] = useState(1);
   const [nextPage, setNextPage] = useState(2);


   function next() {
    if(nextPage >= pageNumbers.length){
        setPreviousPage(pageNumbers.length -1);
        setCurrentPage(pageNumbers.length); 
        setNextPage(pageNumbers.length);
    }else{
        setPreviousPage(previousPage+1);
        setCurrentPage(currentPage+1);
        setNextPage(nextPage+1);
    }
   };

   function previous(){
    if(previousPage <= 1){
        setPreviousPage(1);
        setCurrentPage(1);
        setNextPage(2);
    }else{
        setPreviousPage(previousPage-1);
        setCurrentPage(currentPage-1); 
        setNextPage(nextPage-1);
    }
   };
   function lastPage(numero) {
    setPreviousPage(numero -1);
    setCurrentPage(numero);
    setNextPage(numero);
    
   };

    return(
        <nav className="pagination-numbers">
            <ul className="pagination">
                <a className="page-link-arrows" onClick={()=>(previous() , paginate(previousPage))}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>
                </a>
                <a className="page-link-current" onClick={()=>(paginate(currentPage))}>
                {currentPage}
                </a>
                <a className="pagination-texto">
                de
                </a>
                <a className="page-link" onClick={()=>(lastPage(pageNumbers.length) ,paginate(pageNumbers.length))}>
                {pageNumbers.length}
                </a>
                <a className="page-link-arrows" onClick={()=>(next() ,paginate(nextPage))}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
                </a>
            </ul>
            
        </nav>
    )
}

export default Pagination;

/* Para mapear todas las paginas */
{/* {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        
                        <a onClick={() => paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))} */}