import axios from '../axios-smurfs';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const actionTypes = {
  FETCHING_SMURFS: "FETCHING_SMURFS",
  FETCH_SUCCEEDED: "FETCH_SUCCEEDED",
  FETCH_FAILED: "FETCH_FAILED",
  ADDING_SMURF: "ADDING_SMURF",
  ADD_SUCCEEDED: "ADD_SUCCEEDED",
  ADD_FAILED: "ADD_FAILED",
  DELETE_SUCCEEDED: "DELETE_SUCCEEDED",
  DELETE_FAILED: "DELETE_FAILED"
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

const addingSmurf = () => {
  return {
    type: actionTypes.ADDING_SMURF
  }
}
const addSucceeded = (newSmurfs) => {
  return {
    type: actionTypes.ADD_SUCCEEDED,
    smurfs: newSmurfs
  }
}
const addFailed = () => {
  return {
    type: actionTypes.ADD_FAILED
  }
}
export const addSmurf = (smurf) => dispatch => {
  dispatch(addingSmurf());
  axios.post('', smurf).then(res => {
    dispatch(addSucceeded(res.data))
  }).catch(err => {
    console.error(err);
    dispatch(addFailed())
  })
}
const deleteSucceeded = (updatedSmurfs) => {
  return {
    type: actionTypes.DELETE_SUCCEEDED,
    smurfs: updatedSmurfs
  }
}
const deleteFailed = () => {
  return {
    type: actionTypes.DELETE_FAILED
  }
}

export const deleteSmurf = (id) => dispatch => {
  axios.delete(`/${id}`).then(res => {
    dispatch(deleteSucceeded(res.data))
  }).catch(err => {
    console.error(err);
    dispatch(deleteFailed())
  })
}