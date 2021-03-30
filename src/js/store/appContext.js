import React, { useState, useEffect } from "react";
import getState from "./flux";


export const Context = React.createContext(null);


const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		//this will be passed as the contenxt value
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
				
				
			})
		);

		useEffect(() => {

			/* state.actions.getMovies("http://www.omdbapi.com/?s=batman&apikey=283ad911&page=1"); */
			state.actions.getMovies("http://www.omdbapi.com/?s=movie&apikey=283ad911&y=2020&page=1")
		}, []);

		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
