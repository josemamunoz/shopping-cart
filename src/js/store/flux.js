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
				/* store.carrito.push(movie); */
				store.itemagregado = movie;
				console.log(movie.units);
				if(movie.units > 0){
					movie.units +=1;
					movie.unitsxprice = movie.unitsxprice + (movie.Price * movie.units);
					store.suma += movie.unitsxprice ;
					store.totalItems +=1;
					console.log(store.totalItems);
				} else{
					console.log("menor a 1");
					store.carrito.push(movie);
					movie.unitsxprice = movie.Price
					movie.units +=1;
					store.suma += movie.unitsxprice ;
					store.totalItems = store.totalItems + movie.units
					setStore({
						itemagregado: store.itemagregado,
					})
					console.log(store.totalItems);
				}
				/* movie.units > 0 ? movie.units +=1 :
				movie.units +=1;
				setStore({
					suma : (parseInt(store.suma) + parseInt(movie.Price)),
					itemagregado: store.itemagregado,
				}) */
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
