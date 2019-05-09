import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";

import JobList from "../components/Job/list";
class Home extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column">
          <h2 className="subtitle">
            <span className="icon has-text-info is-medium">
              <FontAwesomeIcon icon={faEnvelopeOpen} size="sm" />
            </span>
            Your Current opened jobs
          </h2>
          <JobList />
        </div>
      </div>
    );
  }
}

export default Home;
