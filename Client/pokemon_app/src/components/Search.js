import axios from 'axios';
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import '../index.css';


const Search = () => {

	const [trainersList,setTrainersList] = useState([]);
  	const [pokemonList,setPokemonList] = useState([]);
  
  	// Run immediately when page renders
  	useEffect(()=> {
  	  axios.get("http://localhost:3001/api/trainers/find/" ,{ params: {Name: 'CJ'}}).then((res)=>{
  	    setTrainersList(res.data);
		 console.log("Called")
  	    console.log(res);
  	  });
  	},[])

	return (

    <div className="App">
		
		{trainersList.map((person,index) => (
			<p>   {person.Name}    </p>
		))}		


     </div>
	);
}
 
export default Search;