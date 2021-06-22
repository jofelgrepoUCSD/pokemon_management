import axios from 'axios';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import DeletePokemon from './DeletePokemon';
import DeleteTrainer from './DeleteTrainer';
import '../index.css';
import {useSelector, useDispatch} from 'react-redux';
import {setProject} from '../redux/actions/ProjectActions';


const Trainer = () => {

	// Implementing Redux
	// We get what ever we have from Redux store
	// very similar to map state to props
	const project = useSelector((state) => state.rootReducer.project); 
    const dispatch = useDispatch();

	// Fetch Product from database
	const fetchProject = () => {
  	  	axios.get("http://localhost:3001/api/trainers/getall").then((res)=>{
		  dispatch(setProject(res.data))
  	  	});
	}

	useEffect( () => {
		fetchProject();
	},[])

	return (
    <div className="App">
		
	  <Link to="/addTrainer">
	  	<button className="add-trainer-btn">Add Trainer</button>
	  </Link>
	  <Link to="/search">
	  	<button className="search-trainer-btn">Search Trainer</button>
	  </Link>

      {project.map((trainer,key) => {
        return <div className="trainer-title">
                 <span className="card-title"><strong>{trainer.Name}</strong></span>
				 <DeleteTrainer trainer={trainer}> </DeleteTrainer>
                <div className="pokemon-content">
                  <p className="pokemon-title"> Pokemons: </p>   
                  {trainer.Pokemons.map((pokemon,index) => {
					  return (
					  	<div className="pokemon-disp"> 
							<h3> {pokemon.Name} </h3> <br></br>
							Type : {pokemon.Type} ,
							Move : {pokemon.Move} ,
							ID: {pokemon.ID} 
							<DeletePokemon pokemon={pokemon}></DeletePokemon> 
					 	</div>
					  )// end of return
                  })}
	    		<Link to={'/addPokemon/'+ trainer.Name}>
	  					<button className="add-pokemon-btn">Add pokemon</button>
	   			</Link>
                </div> 
              </div>
      })} 

     </div>
	);
}
 
export default Trainer;