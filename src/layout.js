import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import injectContext from "./js/store/appContext";


import { Home } from "./js/views/home";
import { Carrito } from "./js/views/carrito";
import { Navbar } from "./js/components/navbar";


export const Layout = () => {

	const basename = process.env.BASENAME || "";

	return (
			<BrowserRouter basename={basename}>
					<Navbar/>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/carrito" component={Carrito} />
					</Switch>
				{/* 	<Footer /> */}
			</BrowserRouter>
	);
};

export default injectContext(Layout);