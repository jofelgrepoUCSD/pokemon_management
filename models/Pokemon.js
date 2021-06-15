// Pokemon tablee in MYSQL
module.exports = (sequelize,DataTypes)=>{
	const Pokemon = sequelize.define("Pokemon", {
		ID: {
			type: DataTypes.INTEGER,
			allowNull:false,
			primaryKey: true // This is so that id col will not be generated
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
		}
	}, {
		timestamps: false 
		// This is so that createAt and updateAT will not be generated
	});
	return Pokemon;
};