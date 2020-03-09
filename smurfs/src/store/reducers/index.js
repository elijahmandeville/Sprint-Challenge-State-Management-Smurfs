import {
  FETCHING_SMURF_FAILURE,
  FETCHING_SMURF_START,
  FETCHING_SMURF_SUCCESS,
  ADD_SMURF
} from "../actions";

export const initialState = {
  isFetching: false,
  error: "",
  smurfs: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCHING_SMURF_SUCCESS:
      console.log("SUCCESS: ", state);
      return {
        ...state,
        isFetching: false,
        error: "",
        smurfs: [...state.smurfs, ...action.payload]
      };
    case FETCHING_SMURF_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case ADD_SMURF:
      console.log("BIG PAYLOAD", action.payload);
      return {
        ...state,
        isFetching: false,
        error: "",
        smurfs: [...state.smurfs, action.payload]
      };
    default:
      return state;
  }
};
