import axios from 'axios';
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
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
	const [resultList,setResultList] = useState([]);

	const [trainer,setTrainer] = useState("");
	const [pokemon,setPokemon] = useState("");



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

	  

	  const searchByTrainer = (e) => {

		// console.log(trainer`VsList[1].Name)
		// console.log(trainer)
		e.preventDefault();
		for (var i =0; i < trainersList.length;i++){

			if(trainersList[i].Name == trainer){
				console.log("Trainer is", trainersList[i].Name);
			}
		}
	  }

	  const searchByPokemon = (e) => {
		
		e.preventDefault();
		for (var i = 0; i < pokemonList.length;i++){
			if(pokemonList[i].Name === pokemon){
				console.log(pokemonList[i].TrainerName);
			}			
		}
	  }


	return (

    <div className="App">
		
		<form className="trainer-form" onSubmit={searchByTrainer}>
			<h1 className="search-trainer-title">Search Trainer</h1>
			<div className="trainer-input-field">
				<label htmlFor="Trainer">Search by Trainer: </label>
				<input type="text" id="Trainer" onChange={e => setTrainer(e.target.value)}></input> 
			</div>
			<div className="btn-div">
				  <button className="trainer-search-btn">Search</button>
			</div>
		</form>


		<form className="trainer-form" onSubmit={searchByPokemon}>
			<div className="trainer-input-field">
				<label htmlFor="Pokemon">Search by Pokemon: </label>
				<input type="text" id="Pokemon" onChange={e => setPokemon(e.target.value)}></input> 
			</div>
			<div className="btn-div">
				  <button className="trainer-search-btn">Search</button>
			</div>
		</form>
	 </div>
	);
}
 
export default SearchTrainer;