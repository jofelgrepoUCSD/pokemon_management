import axios from 'axios';
import {useDispatch} from 'react-redux'
import {deletePokemon} from '../redux/actions/ProjectActions'
import '../index.css';

const DeletePokemon = (props) => {

	const {pokemon} = props;
	const dispatch = useDispatch();

	const handleDelete = () =>{

		// Delete a pokemon here using its instance	
		axios.delete("http://localhost:3001/api/pokemons/delete", 
		{
			data: 
			{
				instance: pokemon.instance 
			}
		}
		).then((res)=>{
			// Update the Redux Store	
			dispatch(deletePokemon(
				{ TrainerName:pokemon.TrainerName,
				  instance: pokemon.instance,	
				}))
		})

		// Get the target trainer we need to update.
		axios.get("http://localhost:3001/api/trainers/getone?Name=	" + pokemon.TrainerName,
		).then((res)=>{
			updateUser(res);
		}).catch(err=> console.log(err));

		// Update the target trainer's pokemon_owned table.
		const updateUser = (res) => {

			var curr_owned = res.data[0].Pokemon_owned;
			var arr_owned = curr_owned.split(",");
			let newValue = arr_owned.filter(id => id != pokemon.ID);

			// Update the database
			axios.put("http://localhost:3001/api/trainers/put",{
				data: {
						Name: pokemon.TrainerName,
						Pokemon_owned:newValue.toString(),
				}}).then((res)=>{
					console.log("Succesfully udpated database")
				})
		}
	}

	return (
		<div className="dlt-pokemon">
			<button className="myButton" onClick={handleDelete}>Delete</button>
		</div>	

	 );
}
export default DeletePokemon;