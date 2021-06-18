
import axios from 'axios';
import {useEffect,useState} from 'react';
import '../index.css';
import Navbar from '../components/NavBar';
import Trainer from '../components/Trainers';
import {Route,Switch,BrowserRouter} from 'react-router-dom';


function SearchResult(props) {

	// This contain the results of search
	const result = props.location.state.detail;	

  return (
    <div className="Home">
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
