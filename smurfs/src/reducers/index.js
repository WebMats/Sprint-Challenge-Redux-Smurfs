/*
  Be sure to import in all of the action types from `../actions`
*/
import { actionTypes } from '../actions/';
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true,
        error: null
      }
    case actionTypes.FETCH_SUCCEEDED:
      return {
        ...state,
        smurfs: action.smurfs,
        fetchingSmurfs: false,
        error: null
      }
    case actionTypes.FETCH_FAILED:
      return {
        ...state,
        fetchingSmurfs: false,
        error: "Could not get smurf data."
      }
    default:
      return state;
  }

}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
