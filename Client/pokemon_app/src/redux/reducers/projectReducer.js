import { ActionTypes } from "../constants/action-types"
const initialState = {
	project:[]
}

   
// Destructure action = {type,payload}
export const projectReducer = (state = initialState, {type,payload}) => {

	switch(type) {

		case ActionTypes.SET_PROJECTS:
			return {...state,
				    project:payload}

		case ActionTypes.ADD_TRAINER:
			return {...state,
					project: [...state.project,payload]}


		case ActionTypes.ADD_POKEMON:
			return {
						...state,
						project: state.project.map((project) => {
						if (project.Name === payload.TrainerName) {
							const updatedPokemons = [...project.Pokemons, payload]
							project.Pokemons = updatedPokemons;
							return project;
							} else {
									return project;
								}
						})
					}

		case ActionTypes.DELETE_TRAINER:
			return{
				...state,
				project: state.project.filter(project => project.Name !== payload.Name)
				}

		case ActionTypes.DELETE_POKEMON:
			return{
				...state,
				project: state.project.map((project)=>{
					if(project.Name === payload.TrainerName){
						project.Pokemons.filter(pokemon => project.instance !== payload.instance)
					} else {
						return project;
					}
				})

			}



		default:
			return state;






	};
};


		// case ActionTypes.ADD_POKEMON:
		// 	return { ...state,
		// 			project: state.project.map((post) =>
		// 				   post.Name === payload.TrainerName ? 
		// 				   { ...post.Pokemon, payload } : post),
		// 	}
					// Find Name on state.project 
					// if found
					// state.project.Name
					// ...state.project.Pokemon,payload 
					// 
					// project.Name === payload.TrainerName ? { ...pos, likes: payload.likes } : post
					// ),
					// userPost: { ...state.userPost, likes: payload.likes },


				// 	posts: state.project.map((post) =>
				// 	post.Name === payload.TrainerName ? { ...post.Pokemon, payload } : post
				//   ),
				//   userPost: { ...state.userPost, likes: payload.likes },




// Dummy data

// const initialState = {
// 	// Dummy
// 	project: [
//         {
// 			Name:"Trainer1",
// 			Pokemon_owned:"",
// 			Pokemons: [
// 				{
// 					instance: 11, 
// 					ID: 1, 
// 					Name: "Dummy1", 
// 					Move: "VineWHIP", 
// 					Type: "Grass",
// 				}
// 			]

//     	},

//         {
// 			Name:"Trainer2",
// 			Pokemon_owned:"",
// 			Pokemons: [
// 				{
// 					instance: 12, 
// 					ID: 2, 
// 					Name: "Dummy2", 
// 					Move: "VineWHIP", 
// 					Type: "Grass",
// 				}
// 			]

//     	},
//     ],
// };
