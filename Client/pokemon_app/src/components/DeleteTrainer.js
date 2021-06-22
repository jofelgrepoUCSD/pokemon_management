import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {deleteTrainer} from '../redux/actions/ProjectActions'
import '../index.css';

const DeleteTrainer = (props) => {

	 const {trainer} = props;
	 const dispatch = useDispatch();
	
	const handleDelete = () =>{
	
		// Check if pokemon array is empty or not
		if (trainer.Pokemons.length === 0){
			alert("Trainer was deleted")
			
			// Update the database by deleting the trainer
			axios.delete("http://localhost:3001/api/trainers/delete", 
			{data: {Name: trainer.Name }}
			).then((res)=>{
				// Update the Redux Store
				dispatch(deleteTrainer({Name:trainer.Name}))
			})
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