import React, { useState, useContext } from "react"
import "../../styles/pagination.css"
import { Context } from "../store/appContext"

 const Pagination = ({ moviesPerPage, totalMovies, paginate }) => {

    const {store} = useContext(Context)
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalMovies/moviesPerPage); i++){
        pageNumbers.push(i);
    }
    console.log(pageNumbers)

   /*  const [number, setNumber] = useState(1); */
   /*  console.log("numero antes return: "+number); */
  /*  useEffect(() => {
       paginate(store.currentPage)
   }, []) */
   const lastPage = pageNumbers.length;
   const firstPage = pageNumbers[0];
   const [page, setPage] = useState(1);

   function nextPage() {
       setPage(page+1) 
   };

   function previousPage(){
       setPage(page-1)
   };

    return(
        <nav className="pagination-numbers">
            <ul className="pagination">
                <a className="page-link-arrows" onClick={()=>(previousPage() , paginate(page))}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>
                </a>
                {pageNumbers.map(number => (

                    <li key={number} className="page-item">
                        
                        <a onClick={() => paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
                <a className="page-link-arrows" onClick={()=>(nextPage() ,paginate(page))}>
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