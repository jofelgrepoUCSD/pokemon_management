import qs from 'qs';
import axios from 'axios';
import {useEffect,useState} from 'react';
import {useHistory,Link} from 'react-router-dom';
import '../index.css';

const DeletePokemon = (props) => {

	const {pokemon} = props;
	const history = useHistory();
	
	const handleDelete = () =>{
		// Temporary need a redux action here
		axios.delete("http://localhost:3001/api/pokemons/delete", 
		{data: {instance: pokemon.instance }}
		).then((res)=>{
			console.log(res)
		})
		window.location.reload();
	}

	return (
		<div className="dlt-pokemon">
			<button className="myButton" onClick={handleDelete}>Delete</button>
		</div>	

	 );
}
export default DeletePokemon;

		// <div>
		// 	<form className="edit-form" onSubmit={this.handleSubmit}>
        //             <h5 className="add-trainer">Add Trainer</h5>
        //             <div className="input-field">
        //                 <label htmlFor="name">Name</label>
        //                 <input type="text" id="Name" onChange={this.handleChange} />
        //             </div>
        //         </form>
		// </div>

		// const frmdetails = {
		// 	'Name': name,
		// 	'Pokemon_owned': null,
		// }