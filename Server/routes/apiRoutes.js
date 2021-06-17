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

//GET all trainers only
router.get("/trainers/get", (req,res) =>{
	db.Trainers.findAll().then(trainers => res.send(trainers));
})


// GET all the trainer with pokemon.
router.get("/trainers/getall",(req,res) => {
	db.Trainers.findAll({
		include: [db.Pokemons]
	}).then(trainers => res.send(trainers));
})

// POST a trainer OG
router.post('/trainers/post',jsonParser,(req,res)=>{
	db.Trainers.create({
		Name: req.body.Name,
		Pokemon_owned: req.body.Pokemon_owned
	}).then(submitedTrainer => res.send(submitedTrainer));
})

// DELETE a Trainer OG
router.delete('/trainers/delete',urlencodedParser,(req,res)=>{
	db.Trainers.destroy({
		where:{
			Name: req.body.Name // Make sure to fill in body instead of params
		}
	}).then(() => res.send("Deleted")).catch(function(err){
		console.log("Error! You got pokemon to feed");
	});

})

// Find all the trainer with pokemon.
router.get("/trainers/find/:Name",(req,res) => {
	db.Trainers.findAll({
		//where:{Name: req.body.Name}
 		where: {Name:req.params.Name},
	}).then(trainers => res.send(trainers));
})




// ---------------------------- Routes for Pokemon Table -------------------------------- //

// GET all pokemon only
router.get("/pokemons/get", (req,res) =>{
	db.Pokemons.findAll().then(pokemons => res.send(pokemons));
})

// POST a pokemon
router.post('/pokemons/post',jsonParser,(req,res)=>{
	db.Pokemons.create({
		ID: req.body.ID,
		Name: req.body.Name,
		Move: req.body.Move,
		Type: req.body.Type,
		// This is the foreign key
		TrainerName: req.body.owner
	}).then(submitedPokemons => res.send(submitedPokemons));
})


// DELETE a Pokemon 
router.delete('/pokemons/delete',urlencodedParser,(req,res)=>{
	db.Pokemons.destroy({
		where:{
			ID: req.body.ID // Make sure to fill in body instead of params
		}
	}).then(() => res.send("success"));

})

module.exports = router;

// POST a pokemon
// router.post('/pokemons/post',urlencodedParser,(req,res)=>{
// 	db.Pokemons.create({
// 		ID: req.body.ID,
// 		Name: req.body.Name,
// 		Move: req.body.Move,
// 		Type: req.body.Type,
// 		owner: req.body.owner
// 	}).then(db.Trainers.update({Pokemon_owned:'78'}, {where: {Name: req.body.owner}})
// 	 ).then(submitedPokemons => res.send(submitedPokemons));
// })

// router.get("/pokemons/get/:TrainerName", (req,res) =>{
// 	db.Pokemons.findAll({
// 		include: [db.Trainers],
// 		where: {TrainerName:req.params.TrainerName},
// 	}).then(pokemons => res.send(pokemons));
// })