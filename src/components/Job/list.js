import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import fetchJobsAction from "../../actions/fetchJobs";
import { bindActionCreators } from "redux";
import {
  getProductsError,
  getProducts,
  getProductsPending,
  getJobs,
  getJobsError,
  getJobsPending
} from "../../reducers";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faEnvelopeOpen,
  faEdit
} from "@fortawesome/free-solid-svg-icons";

import "../../assets/styles/tables/index.css";

class ConnectedJobList extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
    const { fetchJobs } = this.props;
    fetchJobs();
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (this.pending === false) return false;
    // more tests
    return true;
  }

  render() {
    const { jobs } = this.props;

    return (
      <table className="table is-bordered is-blackhead is-fullwidth research">
        <thead>
          <tr>
            <td className="has-text-centered">Date</td>
            <td>Name</td>
            <td>Company</td>
            <td>Contact name</td>
            <td>Agency</td>
            <td>Email</td>
            <td>City</td>
            <td>Country</td>
            <td>Tags</td>
            <td />
          </tr>
        </thead>
        <tbody>
          {jobs.map(job => (
            <tr key={job.Id}>
              <td className="is-2">{job.Date}</td>
              <td className="is-2">{job.Name}</td>
              <td className="has-text-left item">{job.Company}</td>
              <td className="has-text-left item">{job.ContactName}</td>
              <td className="is-1">{job.Agency == 0 ? "No" : "Yes"}</td>
              <td className="has-text-left item">{job.Email}</td>
              <td className="is-1">{job.City}</td>
              <td className="is-1">{job.Country}</td>
              <td className="has-text-left item">{job.Tags}</td>
              <td>
                {" "}
                <span className="icon has-text-info is-medium">
                  <FontAwesomeIcon icon={faEnvelopeOpen} size="sm" />
                </span>
                <Link to={"/edit/1"}>
                  <span className="icon has-text-primary is-medium">
                    <FontAwesomeIcon icon={faEdit} size="sm" />
                  </span>
                </Link>
                <span className="icon has-text-danger is-medium">
                  <FontAwesomeIcon icon={faTrashAlt} size="sm" />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  jobs: getJobs(state),
  error: getJobsError(state),
  pending: getJobsPending(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchJobs: fetchJobsAction
    },
    dispatch
  );

const JobList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedJobList);

export default JobList;
