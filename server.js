// Instantiate Express
const express = require('express');
const app = express();

// Reference  Database
const db = require("./models");
const PORT = process.env.PORT || 3000;

//setup stuff
app.use(express.urlencoded({extended:true}));
app.use(express.json());

db.sequelize.sync().then(() => {
	app.listen(PORT, () =>{
		console.log(`listening on: http://localhost:${PORT}`);
	})
})
