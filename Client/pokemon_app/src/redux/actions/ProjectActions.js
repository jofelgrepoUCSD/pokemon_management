import {ActionTypes} from '../constants/action-types';
import axios from 'axios'


export const addTrainer = (project) => {
	return {
		type:ActionTypes.ADD_TRAINER,
		payload: project,
	};
};

export const addPokemon = (project) => {
	return {
		type:ActionTypes.ADD_POKEMON,
		payload: project,
	};
};

export const deleteTrainer = (project) => {
	return {
		type:ActionTypes.DELETE_TRAINER,
		payload: project,
	};
};


export const deletePokemon = (project) => {
	return {
		type:ActionTypes.DELETE_POKEMON,
		payload: project,
	};
};


export const searchTrainer = (project) => {

	return {
		type:ActionTypes.SEARCH_TRAINER,
		payload: project,
	};
};



//Use to fetch data
export const setProject = (project) => {
	return {
		type:ActionTypes.SET_PROJECTS,
		payload: project,
	};
};


/*----------------------------------------------------------------------------
 *
 *----------------------------------------------------------------------------								
*/

// export function fetchProject() {
// 	return dispatch =>{
// 		return  axios.get("http://localhost:3001/api/trainers/getall")
// 					 .then((res) => {dispatch(setProject(res.data))
// 					 .catch(err => console.log(err));});
// 	}
// }




