import React, { Component } from "react";

import EditJob from "../components/Job/edit";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobID: null,
      job: {
        Id: 1,
        Date: "2019-04-05 14:15:58",
        Name: "Go Developer",
        Company: "Sphere - Columbus, OH",
        ContactName: "Mister John",
        Agency: 0,
        Email: "john@workjob.com",
        WebSite: "sphere.com",
        City: "London",
        Country: 3,
        Status: 0,
        WhereFound: "Indeed.com",
        Description:
          "Strong development or software engineering experience and a passion for security.",
        Tags:
          "#Go, #Cassandra, #AWS, #unit testing, #Mattermost, #GitLab, #Docker, #kanban ,#GitHub"
      }
    };
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    this.setState({ jobID: params.id });
  }

  render() {
    const { jobID, job } = this.state;
    return (
      <div className="columns">
        <div className="column">
          <h2 className="subtitle">Edit job with id {jobID}</h2>
          <EditJob job={job} />
        </div>
      </div>
    );
  }
}

export default Add;
