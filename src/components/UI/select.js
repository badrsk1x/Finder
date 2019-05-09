import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
class Select extends Component {
  render() {
    const { label, options, val } = this.props;

    return (
      <div className="field">
        <label className="label">{label}</label>
        <p className="control has-icons-left">
          <span className="select">
            <select value={val}>
              <option>{label}</option>
              {options.map((item, index) => {
                return (
                  <option key={index} value={options[index].value}>
                    {item.label}
                  </option>
                );
              })}
            </select>
          </span>

          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faGlobe} size="sm" />
            <i className="faGlobe" />
          </span>
        </p>
      </div>
    );
  }
}

export default Select;
