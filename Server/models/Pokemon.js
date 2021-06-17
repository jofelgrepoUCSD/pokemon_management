// Pokemon table in MYSQL
module.exports = (sequelize,DataTypes)=>{
	const Pokemons = sequelize.define("Pokemons", {
		instance:{
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey:true,
			allowNull: false,
		},
		ID: {
			type: DataTypes.INTEGER,
			allowNull:false,
			//primaryKey: true // This is so that id col will not be generated
		},
		Name: {
			type: DataTypes.STRING,
			allowNull:false,
		},
		Move: {
			type: DataTypes.STRING,
			allowNull:false,
		},
		Type: {
			type: DataTypes.STRING,
			allowNull:false
		},
	}, {
		freezeTableName: true,
		timestamps: false 
		// This is so that createAt and updateAT will not be generated
	});
	// Pokemons.associate = models => {
	// 	Pokemons.belongsTo(models.Trainers, {
	// 		onDelete: 'restrict'
	// 	})
	// }
	return Pokemons;
};