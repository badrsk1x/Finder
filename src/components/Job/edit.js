import React from "react";

import Input from "../UI/input";
import Radio from "../UI/radio";
import Select from "../UI/select";
import Textarea from "../UI/textarea";
import Button from "../UI/button";

const EditJob = props => {
  const Radiooptions = [{ label: "No", value: 0 }, { label: "Yes", value: 1 }];

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

  const status = [
    { label: "Created", value: 0 },
    { label: "Sent", value: 1 },
    { label: "Answred", value: 2 },
    { label: "Refused", value: 3 },
    { label: "Interview", value: 4 },
    { label: "Invitation", value: 5 }
  ];

  const formInputs = [
    {
      label: "Job name",
      placeholder: "Add the job name",
      valueName: "Name"
    },
    {
      label: "Company",
      placeholder: "Add the Company name",
      valueName: "Company"
    },
    {
      label: "Contact name",
      placeholder: "Add the Contact name",
      valueName: "ContactName"
    },
    {
      label: "Email",
      placeholder: "Add the Contact Email",
      valueName: "Email"
    },
    {
      label: "WebSite",
      placeholder: "Add the Company WebSite",
      valueName: "WebSite"
    },
    {
      label: "Where found",
      placeholder: "Where found the job info",
      valueName: "WhereFound"
    },
    { label: "City", placeholder: "Add the job citye", valueName: "City" }
  ];

  return (
    <React.Fragment>
      {formInputs.map((item, index) => {
        return (
          <Input
            key={index}
            label={item.label}
            placeholder={item.placeholder}
            value={props.job[item.valueName]}
          />
        );
      })}

      <Radio
        label="Agency"
        isMulti={false}
        options={Radiooptions}
        val={props.job["Agency"]}
      />
      <Select label="Country" options={countries} val={props.job["Country"]} />
      <Select label="Status" options={status} val={props.job["Status"]} />
      <Textarea
        label="Description"
        placeholder="Job description"
        val={props.job["Description"]}
      />

      <div className="field is-grouped is-grouped-multiline">
        <Button classStyle="button" value="One" />
        <Button classStyle="button" value="2" />
      </div>
      <div className="field is-grouped is-grouped-right">
        <Button classStyle="button is-primary" value="Submit" />
        <Button classStyle="button is-light" value="Cancel" />
      </div>
    </React.Fragment>
  );
};

export default EditJob;
