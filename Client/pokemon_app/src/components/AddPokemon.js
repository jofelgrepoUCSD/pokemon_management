import axios from 'axios';
import {useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom';
// import {Link} from 'react-router-dom';
import '../index.css';


const AddPokemon = (props) => {

	// This is the trainer that was clicked
	const {trainer} = props.match.params;

	const history = useHistory();

	const [id,setID] = useState(0);
	const [name,setName] = useState("");
	const [move,setMove] = useState("");
	const [type,setType] = useState("");

	const submitValue = () => {
		// Temporary need a redux action here
		axios.post("http://localhost:3001/api/pokemons/post", {
			ID: id,
			Name: name,
			Move: move,
			Type: type,
			TrainerName: trainer,
		}).then((res)=>{
			
			console.log(res)
		})
		history.push('/');
		window.location.reload();
	}
	return ( 
		<div className="add-poke-container">
			<form className="edit-form" onSubmit={submitValue}>

  	                  <h1 className="add-poke-title">Add a Pokemon</h1>
					
  	                  <div className="input-field">
  	                      <label htmlFor="ID">ID: </label>
  	                      <input type="text" id="ID" onChange={e => setID(e.target.value)}></input> 
					
  	                      <label htmlFor="Name">Name: </label>
  	                      <input type="text" id="Name" onChange={e => setName(e.target.value)}></input> 

  	                      <label htmlFor="Move">Move: </label>
  	                      <input type="text" id="Move" onChange={e => setMove(e.target.value)}></input> 

  	                      <label htmlFor="Type">Type: </label>
  	                      <input type="text" id="Type" onChange={e => setType(e.target.value)}></input> 
  	                  </div>
						<div className="btn-div">
							  <button className="add-poke-btn"> ADD</button>
						</div>
			</form>
		</div>
	);
}
 
export default AddPokemon;