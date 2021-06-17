// Instantiate Express
const express = require('express');
const app = express();

// Initiate and Setup Cors : Allows our APIconnection  
const cors = require('cors');
app.use(cors());


// Reference  Database
const db = require("./models");
const PORT = process.env.PORT || 3001;

// Bring in Router
const apiRoutes = require('./routes/apiRoutes');
app.use("/api",apiRoutes);

//setup stuff
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// app.listen(PORT, () =>{
// 	console.log('connected to localhost:3001');
// })

db.sequelize.sync().then(() => {
	app.listen(PORT, () =>{
		console.log(`listening on: http://localhost:${PORT}`);
	})
})
