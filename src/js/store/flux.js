const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			movies: [],
			carrito: [],
			total: undefined,
			suma: 0,
			itemagregado: [],
		},
		actions: {
			getMovies: async url => {
				const response = await fetch(url);
				const data = await response.json();
				setStore({
					movies: data.Search,
					total: data.totalResults,
				})
				
			},

			getCarrito: movie =>{
				const store = getStore();
				store.carrito.push(movie);
				store.itemagregado = movie;
				setStore({
					...store.carrito,
					suma : (parseInt(store.suma) + parseInt(movie.Year)),
					itemagregado: store.itemagregado,
				})
			},
			removeItems: (evento, item) => {
				const store = getStore();
				store.carrito = store.carrito.filter((seleccion) => item.Title !== seleccion.Title);
				setStore({
					...store.carrito,
					suma : (parseInt(store.suma) - parseInt(item.Year)),
				})
			},
			/* handlePage: pageNumber =>{
				const store = getStore();
				store.currentPage = pageNumber;
				store.nextPage = pageNumber +1;
				store.previousPage = pageNumber -1;
				setStore({
					currentPage: store.currentPage,
					nextPage: store.nextPage,
					previousPage: store.previousPage,
				})
			} */
			
	},
};
}

export default getState;
