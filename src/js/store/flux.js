import { StaticRouter } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			movies: [],
			carrito: [],
			total: undefined,
			suma: 0,
			itemagregado: [],
			prices: [],
			moviesWithprices: []
		},
		actions: {
			getMovies: async url => {
				const response = await fetch(url);
				const data = await response.json();
				const actions = getActions();
				setStore({
					movies: data.Search,
					total: data.totalResults,
				})
				actions.getPrices();
				actions.getMoviesWithPrices();
				
			},
			getPrices: movie => {
				const store = getStore();
				const moviePrices = store.movies.map((movie)=>((Math.floor(Math.random() * 10) *100)+1000))
				setStore({
					prices: moviePrices,
				})
				
			},
			getMoviesWithPrices: movies => {
				const store = getStore();
				/* store.moviesWithprices(store.movies.map((movie)=>(
					{ 
						title: movie.Title,
						price: store.prices[store.movies.indexOf(movie)],
						year: movie.Year,
						imdbID: movie.imdbID,
						type: movie.Type,
						poster: movie.Poster
					}))); */
				setStore({
					moviesWithprices: (store.movies.map((movie)=>(
						{ 
							Title: movie.Title,
							Price: store.prices[store.movies.indexOf(movie)],
							Year: movie.Year,
							imdbID: movie.imdbID,
							Type: movie.Type,
							Poster: movie.Poster
						})))
				})
			},
			getCarrito: movie =>{
				const store = getStore();
				store.carrito.push(movie);
				store.itemagregado = movie;
				setStore({
		/* 			...store.carrito, */
					suma : (parseInt(store.suma) + parseInt(movie.Price)),
					itemagregado: store.itemagregado,
				})
			},
			removeItems: (evento, item) => {
				const store = getStore();
				store.carrito = store.carrito.filter((seleccion) => item.Title !== seleccion.Title);
				setStore({
		
					suma : (parseInt(store.suma) - parseInt(item.Price)),
				})
			}
			
	},
};
}

export default getState;
