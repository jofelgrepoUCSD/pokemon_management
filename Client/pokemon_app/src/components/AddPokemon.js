import axios from 'axios';
import {useEffect,useState} from 'react';
import {useHistory,useLocation} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {addPokemon} from '../redux/actions/ProjectActions'
// import {Link} from 'react-router-dom';
import '../index.css';


const AddPokemon = (props) => {


	const dispatch = useDispatch();
	const history = useHistory();
	const location = useLocation();

	const {trainer} = props.match.params;

	// Implementing Redux
	const [pokemonForm,setPokemonForm] = useState({
		ID: " ",
		Name: " ",
		Type: " ",
		Move: " ",
	})

	const[targetTrainer,setTargetTrainer] = useState([])
	const[alltrainer,setAllTrainer] = useState([])

	useEffect( () => {
		axios.get("http://localhost:3001/api/trainers/getall").then((res)=>{
			setAllTrainer(res.data)	
		})
	},[])

	const handleInputChange = (e) => {
		e.preventDefault()
		const {name,value} = e.target;
		setPokemonForm({
			...pokemonForm,
			[name]:value
		})
	}

	const submitValue = async (e) => {

		e.preventDefault();
		axios.post("http://localhost:3001/api/pokemons/post", {
			ID: pokemonForm.ID, 
			Name: pokemonForm.Name,
			Move: pokemonForm.Move,
			Type: pokemonForm.Type,
			TrainerName: trainer,
			}).then((res) => {
			dispatch(addPokemon({
				instance: res.data.instance,
				ID: pokemonForm.ID, 
				Name: pokemonForm.Name,
				Move: pokemonForm.Move,
				Type: pokemonForm.Type,
				TrainerName: trainer,
			}));
		})
		
		// 1.  Kuhanin Trainer Table ng iuupdate
		axios.get("http://localhost:3001/api/trainers/getone?Name=	" + trainer,
		).then((res)=>{
			console.log(res);
			setTargetTrainer(res);
			updateUser(res);
		}).catch(err=> console.log(err));

		const updateUser = (res) => {
			var newValue = ""
			var curr_owned = res.data[0].Pokemon_owned;
			if(curr_owned.length === 0){
				newValue = newValue + pokemonForm.ID;
			} else {
			 	newValue = curr_owned + "," + pokemonForm.ID;
			}

			axios.put("http://localhost:3001/api/trainers/put",{
				data: {
						Name: trainer,
						Pokemon_owned:newValue,
				}}).then((res)=>{
					console.log("PUT")
				})
		}

		// 2. Logic ng string to array tapos concatenate yun bagong pokemon ID

		// 3. axios.put para i update
		history.push('/')

		
	}

	return ( 
		<div className="add-poke-container">
			<form className="edit-form" onSubmit={submitValue}>

  	                  <h1 className="add-poke-title">Add a Pokemon</h1>
					
  	                  <div className="input-field">
  	                      <label htmlFor="ID">ID: </label>
  	                      <input type="text" id="ID" name="ID" autoComplete="off" onChange={handleInputChange}></input> 
					
  	                      <label htmlFor="Name">Name: </label>
  	                      <input type="text" id="Name" name="Name" autoComplete="off" onChange={handleInputChange}></input> 

  	                      <label htmlFor="Move">Move: </label>
  	                      <input type="text" id="Type" name="Type" autoComplete="off" onChange={handleInputChange}></input> 

  	                      <label htmlFor="Type">Type: </label>
  	                      <input type="text" id="Move" name="Move"autoComplete="off" onChange={handleInputChange}></input> 
  	                  </div>
						<div className="btn-div">
							  <button className="add-poke-btn"> ADD</button>
						</div>
			</form>
		</div>
	);
}
 
export default AddPokemon;