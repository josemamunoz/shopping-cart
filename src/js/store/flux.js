import { StaticRouter } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			movies: [],
			carrito: [],
			total: undefined,
			suma: 0,
			totalItems: 0,
			itemagregado: [],
			prices: [],
			moviesWithprices: [],
			lastMovieRemovedPxC: 0
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
				setStore({
					moviesWithprices: (store.movies.map((movie)=>(
						{ 
							Title: movie.Title,
							Price: store.prices[store.movies.indexOf(movie)],
							Year: movie.Year,
							imdbID: movie.imdbID,
							Type: movie.Type,
							Poster: movie.Poster,
							units: 0,
							unitsxprice: 0						
						})))
				})
			},
			getCarrito: movie =>{
				const store = getStore();
				store.itemagregado = movie;
				console.log(movie.units);
				if(movie.units > 0){
					movie.units +=1;
					movie.unitsxprice = movie.unitsxprice + (movie.Price * movie.units);
					store.suma += movie.Price;
					store.totalItems +=1;					
				} else{
					store.carrito.push(movie);
					movie.units +=1;
					store.totalItems +=1;
					store.suma += movie.Price;
					setStore({
						itemagregado: store.itemagregado,
					})
				}
			},
			removeItems: (evento, movie) => {
				const store = getStore();
				store.carrito = store.carrito.filter((seleccion) => movie.Title !== seleccion.Title);
				setStore({
					lastMovieRemovedPxC: (movie.units * movie.Price)
				})
				store.suma += - store.lastMovieRemovedPxC;
				setStore({
					lastMovieRemovedPxC: 0
				})
			},
			addProducts: (movie) =>{
				const store = getStore();
				movie.units += 1;
				store.totalItems += + 1;
				store.suma += movie.Price;
			},
			removeProducts: (movie) =>{
				const store = getStore();
				console.log(movie.units)
				if(movie.units > 1){
					movie.units += -1
					store.totalItems += -1
					store.suma += -movie.Price
				}
				
			}
			
	},
};
}

export default getState;
