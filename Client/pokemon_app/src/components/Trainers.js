import axios from 'axios';
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import DeletePokemon from './DeletePokemon';
import DeleteTrainer from './DeleteTrainer';
import '../index.css';


const Trainer = () => {

	const [trainersList,setTrainersList] = useState([]);
  	const [pokemonList,setPokemonList] = useState([]);
  
  	// Run immediately when page renders
  	useEffect(()=> {
  	  axios.get("http://localhost:3001/api/trainers/getall").then((res)=>{
  	    setTrainersList(res.data);
  	    console.log(res);
  	  });

	  axios.get("http://localhost:3001/api/pokemons/get").then((res)=>{
	  	setPokemonList(res.data);
	  	console.log(res);
   	  });
  	},[])

	return (

    <div className="App">
		
	  <Link to="/addTrainer">
	  	<button className="add-trainer-btn">Add Trainer</button>
	  </Link>
	  <Link to="/search">
	  	<button className="search-trainer-btn">Search Trainer</button>
	  </Link>
      {trainersList.map((trainer,key) => {
        return <div className="trainer-title">
                 <span className="card-title"><strong>{trainer.Name}</strong></span>
				 <DeleteTrainer trainer={trainer}> </DeleteTrainer>
                <div className="pokemon-content">
                  <p className="pokemon-title"> Pokemons: </p>   
                  {trainer.Pokemons.map((pokemon,index) => {
					  return (
					  	<div className="pokemon-disp"> 
							{pokemon.Name} -
							Type: {pokemon.Type} -
							Move: {pokemon.Move} 
							<DeletePokemon pokemon={pokemon}></DeletePokemon> 
					 	</div>
					  )// end of return
                  })}
	    		<Link to={'/addPokemon/'+ trainer.Name}>
	  					<button className="add-pokemon-btn">Add pokemon</button>
	   			</Link>



                </div> 
	  				{/* <Link to="/addPokemon">
	  					<button className="add-pokemon">Add pokemon</button>
	  				</Link> */}
              </div>
      })} 

     </div>
	);
}
 
export default Trainer;