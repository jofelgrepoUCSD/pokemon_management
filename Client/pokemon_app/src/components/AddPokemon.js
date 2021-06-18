import axios from 'axios';
import {useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {addPokemon} from '../redux/actions/ProjectActions'
// import {Link} from 'react-router-dom';
import '../index.css';


const AddPokemon = (props) => {

	const dispatch = useDispatch();
	// Implementing Redux
	const [pokemonForm,setPokemonForm] = useState({
		ID: " ",
		Name: " ",
		Type: " ",
		Move: " ",
	})


	const handleInputChange = (e) => {
		e.preventDefault()
		const {name,value} = e.target;
		setPokemonForm({
			...pokemonForm,
			[name]:value
		})
	}


	// This is the trainer that was clicked
	const {trainer} = props.match.params;
	const history = useHistory();

	// const [id,setID] = useState(0);
	// const [name,setName] = useState("");
	// const [move,setMove] = useState("");
	// const [type,setType] = useState("");

	const submitValue = () => {

		axios.post("http://localhost:3001/api/pokemons/post", {
			ID: pokemonForm.ID, 
			Name: pokemonForm.Name,
			Move: pokemonForm.Move,
			Type: pokemonForm.Type,
			TrainerName: trainer,
			}).then((res) => {
			console.log("AddPokemon res",res);
			dispatch(addPokemon({
				instance: res.data.instance,
				ID: pokemonForm.ID, 
				Name: pokemonForm.Name,
				Move: pokemonForm.Move,
				Type: pokemonForm.Type,
				TrainerName: trainer,
			})); 

		})
		history.push('/')


		// Temporary need a redux action here
		// axios.post("http://localhost:3001/api/pokemons/post", {
		// 	ID: id,
		// 	Name: name,
		// 	Move: move,
		// 	Type: type,
		// 	TrainerName: trainer,
		// }).then((res)=>{
		// 	console.log(res)
		// })
		// history.push('/');
		// window.location.reload();
	}
	return ( 
		<div className="add-poke-container">
			<form className="edit-form" onSubmit={submitValue}>

  	                  <h1 className="add-poke-title">Add a Pokemon</h1>
					
  	                  <div className="input-field">
  	                      <label htmlFor="ID">ID: </label>
  	                      <input type="text" id="ID" name="ID" onChange={handleInputChange}></input> 
					
  	                      <label htmlFor="Name">Name: </label>
  	                      <input type="text" id="Name" name="Name" onChange={handleInputChange}></input> 

  	                      <label htmlFor="Move">Move: </label>
  	                      <input type="text" id="Type" name="Type" onChange={handleInputChange}></input> 

  	                      <label htmlFor="Type">Type: </label>
  	                      <input type="text" id="Move" name="Move"onChange={handleInputChange}></input> 
  	                  </div>
						<div className="btn-div">
							  <button className="add-poke-btn"> ADD</button>
						</div>
			</form>
		</div>
	);
}
 
export default AddPokemon;