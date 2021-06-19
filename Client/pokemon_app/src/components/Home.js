import axios from 'axios';
import {useEffect,useState} from 'react';
import '../index.css';
import Navbar from '../components/NavBar';
import Trainer from '../components/Trainers';
import {Route,Switch,BrowserRouter} from 'react-router-dom';


function Home() {

  return (
    <div className="Home">
      <Trainer></Trainer>
     </div>
  ) 
} 

export default Home;