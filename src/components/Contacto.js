import React, {Component} from 'react';
import Cotizador from './Cotizador'
export default class Contacto extends Component {

	render(){
		console.log(this.props.location.state);
		return(
			<div>
				Hola gonorrea
			</div>
			)
	}
}
