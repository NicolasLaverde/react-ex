import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Cotizador from './Cotizador';
import Contacto from './Contacto';	

export default class Routing extends Component {

	render(){
		return(
		<BrowserRouter>
			<Switch>
				<Route path="/soat" exact render={(props) => <Cotizador{...props} />} />
				<Route path="/contacto" exact render={(props) => <Contacto{...props}/>} />
			</Switch>
		</BrowserRouter>
		)
	}
};