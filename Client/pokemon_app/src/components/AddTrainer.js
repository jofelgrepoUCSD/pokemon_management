import axios from 'axios';
import {useEffect,useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {addTrainer} from '../redux/actions/ProjectActions'
import '../index.css';


const AddTrainer = () => {

	const dispatch = useDispatch();

	// Redux Implementation
	const [trainerForm,setTrainerForm] = useState({
		Name:" ",
		Pokemon_owned: " ",
	});

	const handleInputChange = (e) => {
		e.preventDefault()
		const {name,value} = e.target;
		setTrainerForm({
			...trainerForm, 
			[name]:value
		})
	}
	const history = useHistory();


	const submitValue = () => {

		axios.post("http://localhost:3001/api/trainers/post", {
			Name: trainerForm.Name, 
			Pokemon_owned: "",
			}).then((res) => {
			console.log(res)
			dispatch(addTrainer({
				Name: trainerForm.Name,
				Pokemon_owned: "",
				Pokemons: []
			})); 

		})
		history.push('/')
	}
	

	return (
		<div className="trainer-title">
		<h1 className="add-trainer-title"> Add a Trainer</h1>
		<input className="enter-name" type="text" placeholder="Name" name="Name" autoComplete="off" onChange={handleInputChange}></input>
		<br></br>
		<button className="add-trainer-button" onClick={submitValue}> ADD </button>
		</div>	
	 );
}

export default AddTrainer;
