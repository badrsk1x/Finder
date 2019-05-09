import React, { Component } from "react";

class Radio extends Component {
  render() {
    const { label, options, name, val, change } = this.props;

    return (
      <div className="field">
        <label className="label">{label}</label>
        <div className="field-body">
          <div className="field is-narrow">
            <RadioOptions
              options={options}
              val={val}
              name={name}
              change={change}
            />
          </div>
        </div>
      </div>
    );
  }
}

const RadioOptions = props => {
  let checked = "";
  return (
    <div className="control">
      {props.options.map((item, index) => {
        {
          item.value == props.val ? (checked = "true") : (checked = "");
        }
        return (
          <label className="radio" key={index}>
            <input
              type="radio"
              name={props.name}
              value={item.value}
              onChange={props.change}
            />
            &nbsp; {item.label}
          </label>
        );
      })}
    </div>
  );
};

export default Radio;
