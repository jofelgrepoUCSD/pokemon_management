// Trainers table in MYSQL
module.exports = (sequelize,DataTypes)=>{
	const Trainers = sequelize.define("Trainers", {
		Name: {
			type: DataTypes.STRING,
			allowNull:false,
			primaryKey: true // This is so that id col will not be generated
		},
		Pokemon_owned: {
			type: DataTypes.STRING,
			allowNull:false
		}
	}, {
		timestamps: false 
		// This is so that createAt and updateAT will not be generated
	});
	return Trainers;
};

