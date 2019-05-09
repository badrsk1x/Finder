import { fetchJobsPending, fetchJobsSuccess, fetchJobsError } from "./index";

function fetchJobs() {
  return dispatch => {
    dispatch(fetchJobsPending());

    fetch(process.env.JOBS_JSON)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchJobsSuccess(res.Jobs));
        return res.Jobs;
      })
      .catch(error => {
        dispatch(fetchJobsError(error));
      });
  };
}

export default fetchJobs;
