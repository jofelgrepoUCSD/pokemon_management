// Trainers table in MYSQL
module.exports = (sequelize,DataTypes)=>{
	const Trainers = sequelize.define("Trainers", {
		Name: {
			type: DataTypes.STRING,
			allowNull:true,
			primaryKey: true // This is so that id col will not be generated
		},
		Pokemon_owned: {
			type: DataTypes.STRING,
			allowNull: false,
		}
	}, 
	{
		freezeTableName: true,
		timestamps: false, 
		onDelete: 'restrict'
		// This is so that createAt and updateAT will not be generated
	});

	Trainers.associate = models => {
		Trainers.hasMany(models.Pokemons,{
			// foreignKey: 'owner',
			onDelete: "restrict"
		});		 
	}


	return Trainers;
};

