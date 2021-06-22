import axios from 'axios';
import {useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom';
import '../index.css';


const SearchTrainer = () => {

	const [trainersList,setTrainersList] = useState([]);
  	const [pokemonList,setPokemonList] = useState([]);

	const [lookFor,setLookFor] = useState("");

	const result = [];
	const history = useHistory();

	// First fetch all the data from database,both trainer and pokemon
  	useEffect(()=> {
		
		// Get all the trainer
		axios.get("http://localhost:3001/api/trainers/getall").then((res)=>{
  	    	setTrainersList(res.data);
  	    	console.log(res);
  	  	});

		// Get all the pokemon
	 	axios.get("http://localhost:3001/api/pokemons/get").then((res)=>{
		  	setPokemonList(res.data);
		  	console.log(res);
   	    });
  	},[])

	// First search inside the trainer table to find a trainer 
	const searchNow = (e) => {
		e.preventDefault();
		for (var i =0; i < trainersList.length;i++){
			// if found add the result to the list and call showResult()
			if(trainersList[i].Name == lookFor){
				result.push(trainersList[i].Name)
				showResult();
				return
			}
		}
		// If user's input is a pokemon then search the pokemon list instead
		for (var i = 0; i < pokemonList.length;i++){
			if(pokemonList[i].Name == lookFor){
				result.push(pokemonList[i].TrainerName)
			}
		}
		// Call showResult method only if result list is non empty
		if (result.length != 0){
			showResult();
		}
	  }

	  // go to result page and pass the result as a prop
	  const showResult = () => {
		history.push({
			pathname:'/searchResult',
			state: {detail: result}
		})
	  }

	return (

    <div className="App">
		
		<form className="trainer-form" onSubmit={searchNow}>
			<h1 className="search-trainer-title">Search Trainer</h1>
			<div className="trainer-input-field">
				<label htmlFor="Trainer">Search: </label>
				<input type="text" id="Trainer" onChange={e => setLookFor(e.target.value)}></input> 
			</div>
			<div className="btn-div">
				  <button className="trainer-search-btn">Search</button>
			</div>
		</form>
	 </div>
	);
}
 
export default SearchTrainer;