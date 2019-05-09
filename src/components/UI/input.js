import React, { Component } from "react";

class Input extends Component {
  render() {
    const { label, placeholder, name, value, change } = this.props;

    return (
      <div className="field ">
        <label className="label">{label}</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={change}
          />
        </div>
      </div>
    );
  }
}

export default Input;
