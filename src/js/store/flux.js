const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			movies: [],
			carrito: [],
			total: undefined,
			suma: 0,
			valores: []
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
				store.valores.push(movie.Year);
				setStore({
					...store.carrito,
					suma : (parseInt(store.suma) + parseInt(movie.Year)),
					...store.valores,
				})
			},
			removeItems: (evento, item) => {
				const store = getStore();
				store.carrito = store.carrito.filter((seleccion) => item.Title !== seleccion.Title);
				setStore({
					...store.carrito,
				})
			},
			sumaItems: (items) => {
				const store = getStore();
				items.forEach(item => {
					console.log(item.Year)
				});
			}
			
	},
};
}

export default getState;
