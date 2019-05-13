import {
  ADD_JOB,
  FETCH_JOBS_PENDING,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_ERROR
} from "../constants/action-types";
import axios from "axios";

const initialState = {
  pending: false,
  error: null,
  jobs: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_JOBS_PENDING:
      return {
        ...state,
        pending: true
      };

    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        pending: false,
        jobs: action.payload
      };

    case FETCH_JOBS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };

    case ADD_JOB:
      return {
        ...state
      };
  }
  return state;
}
export const getJobs = state => state.jobs;
export const getJobsPending = state => state.pending;
export const getJobsError = state => state.error;
export default rootReducer;
