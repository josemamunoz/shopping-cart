const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			movies: [],
			carrito: [],
			total: undefined,
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
				store.carrito.push(movie)
				setStore({
					...store.carrito
				})
				/* console.log(store.favorites) */
			},
			removeItems: (evento, item) => {
				const store = getStore();
				store.carrito = store.carrito.filter((seleccion) => item.Title !== seleccion.Title);
				setStore({
					...store.carrito
				})
			}
			
	},
};
}

export default getState;
