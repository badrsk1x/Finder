import {
  ADD_JOB,
  FETCH_JOBS_PENDING,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_ERROR
} from "../constants/action-types";

export function addJob(payload) {
  return {
    type: ADD_JOB,
    payload
  };
}

export function fetchJobsPending() {
  return {
    type: FETCH_JOBS_PENDING
  };
}

export function fetchJobsSuccess(payload) {
  return {
    type: FETCH_JOBS_SUCCESS,
    payload
  };
}

export function fetchJobsError(error) {
  return {
    type: FETCH_JOBS_ERROR,
    error
  };
}
