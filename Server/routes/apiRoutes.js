/*
    apiRoutes are the API that reads and writes to the database
*/

// Instantiate express
const express = require('express');
const router = express.Router();
const db = require("../models");


// Body-parser Setup
const bodyParser = require('body-parser');
const { EmptyResultError } = require('sequelize');
const { Sequelize } = require('../models');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended:false});

// ---------------------------- Routes for Trainers Table -------------------------------- //



/** 
 * 	GET all the trainers with and Pokemons they own 
 * 
*/
router.get("/trainers/getall",(req,res) => {
	db.Trainers.findAll({
		include: [db.Pokemons]
	}).then(trainers => res.send(trainers));
})


/** 
 * 	GET all the trainers only  
 * 
*/
router.get("/trainers/get", (req,res) =>{
	db.Trainers.findAll().then(trainers => res.send(trainers));
})

/** 
 * 	POST a Trainer  
 * 
*/
router.post('/trainers/post',jsonParser,(req,res)=>{
	db.Trainers.create({
		Name: req.body.Name,
		Pokemon_owned: req.body.Pokemon_owned
	}).then(submitedTrainer => res.send(submitedTrainer));
})

/** 
 * 	GET all the trainer with and Pokemon they own 
 * 
*/
router.delete('/trainers/delete',jsonParser,(req,res)=>{
	db.Trainers.destroy({
		where:{
			Name: req.body.Name // Make sure to fill in body instead of params
		}
	}).then(() => res.send("Deleted")).catch(function(err){
		console.log("Error! You got pokemon to feed");
	});

})

/** 
 * 	Find a trainer using their name or pokemon 
 * 
*/
router.get("/trainers/find/:Name",(req,res) => {
	db.Trainers.findAll({
		//where:{Name: req.body.Name}
 		where: {Name:req.params.Name},
	}).then(trainers => res.send(trainers));
})




// ---------------------------- Routes for Pokemon Table -------------------------------- //

/** 
 * 	GET all the Pokemon 
 * 
*/
router.get("/pokemons/get", (req,res) =>{
	db.Pokemons.findAll().then(pokemons => res.send(pokemons));
})

/** 
 * 	POST a pokemon on a Trainer's party
 * 
 *
*/
router.post('/pokemons/post',jsonParser,(req,res)=>{
	db.Pokemons.create({
		ID: req.body.ID,
		Name: req.body.Name,
		Move: req.body.Move,
		Type: req.body.Type,
		// This is the foreign key
		TrainerName: req.body.TrainerName
	}).then(submitedPokemons => res.send(submitedPokemons)).catch((err)=> console.log("Erorr,Check Duplicate"));
})


/** 
 * 	DELETE a pokemon using its ID column 
 * 
*/
router.delete('/pokemons/delete',jsonParser,(req,res)=>{
	db.Pokemons.destroy({
		where:{
			instance: req.body.instance // Make sure to fill in body instead of params
		}
	}).then(() => res.send("success"));

})

module.exports = router;


