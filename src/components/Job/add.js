import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addJob } from "../../actions/index";
import { fetchJobsAction } from "../../actions";
import { bindActionCreators } from "redux";

import {
  getProductsError,
  getProducts,
  getProductsPending
} from "../../reducers";

import Input from "../UI/input";
import Radio from "../UI/radio";
import Select from "../UI/select";
import Textarea from "../UI/textarea";
import Button from "../UI/button";

class ConnectedFormAddJob extends Component {
  constructor(props) {
    console.log("a");
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const {
      Name,
      Company,
      ContactName,
      Email,
      WebSite,
      WhereFound,
      City
    } = this.state;
    const Id = uuidv1();
    this.props.addJob({
      Id,
      Name,
      Company,
      ContactName,
      Email,
      WebSite,
      WhereFound,
      City
    });
    this.setState({
      Name: ""
    });
  }

  render() {
    const Radiooptions = [
      { label: "No", value: 0 },
      { label: "Yes", value: 1 }
    ];

    const countries = [
      { label: "Germany", value: 0 },
      { label: "Netherlands", value: 1 },
      { label: "Switzerland", value: 2 },
      { label: "Uk", value: 3 },
      { label: "France", value: 4 },
      { label: "Spain", value: 5 },
      { label: "Portugal", value: 6 },
      { label: "Italy", value: 7 },
      { label: "Usa", value: 8 }
    ];

    const formInputs = [
      { label: "Job name", placeholder: "Add the job name", name: "Name" },
      {
        label: "Company",
        placeholder: "Add the Company name",
        name: "Company"
      },
      {
        label: "Contact name",
        placeholder: "Add the Contact name",
        name: "ContactName"
      },
      { label: "Email", placeholder: "Add the Contact Email", name: "Email" },
      {
        label: "WebSite",
        placeholder: "Add the Company WebSite",
        name: "WebSite"
      },
      {
        label: "Where found",
        placeholder: "Where found the job info",
        name: "WhereFound"
      },
      { label: "City", placeholder: "Add the job citye", name: "City" }
    ];
    return (
      <form onSubmit={this.handleSubmit}>
        {formInputs.map((item, index) => {
          return (
            <Input
              key={index}
              label={item.label}
              name={item.name}
              placeholder={item.placeholder}
              change={this.handleChange}
            />
          );
        })}

        <Radio
          label="Agency"
          name="agency"
          change={this.handleChange}
          options={Radiooptions}
        />
        <Select label="Country" options={countries} />
        <Textarea label="Description" placeholder="Job description" />

        <div className="field is-grouped is-grouped-multiline">
          <Button classStyle="button" value="One" />
          <Button classStyle="button" value="2" />
        </div>
        <div className="field is-grouped is-grouped-right">
          <Button
            classStyle="button is-primary"
            value="Submit"
            click={this.handleSubmit}
          />
          <Button classStyle="button is-light" value="Cancel" />
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addJob: job => dispatch(addJob(job))
  };
}

const AddJob = connect(
  null,
  mapDispatchToProps
)(ConnectedFormAddJob);

export default AddJob;
