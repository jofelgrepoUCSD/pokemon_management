
import axios from 'axios';
import {useEffect,useState} from 'react';
import '../index.css';
import Navbar from '../components/NavBar';
import Trainer from '../components/Trainers';
import {Route,Switch,BrowserRouter} from 'react-router-dom';


function SearchResult(props) {

	// This contain the results of search
	const result = props.location.state.detail;
	
	

	// const editTrainer = async (e) => {

	//     //After the pokemon post I want to update Pokemon_owned field of user.

	// 	axios.get("http://localhost:3001/api/trainers/get",
	// 	{headers:{"Content-Tpye":"application/json"}}
	// 	).then((res)=>{
	// 		console.log(res)
	// 	}).catch(err => console.log(err));
	// }

  return (
    <div className="Home">
		{/* <button onClick={editTrainer}>hi</button> */}
		<h1 className="result-title">Search Result</h1>
		{result.map((result,index)=>{
			return (
			<div className="result">
				{result}
			</div>
			);
		})}
	 </div>
  ) 
} 

export default SearchResult;
