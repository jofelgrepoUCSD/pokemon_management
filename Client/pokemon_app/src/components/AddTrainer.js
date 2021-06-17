
import axios from 'axios';
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import '../index.css';

const AddTrainer = () => {

	const [name,setName] = useState("");
	const [owned,setOwned] = useState(null);

	const submitValue = () => {
		// Temporary need a redux action here
		axios.post("http://localhost:3001/api/trainers/post", {
			Name: name,
			Pokemon_owned: owned,
		}).then((res)=>{
			console.log(res)
		})
	}

	return (
		<div className="trainer-title">
		<h1 className="add-trainer-title"> Add a Trainer</h1>
		<input className="enter-name" tpye="text" placeholder="Name" onChange={e => setName(e.target.value)}></input>
		<br></br>
		<button className="add-trainer-button" onClick={submitValue}> ADD </button>
		</div>	
	 );
}
export default AddTrainer;

		// <div>
		// 	<form className="edit-form" onSubmit={this.handleSubmit}>
        //             <h5 className="add-trainer">Add Trainer</h5>
        //             <div className="input-field">
        //                 <label htmlFor="name">Name</label>
        //                 <input type="text" id="Name" onChange={this.handleChange} />
        //             </div>
        //         </form>
		// </div>

		// const frmdetails = {
		// 	'Name': name,
		// 	'Pokemon_owned': null,
		// }