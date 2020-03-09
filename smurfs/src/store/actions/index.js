import axios from "axios";
import { bindActionCreators } from "redux";

export const FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURF_FAILURE = "FETCHING_SMURF_FAILURE";
export const ADD_SMURF = "ADD_SMURF";

export const getSmurf = () => dispatch => {
  dispatch({ type: FETCHING_SMURF_START });

  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("BIG DATA", res.data);
      dispatch({
        type: FETCHING_SMURF_SUCCESS,
        payload: res.data.map(item => item)
      });
    })
    .catch(err => dispatch({ type: FETCHING_SMURF_FAILURE, payload: err }));
};

export const addSmurf = smurf => dispatch => {
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_SMURF, payload: smurf });
    })
    .catch(err => console.log(err));
};
