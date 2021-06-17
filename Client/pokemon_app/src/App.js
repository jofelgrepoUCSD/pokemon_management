import axios from 'axios';
import {useEffect,useState} from 'react';
import './index.css';
import Navbar from './components/NavBar';
import Trainer from './components/Trainers';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import AddPokemon from './components/AddPokemon';
import AddTrainer from './components/AddTrainer';

function App() {

  return (

    <BrowserRouter>    
      <div className="App">
      <Navbar/>
      <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path='/search' component={Search}></Route>
          <Route path='/addPokemon/:trainer' component={AddPokemon}></Route>
          <Route path='/addTrainer' component={AddTrainer}></Route>
          {/* <Route path='/trainer/:Name' component={Trainer} */}
      </Switch>
        {/* <button ></button>
        <Navbar></Navbar>
        <Trainer></Trainer> */}
       </div>
    </BrowserRouter>
  ) 
} 

export default App;

  
  
   // const addTrainer = () => {
  //   axios.post("http://localhost:3001/api/trainers/post", {
  //     Name: trainerName,
  //     Pokemon_owned: owned,
  //   }).then(() => {
  //     console.log("success");
  //   });
  // };