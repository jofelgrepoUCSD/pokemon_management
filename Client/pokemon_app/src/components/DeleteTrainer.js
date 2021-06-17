import qs from 'qs';
import axios from 'axios';
import {useEffect,useState} from 'react';
import {useHistory,Link} from 'react-router-dom';
import '../index.css';

const DeleteTrainer = (props) => {

	 const {trainer} = props;
	 const history = useHistory();
	
	const handleDelete = () =>{
	
		// Check if pokemon array is empty or not
		if (trainer.Pokemons.length === 0){
			alert("Trainer was deleted")
			// Temporary! need a redux action here
			axios.delete("http://localhost:3001/api/trainers/delete", 
			{data: {Name: trainer.Name }}
			).then((res)=>{
				console.log(res)
			})
			window.location.reload();	
		} else { // -> cannot deleted
			alert("Need to Clear the pokemon")
		}
	}

	return (
		<div className="container">
			<button className="delete-trn-btn" onClick={handleDelete}>Delete Trainer</button>
		</div>	

	 );
}
export default DeleteTrainer;