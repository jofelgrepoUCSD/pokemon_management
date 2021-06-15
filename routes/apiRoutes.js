/*
    apiRoutes are the API that reads and writes to the database
*/



// Instantiate express
const express = require('express');
const router = express.Router();
const db = require("../models");


// Body-parser Setup
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended:false});

// ---------------------------- Routes for Trainers Table -------------------------------- //

// GET all trainers
router.get("/trainers/get", (req,res) =>{
	db.Trainers.findAll().then(trainers => res.send(trainers));
})

// POST a trainer
router.post('/trainers/post',urlencodedParser,(req,res)=>{
	db.Trainers.create({
		Name: req.body.Name,
		Pokemon_owned: req.body.Pokemon_owned
	}).then(submitedTrainer => res.send(submitedTrainer));
})

// DELETE a Trainer
router.delete('/trainers/delete',urlencodedParser,(req,res)=>{
	db.Trainers.destroy({
		where:{
			Name: req.body.Name // Make sure to fill in body instead of params
		}
	}).then(() => res.send("success"));

})

// ---------------------------- Routes for Pokemon Table -------------------------------- //


// GET all pokemon
router.get("/pokemon/get", (req,res) =>{
	db.Pokemon.findAll().then(pokemon => res.send(pokemon));
})

// POST a pokemon
router.post('/pokemon/post',urlencodedParser,(req,res)=>{
	db.Pokemon.create({
		ID: req.body.ID,
		Name: req.body.Name,
		Move: req.body.Move,
		Type: req.body.Type
	}).then(submitedPokemon => res.send(submitedPokemon));
})

// DELETE a Pokemon 
router.delete('/pokemon/delete',urlencodedParser,(req,res)=>{
	db.Pokemon.destroy({
		where:{
			ID: req.body.ID // Make sure to fill in body instead of params
		}
	}).then(() => res.send("success"));

})









module.exports = router;