import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import AddJob from "../components/Job/add";

class Add extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column">
          <h2 className="subtitle">Add new job</h2>
          <AddJob />
        </div>
      </div>
    );
  }
}

export default Add;
