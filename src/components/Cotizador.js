import React, {Component} from 'react';

class Cotizador extends Component{
	constructor(){
		super();
		console.log(this);
		this.state = {
			placa:'',
			modelo:'',
			cilindraje:'',
			marca:'',
			valor:0,
			nombres:'',
			apellidos:'',
			documento:'',
			celular:'',
			telefono:'',
			email:'',
			precioSoat:0,
			paso: 1
		}
		this.handleChangeInput= this.handleChangeInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeInput(e){
		const { name, value } = e.target;
		this.setState({
				[name] : value
		});
		console.log(this.state);
	}
	handleSubmit(e){
		e.preventDefault(); 
		console.log(this.state.paso);
		this.setState({
			paso : this.state.paso + 1
		});

		if(this.state.paso === 2){
			this.props.history.push({pathname: '/contacto', state: this.state});
		}
	}

	render(){
		const showForm = () => { switch(this.state.paso){
			case 1: return (<div className="content card-body">	
					<div className="form-group row mt-10">
						<div className="col-sm-4">
							<label className="label"> Placa: </label>
						</div>
						<div className="col-sm-8">
							<input type="text" onChange={this.handleChangeInput}  value={this.state.placa.toUpperCase()} name="placa"/>
						</div>
					</div>
					<div className="form-group row mt-10">
						<div className="col-sm-4">
							<label className="label"> Nombres: </label>
						</div>
						<div className="col-sm-8">
							<input type="text"  onChange={this.handleChangeInput} value={this.state.nombres} name="nombres"/>
						</div>
					</div>
					<div className="form-group row mt-10">
						<div className="col-sm-4">
							<label className="label"> Apellidos: </label>
						</div>
						<div className="col-sm-8">
							<input type="text"  onChange={this.handleChangeInput} value={this.state.apellidos} name="apellidos"/>
						</div>
					</div>
					<div className="form-group row mt-10">
						<div className="col-sm-4">
							<label className="label"> Correo electronico: </label>
						</div>
						<div className="col-sm-8">
							<input type="text"  onChange={this.handleChangeInput} value={this.state.email} name="email"/>
						</div>
					</div>
				</div>);
				case 2: return (
				<div className="content card-body">
				 	<div className="form-group row mt-10">
						<div className="col-sm-4">
							<label className="label"> Marca: </label>
						</div>
						<div className="col-sm-8">
							<input type="text" onChange={this.handleChangeInput}  
							value={this.state.marca} name="marca"/>
						</div>
					</div>
					<div className="form-group row mt-10">
						<div className="col-sm-4">
							<label className="label"> Modelo: </label>
						</div>
						<div className="col-sm-8">
							<input type="text" onChange={this.handleChangeInput}  
							value={this.state.modelo} name="modelo"/>
						</div>
					</div>
					<div className="form-group row mt-10">
						<div className="col-sm-4">
							<label className="label"> valor Auto: </label>
						</div>
						<div className="col-sm-8">
							<input type="text" onChange={this.handleChangeInput}  
							value={this.state.valor} name="valor"/>
						</div>
					</div>
				</div>
				);
				default: return null;
			}
		}
		return (
		 <div className="App">
		 	<div className = "row">
			 	<div className="col-sm-6 offset-sm-3">
			 	<h1 className="h4"> Soat </h1>
					<div className="card">
							{showForm()}
							<div className="form-group row mt-5">
								<div className="col-sm-6 offset-sm-3">
									<button className="col-sm-12 btn btn-primary" onClick={this.handleSubmit}> Aceptar </button>
								</div>
							</div>
					</div>
				</div>
			</div>
		</div>
		)
	}
}
export default Cotizador;