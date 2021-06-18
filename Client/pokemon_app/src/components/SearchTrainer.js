import axios from 'axios';
import {useEffect,useState} from 'react';
import {Link, Redirect, useHistory} from 'react-router-dom';
import SearchResult from './SearchResult';
import '../index.css';


const SearchTrainer = () => {

	 /*  Approach: 
	  *	 Create 2 search bar one for trainer and pokemon
	  *	 Fetch both trainer list and Pokemon list
	  *	 First search bar is for trainer and uses trainers list
	  *	 Second search bar is for pokemon and uses pokemon list
	  *  	- we use pokemon list to return its owner.
	  *  Redirect to a screen to display trainer's party.
	  *  
	  *   Note: Not sure why I return a list of trainer.
	  */

	const [trainersList,setTrainersList] = useState([]);
  	const [pokemonList,setPokemonList] = useState([]);


	const [lookFor,setLookFor] = useState("");
	const [trainer,setTrainer] = useState("");
	const [pokemon,setPokemon] = useState("");

	const result = [];
	const history = useHistory();

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

	  const showResult = () => {
		console.log(result)
		history.push({
			pathname:'/searchResult',
			state: {detail: result}
		})
	  }
	  const searchNow = (e) => {
		e.preventDefault();
		//const result = []
		// First search in the trainer's list
		for (var i =0; i < trainersList.length;i++){
			if(trainersList[i].Name == lookFor){
				result.push(trainersList[i].Name)
				//go To result page maybe fire a method
				showResult();
				return
			}
		}
		// If user's input is a pokemon then search the pokemon list
		for (var i = 0; i < pokemonList.length;i++){
			if(pokemonList[i].Name == lookFor){
				result.push(pokemonList[i].TrainerName)
			}
		}
		if (result.length != 0){
			showResult();
		}
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