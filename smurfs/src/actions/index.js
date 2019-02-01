import axios from '../axios-smurfs';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const actionTypes = {
  INIT_SMURFS: "INIT_SMURFS",
  FETCHING_SMURFS: "FETCHING_SMURFS",
  FETCH_SUCCEEDED: "FETCH_SUCCEEDED",
  FETCH_FAILED: "FETCH_FAILED"
}

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
const fetchingSmurfs = () => {
  return {
    type: actionTypes.FETCHING_SMURFS
  }
}
const fetchSucceeded = (smurfs) => {
  return {
    type: actionTypes.FETCH_SUCCEEDED,
    smurfs: smurfs
  }
}
const fetchFailed = () => {
  return {
    type: actionTypes.FETCH_FAILED
  }
}
export const initSmurfs = () => dispatch => {
  dispatch(fetchingSmurfs())
  axios.get('').then(res => {
    dispatch(fetchSucceeded(res.data))
  }).catch(err => {
    console.error(err)
    dispatch(fetchFailed())
  })
}